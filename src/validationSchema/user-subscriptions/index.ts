import * as yup from 'yup';

export const userSubscriptionValidationSchema = yup.object().shape({
  subscription_end_date: yup.date().nullable(),
  subscription_start_date: yup.date().nullable(),
  subscription_status: yup.boolean().nullable(),
  subscription_renewal_date: yup.date().nullable(),
  subscription_tier_id: yup.number().integer().nullable(),
  subscription_payment_status: yup.boolean().nullable(),
  user_subscription_type: yup.string().nullable(),
  user_subscription_end_reason: yup.string().nullable(),
  user_subscription_renewal_reminder: yup.boolean().nullable(),
  user_subscription_last_updated: yup.date().nullable(),
  user_subscription_activation_date: yup.date().nullable(),
  user_subscription_cancellation_date: yup.date().nullable(),
  user_subscription_pause_date: yup.date().nullable(),
  user_subscription_pause_reason: yup.string().nullable(),
  user_subscription_pause_duration: yup.number().integer().nullable(),
  user_subscription_pause_end_date: yup.date().nullable(),
  user_subscription_pause_count: yup.number().integer().nullable(),
  user_subscription_pause_extension: yup.number().integer().nullable(),
  user_subscription_feedback: yup.string().nullable(),
});
