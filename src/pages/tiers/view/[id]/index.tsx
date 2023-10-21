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
import { useTierFindFirst, useRoqClient } from 'lib/roq';

import { TierInterface } from 'interfaces/tier';

function TierViewPage() {
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
        'tier',
      ),
    [id],
  );
  const { data, error, isLoading } = useTierFindFirst(queryParams, {}, { disabled: !id });

  const [deleteError, setDeleteError] = useState(null);
  const [createError, setCreateError] = useState(null);

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Tiers',
              link: '/tiers',
            },
            {
              label: 'Tier Details',
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
                    Tier Details
                  </Text>
                </Box>
                {hasAccess('tier', AccessOperationEnum.UPDATE, AccessServiceEnum.PROJECT) && (
                  <NextLink href={`/tiers/edit/${id}`} passHref legacyBehavior>
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
                <FormListItem label="Price" text={data?.price} />

                <FormListItem label="Tier Level" text={data?.tier_level} />

                <FormListItem label="Description" text={data?.description} />

                <FormListItem label="Max Messages" text={data?.max_messages} />

                <FormListItem label="Tier Name" text={data?.tier_name} />

                <FormListItem label="Tier Duration" text={data?.tier_duration} />

                <FormListItem label="Tier Status" text={data?.tier_status} />

                <FormListItem label="Tier Expiration Notification" text={data?.tier_expiration_notification} />

                <FormListItem label="Tier Discount" text={data?.tier_discount} />

                <FormListItem label="Tier Upgrade Option" text={data?.tier_upgrade_option} />

                <FormListItem label="Tier Renewal Option" text={data?.tier_renewal_option} />

                <FormListItem label="Tier Auto Upgrade" text={data?.tier_auto_upgrade} />

                <FormListItem label="Tier Downgrade Option" text={data?.tier_downgrade_option} />

                <FormListItem label="Tier Cancellation Option" text={data?.tier_cancellation_option} />

                <FormListItem label="Tier Limit Per User" text={data?.tier_limit_per_user} />

                <FormListItem label="Tier Max Users" text={data?.tier_max_users} />

                <FormListItem label="Tier Additional Features" text={data?.tier_additional_features} />

                <FormListItem label="Tier Trial Period" text={data?.tier_trial_period} />

                <FormListItem
                  label="Tier Activation Date"
                  text={data?.tier_activation_date ? format(data?.tier_activation_date, 'dd-MM-yyyy') : ''}
                />

                <FormListItem
                  label="Tier Deactivation Date"
                  text={data?.tier_deactivation_date ? format(data?.tier_deactivation_date, 'dd-MM-yyyy') : ''}
                />

                <FormListItem label="Tier Customization Option" text={data?.tier_customization_option} />

                <FormListItem label="Tier Support Option" text={data?.tier_support_option} />

                <FormListItem label="Tier Referral Bonus" text={data?.tier_referral_bonus} />

                <FormListItem label="Tier Feedback Option" text={data?.tier_feedback_option} />

                <FormListItem label="Tier Partner Discount" text={data?.tier_partner_discount} />

                <FormListItem label="Tier Reward Points" text={data?.tier_reward_points} />

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
    entity: 'tier',
    operation: AccessOperationEnum.READ,
  }),
)(TierViewPage);
