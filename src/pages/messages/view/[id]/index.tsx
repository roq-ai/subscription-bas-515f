import { Box, Center, Flex, Link, List, ListItem, Spinner, Stack, Text, Image, Button } from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import { Error } from 'components/error';
import { FormListItem } from 'components/form-list-item';
import { FormWrapper } from 'components/form-wrapper';
import AppLayout from 'layout/app-layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useMemo } from 'react';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import { routes } from 'routes';
import { compose } from 'lib/compose';
import {
  AccessOperationEnum,
  AccessServiceEnum,
  requireNextAuth,
  useAuthorizationApi,
  withAuthorization,
} from '@roq/nextjs';
import { UserPageTable } from 'components/user-page-table';
import { EntityImage } from 'components/entity-image';
import { FiEdit2 } from 'react-icons/fi';
import { convertQueryToPrismaUtil } from 'lib/utils';
import * as RoqTypes from 'lib/roq/types';
import { useMessageFindFirst, useRoqClient } from 'lib/roq';

import { MessageInterface } from 'interfaces/message';

function MessageViewPage() {
  const { hasAccess } = useAuthorizationApi();
  const router = useRouter();
  const id = router.query.id as string;
  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          relations: [],
          id,
        },
        'message',
      ),
    [id],
  );
  const { data, error, isLoading } = useMessageFindFirst(queryParams, {}, { disabled: !id });

  const [deleteError, setDeleteError] = useState(null);
  const [createError, setCreateError] = useState(null);

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Messages',
              link: '/messages',
            },
            {
              label: 'Message Details',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <>
            <FormWrapper wrapperProps={{ border: 'none', gap: 3, p: 0 }}>
              <Flex alignItems="center" w="full" justifyContent={'space-between'}>
                <Box>
                  <Text
                    sx={{
                      fontSize: '1.875rem',
                      fontWeight: 700,
                      color: 'base.content',
                    }}
                  >
                    Message Details
                  </Text>
                </Box>
                {hasAccess('message', AccessOperationEnum.UPDATE, AccessServiceEnum.PROJECT) && (
                  <NextLink href={`/messages/edit/${id}`} passHref legacyBehavior>
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
              </Flex>

              <List
                w="100%"
                css={{
                  '> li:not(:last-child)': {
                    borderBottom: '1px solid var(--chakra-colors-base-300)',
                  },
                }}
              >
                <FormListItem label="Message Status" text={data?.message_status} />

                <FormListItem label="Message Priority" text={data?.message_priority} />

                <FormListItem label="Message Content" text={data?.message_content} />

                <FormListItem label="Message Type" text={data?.message_type} />

                <FormListItem label="Message Sender" text={data?.message_sender} />

                <FormListItem label="Message Recipient" text={data?.message_recipient} />

                <FormListItem label="Message Read Status" text={data?.message_read_status} />

                <FormListItem
                  label="Message Delivery Time"
                  text={data?.message_delivery_time ? format(data?.message_delivery_time, 'dd-MM-yyyy') : ''}
                />

                <FormListItem label="Message Attachment" text={data?.message_attachment} />

                <FormListItem label="Message Reply Status" text={data?.message_reply_status} />

                <FormListItem label="Message Category" text={data?.message_category} />

                <FormListItem
                  label="Message Sent Time"
                  text={data?.message_sent_time ? format(data?.message_sent_time, 'dd-MM-yyyy') : ''}
                />

                <FormListItem
                  label="Message Response Time"
                  text={data?.message_response_time ? format(data?.message_response_time, 'dd-MM-yyyy') : ''}
                />

                <FormListItem label="Message Feedback" text={data?.message_feedback} />

                <FormListItem
                  label="Created At"
                  text={data?.created_at ? format(data?.created_at, 'dd-MM-yyyy') : ''}
                />

                <FormListItem
                  label="Updated At"
                  text={data?.updated_at ? format(data?.updated_at, 'dd-MM-yyyy') : ''}
                />
              </List>
            </FormWrapper>
          </>
        )}
      </Box>
    </AppLayout>
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
)(MessageViewPage);
