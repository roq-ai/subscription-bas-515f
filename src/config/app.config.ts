interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Subscriber'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Subscription Based Tiered Messaging Service',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read messages', 'Update subscription status', 'View tier details', 'Read user info'],
  ownerAbilities: [
    'Manage messages',
    'Manage user subscriptions',
    'Manage tiers',
    'Manage subscriptions',
    'Manage users',
    'Manage companies',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/4ceae436-35e6-40f9-873f-66bf070eb7e2',
};
