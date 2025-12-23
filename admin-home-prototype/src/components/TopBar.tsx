import {InlineStack, Button, Box, Text} from '@shopify/polaris';

export function AdminTopBar({onToggleNav}: {onToggleNav?: () => void}) {
  return (
    <Box
      background="bg-surface"
      paddingInline={{xs: '400', md: '600'}}
      paddingBlock="300"
      borderBlockEndWidth="025"
      borderColor="border"
      id="AppFrameTopBar"
    >
      <InlineStack align="space-between" blockAlign="center">
        <InlineStack gap="300" blockAlign="center">
          <Button
            icon="menu"
            variant="tertiary"
            accessibilityLabel="Toggle navigation"
            onClick={onToggleNav}
          />
          <Text as="span" variant="headingSm">
            Shopify Admin
          </Text>
        </InlineStack>
        <InlineStack gap="200">
          <Button variant="tertiary" icon="bell" accessibilityLabel="Notifications" />
          <Button variant="tertiary" icon="settings" accessibilityLabel="Settings" />
          <Button variant="tertiary" icon="person" accessibilityLabel="Account" />
        </InlineStack>
      </InlineStack>
    </Box>
  );
}


