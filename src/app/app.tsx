import { getWebsiteData } from "./_services/api";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";

interface Props {
  children: any;
}

async function App(props: Props) {
  const { children } = props;
  const layoutData = await getWebsiteData();
  const header = layoutData.layout.find((ly)=>ly.blockType === 'apolo-header')
  const logoUrlBase = header?.logoImage?.sizes.tablet.url;
  const widthLogo = header?.logoImage?.sizes.tablet.width || undefined;
  const heightLogo = header?.logoImage?.sizes.tablet.height || undefined;;
  const logoUrl = `https://admin.joinapolo.com${logoUrlBase}`;
  const title = header?.textCTA || 'Join Apolo';

  return (
    <>
      <AppHeader logoUrl={logoUrl} title={title} />
      {children}
      <AppFooter />
    </>
  );
}

export default App;
