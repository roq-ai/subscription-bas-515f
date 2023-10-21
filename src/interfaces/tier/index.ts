import { GetQueryInterface } from 'interfaces';

export interface TierInterface {
  id?: string;
  price: number;
  tier_level: number;
  description?: string;
  max_messages?: number;
  tier_name: string;
  tier_duration?: number;
  tier_status?: boolean;
  tier_expiration_notification?: boolean;
  tier_discount?: number;
  tier_upgrade_option?: boolean;
  tier_renewal_option?: boolean;
  tier_auto_upgrade?: boolean;
  tier_downgrade_option?: boolean;
  tier_cancellation_option?: boolean;
  tier_limit_per_user?: number;
  tier_max_users?: number;
  tier_additional_features?: string;
  tier_trial_period?: number;
  tier_activation_date?: any;
  tier_deactivation_date?: any;
  tier_customization_option?: boolean;
  tier_support_option?: boolean;
  tier_referral_bonus?: number;
  tier_feedback_option?: boolean;
  tier_partner_discount?: number;
  tier_reward_points?: number;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TierGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  tier_name?: string;
  tier_additional_features?: string;
}
