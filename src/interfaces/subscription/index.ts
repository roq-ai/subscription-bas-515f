import { GetQueryInterface } from 'interfaces';

export interface SubscriptionInterface {
  id?: string;
  expiry_date?: any;
  subscription_type: string;
  subscription_duration?: number;
  subscription_cost: number;
  subscription_status?: boolean;
  subscription_features?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  subscription_type?: string;
  subscription_features?: string;
}
