import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useUserSubscriptionFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { userSubscriptionValidationSchema } from 'validationSchema/user-subscriptions';
import { UserSubscriptionInterface } from 'interfaces/user-subscription';

function UserSubscriptionEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'user_subscription',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useUserSubscriptionFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: UserSubscriptionInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.user_subscription.update({
        data: values as RoqTypes.user_subscription,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/user-subscriptions');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<UserSubscriptionInterface>({
    initialValues: data,
    validationSchema: userSubscriptionValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

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
              label: 'Update User Subscription',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update User Subscription
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="subscription_end_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Subscription End Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.subscription_end_date ? new Date(formik.values?.subscription_end_date) : null}
              onChange={(value: Date) => formik.setFieldValue('subscription_end_date', value)}
            />
          </FormControl>
          <FormControl id="subscription_start_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Subscription Start Date
            </FormLabel>
            <DatePicker
              selected={
                formik.values?.subscription_start_date ? new Date(formik.values?.subscription_start_date) : null
              }
              onChange={(value: Date) => formik.setFieldValue('subscription_start_date', value)}
            />
          </FormControl>

          <FormControl
            id="subscription_status"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.subscription_status}
          >
            <FormLabel htmlFor="switch-subscription_status">Subscription Status</FormLabel>
            <Switch
              id="switch-subscription_status"
              name="subscription_status"
              onChange={formik.handleChange}
              value={formik.values?.subscription_status ? 1 : 0}
            />
            {formik.errors?.subscription_status && (
              <FormErrorMessage>{formik.errors?.subscription_status}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="subscription_renewal_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Subscription Renewal Date
            </FormLabel>
            <DatePicker
              selected={
                formik.values?.subscription_renewal_date ? new Date(formik.values?.subscription_renewal_date) : null
              }
              onChange={(value: Date) => formik.setFieldValue('subscription_renewal_date', value)}
            />
          </FormControl>

          <NumberInput
            label="Subscription Tier Id"
            formControlProps={{
              id: 'subscription_tier_id',
              isInvalid: !!formik.errors?.subscription_tier_id,
            }}
            name="subscription_tier_id"
            error={formik.errors?.subscription_tier_id}
            value={formik.values?.subscription_tier_id}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('subscription_tier_id', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl
            id="subscription_payment_status"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.subscription_payment_status}
          >
            <FormLabel htmlFor="switch-subscription_payment_status">Subscription Payment Status</FormLabel>
            <Switch
              id="switch-subscription_payment_status"
              name="subscription_payment_status"
              onChange={formik.handleChange}
              value={formik.values?.subscription_payment_status ? 1 : 0}
            />
            {formik.errors?.subscription_payment_status && (
              <FormErrorMessage>{formik.errors?.subscription_payment_status}</FormErrorMessage>
            )}
          </FormControl>

          <TextInput
            error={formik.errors.user_subscription_type}
            label={'User Subscription Type'}
            props={{
              name: 'user_subscription_type',
              placeholder: 'User Subscription Type',
              value: formik.values?.user_subscription_type,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.user_subscription_end_reason}
            label={'User Subscription End Reason'}
            props={{
              name: 'user_subscription_end_reason',
              placeholder: 'User Subscription End Reason',
              value: formik.values?.user_subscription_end_reason,
              onChange: formik.handleChange,
            }}
          />

          <FormControl
            id="user_subscription_renewal_reminder"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.user_subscription_renewal_reminder}
          >
            <FormLabel htmlFor="switch-user_subscription_renewal_reminder">
              User Subscription Renewal Reminder
            </FormLabel>
            <Switch
              id="switch-user_subscription_renewal_reminder"
              name="user_subscription_renewal_reminder"
              onChange={formik.handleChange}
              value={formik.values?.user_subscription_renewal_reminder ? 1 : 0}
            />
            {formik.errors?.user_subscription_renewal_reminder && (
              <FormErrorMessage>{formik.errors?.user_subscription_renewal_reminder}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="user_subscription_last_updated" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              User Subscription Last Updated
            </FormLabel>
            <DatePicker
              selected={
                formik.values?.user_subscription_last_updated
                  ? new Date(formik.values?.user_subscription_last_updated)
                  : null
              }
              onChange={(value: Date) => formik.setFieldValue('user_subscription_last_updated', value)}
            />
          </FormControl>
          <FormControl id="user_subscription_activation_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              User Subscription Activation Date
            </FormLabel>
            <DatePicker
              selected={
                formik.values?.user_subscription_activation_date
                  ? new Date(formik.values?.user_subscription_activation_date)
                  : null
              }
              onChange={(value: Date) => formik.setFieldValue('user_subscription_activation_date', value)}
            />
          </FormControl>
          <FormControl id="user_subscription_cancellation_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              User Subscription Cancellation Date
            </FormLabel>
            <DatePicker
              selected={
                formik.values?.user_subscription_cancellation_date
                  ? new Date(formik.values?.user_subscription_cancellation_date)
                  : null
              }
              onChange={(value: Date) => formik.setFieldValue('user_subscription_cancellation_date', value)}
            />
          </FormControl>
          <FormControl id="user_subscription_pause_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              User Subscription Pause Date
            </FormLabel>
            <DatePicker
              selected={
                formik.values?.user_subscription_pause_date
                  ? new Date(formik.values?.user_subscription_pause_date)
                  : null
              }
              onChange={(value: Date) => formik.setFieldValue('user_subscription_pause_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.user_subscription_pause_reason}
            label={'User Subscription Pause Reason'}
            props={{
              name: 'user_subscription_pause_reason',
              placeholder: 'User Subscription Pause Reason',
              value: formik.values?.user_subscription_pause_reason,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="User Subscription Pause Duration"
            formControlProps={{
              id: 'user_subscription_pause_duration',
              isInvalid: !!formik.errors?.user_subscription_pause_duration,
            }}
            name="user_subscription_pause_duration"
            error={formik.errors?.user_subscription_pause_duration}
            value={formik.values?.user_subscription_pause_duration}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('user_subscription_pause_duration', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="user_subscription_pause_end_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              User Subscription Pause End Date
            </FormLabel>
            <DatePicker
              selected={
                formik.values?.user_subscription_pause_end_date
                  ? new Date(formik.values?.user_subscription_pause_end_date)
                  : null
              }
              onChange={(value: Date) => formik.setFieldValue('user_subscription_pause_end_date', value)}
            />
          </FormControl>

          <NumberInput
            label="User Subscription Pause Count"
            formControlProps={{
              id: 'user_subscription_pause_count',
              isInvalid: !!formik.errors?.user_subscription_pause_count,
            }}
            name="user_subscription_pause_count"
            error={formik.errors?.user_subscription_pause_count}
            value={formik.values?.user_subscription_pause_count}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('user_subscription_pause_count', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="User Subscription Pause Extension"
            formControlProps={{
              id: 'user_subscription_pause_extension',
              isInvalid: !!formik.errors?.user_subscription_pause_extension,
            }}
            name="user_subscription_pause_extension"
            error={formik.errors?.user_subscription_pause_extension}
            value={formik.values?.user_subscription_pause_extension}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('user_subscription_pause_extension', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.user_subscription_feedback}
            label={'User Subscription Feedback'}
            props={{
              name: 'user_subscription_feedback',
              placeholder: 'User Subscription Feedback',
              value: formik.values?.user_subscription_feedback,
              onChange: formik.handleChange,
            }}
          />

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/user-subscriptions')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
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
    operation: AccessOperationEnum.UPDATE,
  }),
)(UserSubscriptionEditPage);
