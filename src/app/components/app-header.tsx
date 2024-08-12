import Header from "./header";

async function AppHeader() {
  return (
    <Header
      logo={
        "https://joinapolo.com/app/themes/child/assets/images/logo-apolo.svg"
      }
      titleBtn={"Join Apolo"}
    />
  );
}

export default AppHeader;
