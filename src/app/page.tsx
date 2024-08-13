import { getWebsiteData } from "./_services/api";
import { Suspense } from "react";
import Home from "./home";

export default async function Page() {
  const data = await getWebsiteData();

  return (
    <Suspense fallback="Loading...">
      {data ? <Home data={data} /> : <span>Please reload page</span>}
    </Suspense>
  );
}
