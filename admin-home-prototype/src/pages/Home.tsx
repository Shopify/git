import {
  BlockStack,
  InlineStack,
  Text,
  Box,
  Button,
  Card,
  Grid,
  Badge,
  Icon
} from '@shopify/polaris';

export function Home() {
  return (
    <BlockStack gap="800">
      <Box paddingBlockStart="300" />
      <Text as="h1" variant="headingXl">
        Good morning, Jess
      </Text>

      {/* Search and quick intents */}
      <BlockStack gap="400">
        <Box
          padding="300"
          borderWidth="025"
          borderColor="border"
          borderRadius="200"
          background="bg-surface-secondary"
        >
          <InlineStack gap="300" blockAlign="center">
            <Icon type="sparkles" />
            <Text as="span" tone="subdued">
              Ask anything
            </Text>
          </InlineStack>
        </Box>

        <InlineStack gap="200" wrap>
          <Button size="slim" variant="secondary" icon="lightning">
            Fastest way to sales
          </Button>
          <Button size="slim" variant="secondary" icon="tag">
            Competitively price my product
          </Button>
          <Button size="slim" variant="secondary" icon="star">
            Most popular products report
          </Button>
        </InlineStack>
      </BlockStack>

      {/* Two primary cards */}
      <Grid columns={{xs: 1, md: 4, lg: 6}}>
        <Grid.Cell columnSpan={{xs: 1, md: 2, lg: 3}}>
          <Card roundedAbove="sm" padding="500">
            <BlockStack gap="400">
              <Box
                minHeight="140px"
                background="bg-surface-secondary"
                borderWidth="025"
                borderColor="border"
                borderRadius="200"
              />
              <BlockStack gap="100">
                <Text as="h2" variant="headingSm">
                  Add your first product
                </Text>
                <Text as="p" tone="subdued">
                  Start by adding a product and a few key details. Not ready? Start
                  with a sample product.
                </Text>
              </BlockStack>
              <InlineStack gap="200">
                <Button variant="primary">Add product</Button>
                <Button variant="secondary">Import</Button>
              </InlineStack>
            </BlockStack>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 1, md: 2, lg: 3}}>
          <Card roundedAbove="sm" padding="500">
            <BlockStack gap="400">
              <Box
                minHeight="140px"
                background="bg-surface-secondary"
                borderWidth="025"
                borderColor="border"
                borderRadius="200"
              />
              <BlockStack gap="100">
                <Text as="h2" variant="headingSm">
                  Create your store
                </Text>
                <Text as="p" tone="subdued">
                  Describe your business to generate custom themes or browse
                  pre‑designed themes.
                </Text>
              </BlockStack>
              <InlineStack gap="200" align="end">
                <Button variant="secondary">Generate</Button>
              </InlineStack>
            </BlockStack>
          </Card>
        </Grid.Cell>
      </Grid>

      {/* Next up checklist */}
      <BlockStack gap="400">
        <Text as="h3" variant="headingSm">
          Next up
        </Text>
        <BlockStack gap="200">
          <ChecklistRow
            icon="shop"
            label="Set up Shopify Payments"
            badge={<Badge>shop</Badge>}
          />
          <ChecklistRow
            icon="shipping"
            label="Review your shipping rates"
            badge={<Badge tone="success">Domestic</Badge>}
          />
          <ChecklistRow
            icon="domain"
            label="Customize your domain"
            badge={<Badge>asdf4n-mf.myshopify.com</Badge>}
          />
        </BlockStack>
      </BlockStack>
    </BlockStack>
  );
}

function ChecklistRow({
  icon,
  label,
  badge
}: {
  icon: string;
  label: string;
  badge: React.ReactNode;
}) {
  return (
    <Box
      padding="400"
      borderWidth="025"
      borderColor="border"
      borderRadius="200"
      background="bg-surface"
    >
      <InlineStack align="space-between" blockAlign="center" gap="400">
        <InlineStack gap="300" blockAlign="center">
          <Icon type={icon} />
          <Text as="p">{label}</Text>
        </InlineStack>
        {badge}
      </InlineStack>
    </Box>
  );
}


