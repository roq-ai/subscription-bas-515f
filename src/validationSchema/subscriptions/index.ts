import * as yup from 'yup';

export const subscriptionValidationSchema = yup.object().shape({
  expiry_date: yup.date().nullable(),
  subscription_type: yup.string().required(),
  subscription_duration: yup.number().integer().nullable(),
  subscription_cost: yup.number().required(),
  subscription_status: yup.boolean().nullable(),
  subscription_features: yup.string().nullable(),
});
