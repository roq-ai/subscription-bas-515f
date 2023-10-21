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
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { tierValidationSchema } from 'validationSchema/tiers';
import { TierInterface } from 'interfaces/tier';

function TierCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: TierInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.tier.create({ data: values as RoqTypes.tier });
      resetForm();
      router.push('/tiers');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<TierInterface>({
    initialValues: {
      price: 0,
      tier_level: 0,
      description: '',
      max_messages: 0,
      tier_name: '',
      tier_duration: 0,
      tier_status: false,
      tier_expiration_notification: false,
      tier_discount: 0,
      tier_upgrade_option: false,
      tier_renewal_option: false,
      tier_auto_upgrade: false,
      tier_downgrade_option: false,
      tier_cancellation_option: false,
      tier_limit_per_user: 0,
      tier_max_users: 0,
      tier_additional_features: '',
      tier_trial_period: 0,
      tier_activation_date: new Date(new Date().toDateString()),
      tier_deactivation_date: new Date(new Date().toDateString()),
      tier_customization_option: false,
      tier_support_option: false,
      tier_referral_bonus: 0,
      tier_feedback_option: false,
      tier_partner_discount: 0,
      tier_reward_points: 0,
    },
    validationSchema: tierValidationSchema,
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
              label: 'Tiers',
              link: '/tiers',
            },
            {
              label: 'Create Tier',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Tier
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Price"
            formControlProps={{
              id: 'price',
              isInvalid: !!formik.errors?.price,
            }}
            name="price"
            error={formik.errors?.price}
            value={formik.values?.price}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('price', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Tier Level"
            formControlProps={{
              id: 'tier_level',
              isInvalid: !!formik.errors?.tier_level,
            }}
            name="tier_level"
            error={formik.errors?.tier_level}
            value={formik.values?.tier_level}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('tier_level', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.description}
            label={'Description'}
            props={{
              name: 'description',
              placeholder: 'Description',
              value: formik.values?.description,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Max Messages"
            formControlProps={{
              id: 'max_messages',
              isInvalid: !!formik.errors?.max_messages,
            }}
            name="max_messages"
            error={formik.errors?.max_messages}
            value={formik.values?.max_messages}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('max_messages', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.tier_name}
            label={'Tier Name'}
            props={{
              name: 'tier_name',
              placeholder: 'Tier Name',
              value: formik.values?.tier_name,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Tier Duration"
            formControlProps={{
              id: 'tier_duration',
              isInvalid: !!formik.errors?.tier_duration,
            }}
            name="tier_duration"
            error={formik.errors?.tier_duration}
            value={formik.values?.tier_duration}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('tier_duration', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl
            id="tier_status"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_status}
          >
            <FormLabel htmlFor="switch-tier_status">Tier Status</FormLabel>
            <Switch
              id="switch-tier_status"
              name="tier_status"
              onChange={formik.handleChange}
              value={formik.values?.tier_status ? 1 : 0}
            />
            {formik.errors?.tier_status && <FormErrorMessage>{formik.errors?.tier_status}</FormErrorMessage>}
          </FormControl>

          <FormControl
            id="tier_expiration_notification"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_expiration_notification}
          >
            <FormLabel htmlFor="switch-tier_expiration_notification">Tier Expiration Notification</FormLabel>
            <Switch
              id="switch-tier_expiration_notification"
              name="tier_expiration_notification"
              onChange={formik.handleChange}
              value={formik.values?.tier_expiration_notification ? 1 : 0}
            />
            {formik.errors?.tier_expiration_notification && (
              <FormErrorMessage>{formik.errors?.tier_expiration_notification}</FormErrorMessage>
            )}
          </FormControl>

          <NumberInput
            label="Tier Discount"
            formControlProps={{
              id: 'tier_discount',
              isInvalid: !!formik.errors?.tier_discount,
            }}
            name="tier_discount"
            error={formik.errors?.tier_discount}
            value={formik.values?.tier_discount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('tier_discount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl
            id="tier_upgrade_option"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_upgrade_option}
          >
            <FormLabel htmlFor="switch-tier_upgrade_option">Tier Upgrade Option</FormLabel>
            <Switch
              id="switch-tier_upgrade_option"
              name="tier_upgrade_option"
              onChange={formik.handleChange}
              value={formik.values?.tier_upgrade_option ? 1 : 0}
            />
            {formik.errors?.tier_upgrade_option && (
              <FormErrorMessage>{formik.errors?.tier_upgrade_option}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            id="tier_renewal_option"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_renewal_option}
          >
            <FormLabel htmlFor="switch-tier_renewal_option">Tier Renewal Option</FormLabel>
            <Switch
              id="switch-tier_renewal_option"
              name="tier_renewal_option"
              onChange={formik.handleChange}
              value={formik.values?.tier_renewal_option ? 1 : 0}
            />
            {formik.errors?.tier_renewal_option && (
              <FormErrorMessage>{formik.errors?.tier_renewal_option}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            id="tier_auto_upgrade"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_auto_upgrade}
          >
            <FormLabel htmlFor="switch-tier_auto_upgrade">Tier Auto Upgrade</FormLabel>
            <Switch
              id="switch-tier_auto_upgrade"
              name="tier_auto_upgrade"
              onChange={formik.handleChange}
              value={formik.values?.tier_auto_upgrade ? 1 : 0}
            />
            {formik.errors?.tier_auto_upgrade && (
              <FormErrorMessage>{formik.errors?.tier_auto_upgrade}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            id="tier_downgrade_option"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_downgrade_option}
          >
            <FormLabel htmlFor="switch-tier_downgrade_option">Tier Downgrade Option</FormLabel>
            <Switch
              id="switch-tier_downgrade_option"
              name="tier_downgrade_option"
              onChange={formik.handleChange}
              value={formik.values?.tier_downgrade_option ? 1 : 0}
            />
            {formik.errors?.tier_downgrade_option && (
              <FormErrorMessage>{formik.errors?.tier_downgrade_option}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            id="tier_cancellation_option"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_cancellation_option}
          >
            <FormLabel htmlFor="switch-tier_cancellation_option">Tier Cancellation Option</FormLabel>
            <Switch
              id="switch-tier_cancellation_option"
              name="tier_cancellation_option"
              onChange={formik.handleChange}
              value={formik.values?.tier_cancellation_option ? 1 : 0}
            />
            {formik.errors?.tier_cancellation_option && (
              <FormErrorMessage>{formik.errors?.tier_cancellation_option}</FormErrorMessage>
            )}
          </FormControl>

          <NumberInput
            label="Tier Limit Per User"
            formControlProps={{
              id: 'tier_limit_per_user',
              isInvalid: !!formik.errors?.tier_limit_per_user,
            }}
            name="tier_limit_per_user"
            error={formik.errors?.tier_limit_per_user}
            value={formik.values?.tier_limit_per_user}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('tier_limit_per_user', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Tier Max Users"
            formControlProps={{
              id: 'tier_max_users',
              isInvalid: !!formik.errors?.tier_max_users,
            }}
            name="tier_max_users"
            error={formik.errors?.tier_max_users}
            value={formik.values?.tier_max_users}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('tier_max_users', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.tier_additional_features}
            label={'Tier Additional Features'}
            props={{
              name: 'tier_additional_features',
              placeholder: 'Tier Additional Features',
              value: formik.values?.tier_additional_features,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Tier Trial Period"
            formControlProps={{
              id: 'tier_trial_period',
              isInvalid: !!formik.errors?.tier_trial_period,
            }}
            name="tier_trial_period"
            error={formik.errors?.tier_trial_period}
            value={formik.values?.tier_trial_period}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('tier_trial_period', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="tier_activation_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Tier Activation Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.tier_activation_date ? new Date(formik.values?.tier_activation_date) : null}
              onChange={(value: Date) => formik.setFieldValue('tier_activation_date', value)}
            />
          </FormControl>
          <FormControl id="tier_deactivation_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Tier Deactivation Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.tier_deactivation_date ? new Date(formik.values?.tier_deactivation_date) : null}
              onChange={(value: Date) => formik.setFieldValue('tier_deactivation_date', value)}
            />
          </FormControl>

          <FormControl
            id="tier_customization_option"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_customization_option}
          >
            <FormLabel htmlFor="switch-tier_customization_option">Tier Customization Option</FormLabel>
            <Switch
              id="switch-tier_customization_option"
              name="tier_customization_option"
              onChange={formik.handleChange}
              value={formik.values?.tier_customization_option ? 1 : 0}
            />
            {formik.errors?.tier_customization_option && (
              <FormErrorMessage>{formik.errors?.tier_customization_option}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            id="tier_support_option"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_support_option}
          >
            <FormLabel htmlFor="switch-tier_support_option">Tier Support Option</FormLabel>
            <Switch
              id="switch-tier_support_option"
              name="tier_support_option"
              onChange={formik.handleChange}
              value={formik.values?.tier_support_option ? 1 : 0}
            />
            {formik.errors?.tier_support_option && (
              <FormErrorMessage>{formik.errors?.tier_support_option}</FormErrorMessage>
            )}
          </FormControl>

          <NumberInput
            label="Tier Referral Bonus"
            formControlProps={{
              id: 'tier_referral_bonus',
              isInvalid: !!formik.errors?.tier_referral_bonus,
            }}
            name="tier_referral_bonus"
            error={formik.errors?.tier_referral_bonus}
            value={formik.values?.tier_referral_bonus}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('tier_referral_bonus', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl
            id="tier_feedback_option"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.tier_feedback_option}
          >
            <FormLabel htmlFor="switch-tier_feedback_option">Tier Feedback Option</FormLabel>
            <Switch
              id="switch-tier_feedback_option"
              name="tier_feedback_option"
              onChange={formik.handleChange}
              value={formik.values?.tier_feedback_option ? 1 : 0}
            />
            {formik.errors?.tier_feedback_option && (
              <FormErrorMessage>{formik.errors?.tier_feedback_option}</FormErrorMessage>
            )}
          </FormControl>

          <NumberInput
            label="Tier Partner Discount"
            formControlProps={{
              id: 'tier_partner_discount',
              isInvalid: !!formik.errors?.tier_partner_discount,
            }}
            name="tier_partner_discount"
            error={formik.errors?.tier_partner_discount}
            value={formik.values?.tier_partner_discount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('tier_partner_discount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Tier Reward Points"
            formControlProps={{
              id: 'tier_reward_points',
              isInvalid: !!formik.errors?.tier_reward_points,
            }}
            name="tier_reward_points"
            error={formik.errors?.tier_reward_points}
            value={formik.values?.tier_reward_points}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('tier_reward_points', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
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
              onClick={() => router.push('/tiers')}
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
    entity: 'tier',
    operation: AccessOperationEnum.CREATE,
  }),
)(TierCreatePage);
