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
import { useRoqClient, useSubscriptionFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { subscriptionValidationSchema } from 'validationSchema/subscriptions';
import { SubscriptionInterface } from 'interfaces/subscription';

function SubscriptionEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'subscription',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useSubscriptionFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: SubscriptionInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.subscription.update({
        data: values as RoqTypes.subscription,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/subscriptions');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<SubscriptionInterface>({
    initialValues: data,
    validationSchema: subscriptionValidationSchema,
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
              label: 'Subscriptions',
              link: '/subscriptions',
            },
            {
              label: 'Update Subscription',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Subscription
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="expiry_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Expiry Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.expiry_date ? new Date(formik.values?.expiry_date) : null}
              onChange={(value: Date) => formik.setFieldValue('expiry_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.subscription_type}
            label={'Subscription Type'}
            props={{
              name: 'subscription_type',
              placeholder: 'Subscription Type',
              value: formik.values?.subscription_type,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Subscription Duration"
            formControlProps={{
              id: 'subscription_duration',
              isInvalid: !!formik.errors?.subscription_duration,
            }}
            name="subscription_duration"
            error={formik.errors?.subscription_duration}
            value={formik.values?.subscription_duration}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('subscription_duration', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Subscription Cost"
            formControlProps={{
              id: 'subscription_cost',
              isInvalid: !!formik.errors?.subscription_cost,
            }}
            name="subscription_cost"
            error={formik.errors?.subscription_cost}
            value={formik.values?.subscription_cost}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('subscription_cost', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

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

          <TextInput
            error={formik.errors.subscription_features}
            label={'Subscription Features'}
            props={{
              name: 'subscription_features',
              placeholder: 'Subscription Features',
              value: formik.values?.subscription_features,
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
              onClick={() => router.push('/subscriptions')}
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
    entity: 'subscription',
    operation: AccessOperationEnum.UPDATE,
  }),
)(SubscriptionEditPage);
