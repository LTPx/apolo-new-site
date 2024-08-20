import { getWebsiteData } from "./_services/api";
import Footer from "./components/footer";
import Header from "./components/header";

interface Props {
  children: any;
}

async function App(props: Props) {
  const { children } = props;
  const layoutData = await getWebsiteData();
  const header = layoutData.layout.find(
    (ly) => ly.blockType === "apolo-header"
  );
  const logoUrlBase = header?.logoImage?.sizes.tablet.url;
  const widthLogo = header?.logoImage?.sizes.tablet.width || undefined;
  const heightLogo = header?.logoImage?.sizes.tablet.height || undefined;
  const logoUrl = `https://admin.joinapolo.com${logoUrlBase}`;
  const title = header?.navigationCTA?.CTA || "Join Apolo";
  const link = header?.navigationCTA?.CTALink || "";

  return (
    <>
      <Header logo={logoUrl} titleBtn={title} linkBtn={link} />
      {children}
      <Footer
        address={"Apolo SA Passage St-François 9 CH-1003 Lausanne"}
        logoFooter={
          "https://joinapolo.com/app/themes/child/assets/images/logo-apolo-footer.svg"
        }
      />
    </>
  );
}

export default App;
