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
import { useUserSubscriptionFindFirst, useRoqClient } from 'lib/roq';

import { UserSubscriptionInterface } from 'interfaces/user-subscription';

function UserSubscriptionViewPage() {
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
        'user_subscription',
      ),
    [id],
  );
  const { data, error, isLoading } = useUserSubscriptionFindFirst(queryParams, {}, { disabled: !id });

  const [deleteError, setDeleteError] = useState(null);
  const [createError, setCreateError] = useState(null);

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'User Subscriptions',
              link: '/user-subscriptions',
            },
            {
              label: 'User Subscription Details',
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
                    User Subscription Details
                  </Text>
                </Box>
                {hasAccess('user_subscription', AccessOperationEnum.UPDATE, AccessServiceEnum.PROJECT) && (
                  <NextLink href={`/user-subscriptions/edit/${id}`} passHref legacyBehavior>
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
                <FormListItem
                  label="Subscription End Date"
                  text={data?.subscription_end_date ? format(data?.subscription_end_date, 'dd-MM-yyyy') : ''}
                />

                <FormListItem
                  label="Subscription Start Date"
                  text={data?.subscription_start_date ? format(data?.subscription_start_date, 'dd-MM-yyyy') : ''}
                />

                <FormListItem label="Subscription Status" text={data?.subscription_status} />

                <FormListItem
                  label="Subscription Renewal Date"
                  text={data?.subscription_renewal_date ? format(data?.subscription_renewal_date, 'dd-MM-yyyy') : ''}
                />

                <FormListItem label="Subscription Tier Id" text={data?.subscription_tier_id} />

                <FormListItem label="Subscription Payment Status" text={data?.subscription_payment_status} />

                <FormListItem label="User Subscription Type" text={data?.user_subscription_type} />

                <FormListItem label="User Subscription End Reason" text={data?.user_subscription_end_reason} />

                <FormListItem
                  label="User Subscription Renewal Reminder"
                  text={data?.user_subscription_renewal_reminder}
                />

                <FormListItem
                  label="User Subscription Last Updated"
                  text={
                    data?.user_subscription_last_updated
                      ? format(data?.user_subscription_last_updated, 'dd-MM-yyyy')
                      : ''
                  }
                />

                <FormListItem
                  label="User Subscription Activation Date"
                  text={
                    data?.user_subscription_activation_date
                      ? format(data?.user_subscription_activation_date, 'dd-MM-yyyy')
                      : ''
                  }
                />

                <FormListItem
                  label="User Subscription Cancellation Date"
                  text={
                    data?.user_subscription_cancellation_date
                      ? format(data?.user_subscription_cancellation_date, 'dd-MM-yyyy')
                      : ''
                  }
                />

                <FormListItem
                  label="User Subscription Pause Date"
                  text={
                    data?.user_subscription_pause_date ? format(data?.user_subscription_pause_date, 'dd-MM-yyyy') : ''
                  }
                />

                <FormListItem label="User Subscription Pause Reason" text={data?.user_subscription_pause_reason} />

                <FormListItem label="User Subscription Pause Duration" text={data?.user_subscription_pause_duration} />

                <FormListItem
                  label="User Subscription Pause End Date"
                  text={
                    data?.user_subscription_pause_end_date
                      ? format(data?.user_subscription_pause_end_date, 'dd-MM-yyyy')
                      : ''
                  }
                />

                <FormListItem label="User Subscription Pause Count" text={data?.user_subscription_pause_count} />

                <FormListItem
                  label="User Subscription Pause Extension"
                  text={data?.user_subscription_pause_extension}
                />

                <FormListItem label="User Subscription Feedback" text={data?.user_subscription_feedback} />

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
    entity: 'user_subscription',
    operation: AccessOperationEnum.READ,
  }),
)(UserSubscriptionViewPage);
