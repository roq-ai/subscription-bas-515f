import {
  AccessOperationEnum,
  AccessServiceEnum,
  requireNextAuth,
  withAuthorization,
  useAuthorizationApi,
} from '@roq/nextjs';
import { compose } from 'lib/compose';
import { Box, Button, Flex, IconButton, Link, Text, TextProps } from '@chakra-ui/react';
import { ColumnDef } from '@tanstack/react-table';
import { Error } from 'components/error';
import { SearchInput } from 'components/search-input';
import Table from 'components/table';
import { useDataTableParams, ListDataFiltersType } from 'components/table/hook/use-data-table-params.hook';
import { DATE_TIME_FORMAT } from 'const';
import d from 'dayjs';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import AppLayout from 'layout/app-layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { FiEdit2, FiPlus, FiTrash } from 'react-icons/fi';
import { PaginatedInterface } from 'interfaces';
import { withAppLayout } from 'lib/hocs/with-app-layout.hoc';
import { AccessInfo } from 'components/access-info';

import { MessageInterface } from 'interfaces/message';
import { useRoqClient, useMessageFindManyWithCount } from 'lib/roq';
import { convertQueryToPrismaUtil } from 'lib/utils';

type ColumnType = ColumnDef<MessageInterface, unknown>;

interface MessageListPageProps {
  filters?: ListDataFiltersType;
  pageSize?: number;
  hidePagination?: boolean;
  showSearchFilter?: boolean;
  titleProps?: TextProps;
  hideTableBorders?: boolean;
  tableOnly?: boolean;
  hideActions?: boolean;
}

