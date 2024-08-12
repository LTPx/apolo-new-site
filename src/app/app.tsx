import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";

interface Props {
  children: any;
}

function App(props: Props) {
  const { children } = props;

  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}

export default App;
