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

import { messageValidationSchema } from 'validationSchema/messages';
import { MessageInterface } from 'interfaces/message';

function MessageCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: MessageInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.message.create({ data: values as RoqTypes.message });
      resetForm();
      router.push('/messages');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MessageInterface>({
    initialValues: {
      message_status: '',
      message_priority: 0,
      message_content: '',
      message_type: '',
      message_sender: '',
      message_recipient: '',
      message_read_status: false,
      message_delivery_time: new Date(new Date().toDateString()),
      message_attachment: '',
      message_reply_status: false,
      message_category: '',
      message_sent_time: new Date(new Date().toDateString()),
      message_response_time: new Date(new Date().toDateString()),
      message_feedback: '',
    },
    validationSchema: messageValidationSchema,
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
              label: 'Messages',
              link: '/messages',
            },
            {
              label: 'Create Message',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Message
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.message_status}
            label={'Message Status'}
            props={{
              name: 'message_status',
              placeholder: 'Message Status',
              value: formik.values?.message_status,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Message Priority"
            formControlProps={{
              id: 'message_priority',
              isInvalid: !!formik.errors?.message_priority,
            }}
            name="message_priority"
            error={formik.errors?.message_priority}
            value={formik.values?.message_priority}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('message_priority', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.message_content}
            label={'Message Content'}
            props={{
              name: 'message_content',
              placeholder: 'Message Content',
              value: formik.values?.message_content,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.message_type}
            label={'Message Type'}
            props={{
              name: 'message_type',
              placeholder: 'Message Type',
              value: formik.values?.message_type,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.message_sender}
            label={'Message Sender'}
            props={{
              name: 'message_sender',
              placeholder: 'Message Sender',
              value: formik.values?.message_sender,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.message_recipient}
            label={'Message Recipient'}
            props={{
              name: 'message_recipient',
              placeholder: 'Message Recipient',
              value: formik.values?.message_recipient,
              onChange: formik.handleChange,
            }}
          />

          <FormControl
            id="message_read_status"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.message_read_status}
          >
            <FormLabel htmlFor="switch-message_read_status">Message Read Status</FormLabel>
            <Switch
              id="switch-message_read_status"
              name="message_read_status"
              onChange={formik.handleChange}
              value={formik.values?.message_read_status ? 1 : 0}
            />
            {formik.errors?.message_read_status && (
              <FormErrorMessage>{formik.errors?.message_read_status}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="message_delivery_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Message Delivery Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.message_delivery_time ? new Date(formik.values?.message_delivery_time) : null}
              onChange={(value: Date) => formik.setFieldValue('message_delivery_time', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.message_attachment}
            label={'Message Attachment'}
            props={{
              name: 'message_attachment',
              placeholder: 'Message Attachment',
              value: formik.values?.message_attachment,
              onChange: formik.handleChange,
            }}
          />

          <FormControl
            id="message_reply_status"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.message_reply_status}
          >
            <FormLabel htmlFor="switch-message_reply_status">Message Reply Status</FormLabel>
            <Switch
              id="switch-message_reply_status"
              name="message_reply_status"
              onChange={formik.handleChange}
              value={formik.values?.message_reply_status ? 1 : 0}
            />
            {formik.errors?.message_reply_status && (
              <FormErrorMessage>{formik.errors?.message_reply_status}</FormErrorMessage>
            )}
          </FormControl>

          <TextInput
            error={formik.errors.message_category}
            label={'Message Category'}
            props={{
              name: 'message_category',
              placeholder: 'Message Category',
              value: formik.values?.message_category,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="message_sent_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Message Sent Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.message_sent_time ? new Date(formik.values?.message_sent_time) : null}
              onChange={(value: Date) => formik.setFieldValue('message_sent_time', value)}
            />
          </FormControl>
          <FormControl id="message_response_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Message Response Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.message_response_time ? new Date(formik.values?.message_response_time) : null}
              onChange={(value: Date) => formik.setFieldValue('message_response_time', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.message_feedback}
            label={'Message Feedback'}
            props={{
              name: 'message_feedback',
              placeholder: 'Message Feedback',
              value: formik.values?.message_feedback,
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
              onClick={() => router.push('/messages')}
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
    entity: 'message',
    operation: AccessOperationEnum.CREATE,
  }),
)(MessageCreatePage);