export function MessageListPage(props: MessageListPageProps) {
  const {
    filters = {},
    titleProps = {},
    showSearchFilter = true,
    hidePagination,
    hideTableBorders,
    pageSize,
    tableOnly,
    hideActions,
  } = props;

  const { hasAccess } = useAuthorizationApi();
  const { onFiltersChange, onSearchTermChange, params, onPageChange, onPageSizeChange, setParams } = useDataTableParams(
    {
      filters,
      searchTerm: '',
      pageSize,
      order: [
        {
          desc: true,
          id: 'created_at',
        },
      ],
    },
  );

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          relations: [,],
          searchTerm: params.searchTerm,
          searchTermKeys: [
            'message_status.contains',
            'message_content.contains',
            'message_type.contains',
            'message_sender.contains',
            'message_recipient.contains',
            'message_attachment.contains',
            'message_category.contains',
            'message_feedback.contains',
          ],
          ...params.filters,
        },
        'message',
      ),
    [params.searchTerm, params.filters, params.pageNumber, params.order, params.pageSize],
  );
  const { data, error, isLoading, mutate } = useMessageFindManyWithCount({
    skip: params.pageNumber * params.pageSize,
    take: params.pageSize,
    orderBy: {
      created_at: 'desc',
    },
    ...queryParams,
  });
  const router = useRouter();
  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = async (id: string) => {
    setDeleteError(null);
    try {
      await roqClient.message.delete({ where: { id } });
      await mutate();
    } catch (error) {
      setDeleteError(error);
    }
  };

  const handleView = (row: MessageInterface) => {
    if (hasAccess('message', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)) {
      router.push(`/messages/view/${row.id}`);
    }
  };

  const columns: ColumnType[] = [
    { id: 'message_status', header: 'Message Status', accessorKey: 'message_status' },
    { id: 'message_priority', header: 'message_priority', accessorKey: 'message_priority' },
    { id: 'message_content', header: 'Message Content', accessorKey: 'message_content' },
    { id: 'message_type', header: 'Message Type', accessorKey: 'message_type' },
    { id: 'message_sender', header: 'Message Sender', accessorKey: 'message_sender' },
    { id: 'message_recipient', header: 'Message Recipient', accessorKey: 'message_recipient' },
    { id: 'message_read_status', header: 'Message Read Status', accessorKey: 'message_read_status' },
    {
      id: 'message_delivery_time',
      header: 'Message Delivery Time',
      accessorKey: 'message_delivery_time',
      cell: ({ row: { original: record } }: any) =>
        record?.message_delivery_time ? format(record?.message_delivery_time, 'dd-MM-yyyy') : '',
    },
    { id: 'message_attachment', header: 'Message Attachment', accessorKey: 'message_attachment' },
    { id: 'message_reply_status', header: 'Message Reply Status', accessorKey: 'message_reply_status' },
    { id: 'message_category', header: 'Message Category', accessorKey: 'message_category' },
    {
      id: 'message_sent_time',
      header: 'Message Sent Time',
      accessorKey: 'message_sent_time',
      cell: ({ row: { original: record } }: any) =>
        record?.message_sent_time ? format(record?.message_sent_time, 'dd-MM-yyyy') : '',
    },
    {
      id: 'message_response_time',
      header: 'Message Response Time',
      accessorKey: 'message_response_time',
      cell: ({ row: { original: record } }: any) =>
        record?.message_response_time ? format(record?.message_response_time, 'dd-MM-yyyy') : '',
    },
    { id: 'message_feedback', header: 'Message Feedback', accessorKey: 'message_feedback' },
    !hideActions
      ? {
          id: 'actions',
          header: '',
          accessorKey: 'actions',
          cell: ({ row: { original: record } }: any) => (
            <Flex justifyContent="flex-end">
              <NextLink href={`/messages/view/${record.id}`} passHref legacyBehavior>
                <Button
                  onClick={(e) => e.stopPropagation()}
                  mr={2}
                  padding="0rem 8px"
                  height="24px"
                  fontSize="0.75rem"
                  variant="solid"
                  backgroundColor="state.neutral.transparent"
                  color="state.neutral.main"
                  borderRadius="6px"
                >
                  View
                </Button>
              </NextLink>
              {hasAccess('message', AccessOperationEnum.UPDATE, AccessServiceEnum.PROJECT) && (
                <NextLink href={`/messages/edit/${record.id}`} passHref legacyBehavior>
                  <Button
                    onClick={(e) => e.stopPropagation()}
                    mr={2}
                    padding="0rem 0.5rem"
                    height="24px"
                    fontSize="0.75rem"
                    variant="outline"
                    color="state.info.main"
                    borderRadius="6px"
                    border="1px"
                    borderColor="state.info.transparent"
                    leftIcon={<FiEdit2 width="12px" height="12px" color="state.info.main" />}
                  >
                    Edit
                  </Button>
                </NextLink>
              )}
              {hasAccess('message', AccessOperationEnum.DELETE, AccessServiceEnum.PROJECT) && (
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(record.id);
                  }}
                  padding="0rem 0.5rem"
                  variant="outline"
                  aria-label="edit"
                  height={'24px'}
                  fontSize="0.75rem"
                  color="state.error.main"
                  borderRadius="6px"
                  borderColor="state.error.transparent"
                  icon={<FiTrash width="12px" height="12px" color="error.main" />}
                />
              )}
            </Flex>
          ),
        }
      : null,
  ].filter(Boolean) as ColumnType[];
  const table = (
    <Table
      hidePagination={hidePagination}
      hideTableBorders={hideTableBorders}
      isLoading={isLoading}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      columns={columns}
      data={data?.data}
      totalCount={data?.count || 0}
      pageSize={params.pageSize}
      pageIndex={params.pageNumber}
      order={params.order}
      setParams={setParams}
      onRowClick={handleView}
    />
  );
  if (tableOnly) {
    return table;
  }

  return (
    <Flex direction="column" gap={{ md: 6, base: 7 }} shadow="none">
      <Flex justifyContent={{ md: 'space-between' }} direction={{ base: 'column', md: 'row' }} gap={{ base: '28px' }}>
        <Flex alignItems="center" gap={1}>
          <Text as="h1" fontSize="1.875rem" fontWeight="bold" color="base.content" {...titleProps}>
            Messages
          </Text>
          <AccessInfo entity="message" />
        </Flex>

        {hasAccess('message', AccessOperationEnum.CREATE, AccessServiceEnum.PROJECT) && (
          <NextLink href={`/messages/create`} passHref legacyBehavior>
            <Button
              onClick={(e) => e.stopPropagation()}
              height={'2rem'}
              padding="0rem 0.75rem"
              fontSize={'0.875rem'}
              fontWeight={600}
              bg="state.info.main"
              borderRadius={'6px'}
              color="base.100"
              _hover={{
                bg: 'state.info.focus',
              }}
              as="a"
            >
              <FiPlus size={16} color="state.info.content" style={{ marginRight: '0.25rem' }} />
              Create
            </Button>
          </NextLink>
        )}
      </Flex>
      {showSearchFilter && (
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
          gap={{ base: 2, md: 0 }}
        >
          <Box>
            <SearchInput value={params.searchTerm} onChange={onSearchTermChange} />
          </Box>
        </Flex>
      )}

      {error && (
        <Box>
          <Error error={error} />
        </Box>
      )}
      {deleteError && (
        <Box>
          <Error error={deleteError} />{' '}
        </Box>
      )}
      {table}
    </Flex>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'message',
    operation: AccessOperationEnum.READ,
  }),
  withAppLayout(),
)(MessageListPage);
