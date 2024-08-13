import Header from "./header";

async function AppHeader({ logoUrl, title }: { logoUrl: string, title: string }) {
  return (
    <Header
      logo={logoUrl}
      titleBtn={title}
    />
  );
}

export default AppHeader;
