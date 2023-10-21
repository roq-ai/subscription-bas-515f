import { GetQueryInterface } from 'interfaces';

export interface MessageInterface {
  id?: string;
  message_status?: string;
  message_priority?: number;
  message_content: string;
  message_type?: string;
  message_sender?: string;
  message_recipient?: string;
  message_read_status?: boolean;
  message_delivery_time?: any;
  message_attachment?: string;
  message_reply_status?: boolean;
  message_category?: string;
  message_sent_time?: any;
  message_response_time?: any;
  message_feedback?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MessageGetQueryInterface extends GetQueryInterface {
  id?: string;
  message_status?: string;
  message_content?: string;
  message_type?: string;
  message_sender?: string;
  message_recipient?: string;
  message_attachment?: string;
  message_category?: string;
  message_feedback?: string;
}
