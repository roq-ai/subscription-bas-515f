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

import { TierInterface } from 'interfaces/tier';
import { useRoqClient, useTierFindManyWithCount } from 'lib/roq';
import { convertQueryToPrismaUtil } from 'lib/utils';

type ColumnType = ColumnDef<TierInterface, unknown>;

interface TierListPageProps {
  filters?: ListDataFiltersType;
  pageSize?: number;
  hidePagination?: boolean;
  showSearchFilter?: boolean;
  titleProps?: TextProps;
  hideTableBorders?: boolean;
  tableOnly?: boolean;
  hideActions?: boolean;
}

export function TierListPage(props: TierListPageProps) {
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
          searchTermKeys: ['description.contains', 'tier_name.contains', 'tier_additional_features.contains'],
          ...params.filters,
        },
        'tier',
      ),
    [params.searchTerm, params.filters, params.pageNumber, params.order, params.pageSize],
  );
  const { data, error, isLoading, mutate } = useTierFindManyWithCount({
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
      await roqClient.tier.delete({ where: { id } });
      await mutate();
    } catch (error) {
      setDeleteError(error);
    }
  };

  const handleView = (row: TierInterface) => {
    if (hasAccess('tier', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)) {
      router.push(`/tiers/view/${row.id}`);
    }
  };

  const columns: ColumnType[] = [
    { id: 'price', header: 'Price', accessorKey: 'price' },
    { id: 'tier_level', header: 'tier_level', accessorKey: 'tier_level' },
    { id: 'description', header: 'Description', accessorKey: 'description' },
    { id: 'max_messages', header: 'max_messages', accessorKey: 'max_messages' },
    { id: 'tier_name', header: 'Tier Name', accessorKey: 'tier_name' },
    { id: 'tier_duration', header: 'tier_duration', accessorKey: 'tier_duration' },
    { id: 'tier_status', header: 'Tier Status', accessorKey: 'tier_status' },
    {
      id: 'tier_expiration_notification',
      header: 'Tier Expiration Notification',
      accessorKey: 'tier_expiration_notification',
    },
    { id: 'tier_discount', header: 'Tier Discount', accessorKey: 'tier_discount' },
    { id: 'tier_upgrade_option', header: 'Tier Upgrade Option', accessorKey: 'tier_upgrade_option' },
    { id: 'tier_renewal_option', header: 'Tier Renewal Option', accessorKey: 'tier_renewal_option' },
    { id: 'tier_auto_upgrade', header: 'Tier Auto Upgrade', accessorKey: 'tier_auto_upgrade' },
    { id: 'tier_downgrade_option', header: 'Tier Downgrade Option', accessorKey: 'tier_downgrade_option' },
    { id: 'tier_cancellation_option', header: 'Tier Cancellation Option', accessorKey: 'tier_cancellation_option' },
    { id: 'tier_limit_per_user', header: 'tier_limit_per_user', accessorKey: 'tier_limit_per_user' },
    { id: 'tier_max_users', header: 'tier_max_users', accessorKey: 'tier_max_users' },
    { id: 'tier_additional_features', header: 'Tier Additional Features', accessorKey: 'tier_additional_features' },
    { id: 'tier_trial_period', header: 'tier_trial_period', accessorKey: 'tier_trial_period' },
    {
      id: 'tier_activation_date',
      header: 'Tier Activation Date',
      accessorKey: 'tier_activation_date',
      cell: ({ row: { original: record } }: any) =>
        record?.tier_activation_date ? format(record?.tier_activation_date, 'dd-MM-yyyy') : '',
    },
    {
      id: 'tier_deactivation_date',
      header: 'Tier Deactivation Date',
      accessorKey: 'tier_deactivation_date',
      cell: ({ row: { original: record } }: any) =>
        record?.tier_deactivation_date ? format(record?.tier_deactivation_date, 'dd-MM-yyyy') : '',
    },
    { id: 'tier_customization_option', header: 'Tier Customization Option', accessorKey: 'tier_customization_option' },
    { id: 'tier_support_option', header: 'Tier Support Option', accessorKey: 'tier_support_option' },
    { id: 'tier_referral_bonus', header: 'Tier Referral Bonus', accessorKey: 'tier_referral_bonus' },
    { id: 'tier_feedback_option', header: 'Tier Feedback Option', accessorKey: 'tier_feedback_option' },
    { id: 'tier_partner_discount', header: 'Tier Partner Discount', accessorKey: 'tier_partner_discount' },
    { id: 'tier_reward_points', header: 'tier_reward_points', accessorKey: 'tier_reward_points' },
    !hideActions
      ? {
          id: 'actions',
          header: '',
          accessorKey: 'actions',
          cell: ({ row: { original: record } }: any) => (
            <Flex justifyContent="flex-end">
              <NextLink href={`/tiers/view/${record.id}`} passHref legacyBehavior>
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
              {hasAccess('tier', AccessOperationEnum.UPDATE, AccessServiceEnum.PROJECT) && (
                <NextLink href={`/tiers/edit/${record.id}`} passHref legacyBehavior>
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
              {hasAccess('tier', AccessOperationEnum.DELETE, AccessServiceEnum.PROJECT) && (
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
            Tiers
          </Text>
          <AccessInfo entity="tier" />
        </Flex>

        {hasAccess('tier', AccessOperationEnum.CREATE, AccessServiceEnum.PROJECT) && (
          <NextLink href={`/tiers/create`} passHref legacyBehavior>
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
    entity: 'tier',
    operation: AccessOperationEnum.READ,
  }),
  withAppLayout(),
)(TierListPage);
