import {Navigation} from '@shopify/polaris';

export function AdminNavigation({
  onNavigate,
  location
}: {
  onNavigate?: () => void;
  location: string;
}) {
  return (
    <Navigation location={location} onDismiss={onNavigate}>
      <Navigation.Section
        items={[
          {label: 'Home', icon: 'home', selected: true},
          {label: 'Orders', icon: 'order'},
          {label: 'Products', icon: 'product'},
          {label: 'Customers', icon: 'person'},
          {label: 'Marketing', icon: 'target'},
          {label: 'Discounts', icon: 'discounts'},
          {label: 'Content', icon: 'content'},
          {label: 'Markets', icon: 'globe'},
          {label: 'Finance', icon: 'bank'},
          {label: 'Analytics', icon: 'analytics'}
        ]}
      />
      <Navigation.Section
        title="Channels"
        items={[{label: 'Online Store', icon: 'store-online'}]}
        separator
      />
      <Navigation.Section title="Apps" items={[{label: 'Email', icon: 'email'}]} />
    </Navigation>
  );
}


