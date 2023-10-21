import { GetQueryInterface } from 'interfaces';

export interface UserSubscriptionInterface {
  id?: string;
  subscription_end_date?: any;
  subscription_start_date?: any;
  subscription_status?: boolean;
  subscription_renewal_date?: any;
  subscription_tier_id?: number;
  subscription_payment_status?: boolean;
  user_subscription_type?: string;
  user_subscription_end_reason?: string;
  user_subscription_renewal_reminder?: boolean;
  user_subscription_last_updated?: any;
  user_subscription_activation_date?: any;
  user_subscription_cancellation_date?: any;
  user_subscription_pause_date?: any;
  user_subscription_pause_reason?: string;
  user_subscription_pause_duration?: number;
  user_subscription_pause_end_date?: any;
  user_subscription_pause_count?: number;
  user_subscription_pause_extension?: number;
  user_subscription_feedback?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserSubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_subscription_type?: string;
  user_subscription_end_reason?: string;
  user_subscription_pause_reason?: string;
  user_subscription_feedback?: string;
}
