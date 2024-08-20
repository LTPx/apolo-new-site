import { Suspense } from "react";
import Home from "./home";
import { getWebsiteData } from "../_services/api";

export default async function Page(nextParams: {
  params: { locale: "en" | "fr" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWebsiteData(locale);

  return (
    <Suspense fallback="Loading...">
      {data ? <Home data={data} /> : <span>Please reload page</span>}
    </Suspense>
  );
}
