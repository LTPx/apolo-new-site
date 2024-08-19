import Header from "./header";

async function AppHeader({ logoUrl, title, width, height }: { logoUrl: string, title: string, width?: number, height?: number }) {
  return (
    <Header
      logo={logoUrl}
      titleBtn={title}
      width={width}
      height={height}
    />
  );
}

export default AppHeader;
