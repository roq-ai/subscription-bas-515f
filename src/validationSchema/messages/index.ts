import * as yup from 'yup';

export const messageValidationSchema = yup.object().shape({
  message_status: yup.string().nullable(),
  message_priority: yup.number().integer().nullable(),
  message_content: yup.string().required(),
  message_type: yup.string().nullable(),
  message_sender: yup.string().nullable(),
  message_recipient: yup.string().nullable(),
  message_read_status: yup.boolean().nullable(),
  message_delivery_time: yup.date().nullable(),
  message_attachment: yup.string().nullable(),
  message_reply_status: yup.boolean().nullable(),
  message_category: yup.string().nullable(),
  message_sent_time: yup.date().nullable(),
  message_response_time: yup.date().nullable(),
  message_feedback: yup.string().nullable(),
});
