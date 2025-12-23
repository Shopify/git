import {useCallback, useState, useRef} from 'react';
import {Frame, Page, Box} from '@shopify/polaris';
import {AdminNavigation} from './components/Navigation';
import {AdminTopBar} from './components/TopBar';
import {Home} from './pages/Home';

export default function App() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const toggleMobileNav = useCallback(
    () => setMobileNavActive((prev) => !prev),
    [],
  );
  const skipToContentRef = useRef<HTMLAnchorElement>(null);

  return (
    <Frame
      skipToContentTarget={skipToContentRef}
      topBar={<AdminTopBar onToggleNav={toggleMobileNav} />}
      navigation={
        <AdminNavigation
          onNavigate={() => setMobileNavActive(false)}
          location="/"
        />
      }
      showMobileNavigation={mobileNavActive}
      onNavigationDismiss={toggleMobileNav}
    >
      <a ref={skipToContentRef} id="SkipToContent" tabIndex={-1} />
      <Page fullWidth>
        <Box paddingInline={{xs: '400', md: '800'}} paddingBlockEnd="800">
          <Home />
        </Box>
      </Page>
    </Frame>
  );
}


