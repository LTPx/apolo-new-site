import { Suspense } from "react";
import { getWebsiteData } from "../_services/api";
import TermsAndConditionsPage from "./terms-and-conditions-page";

export default async function TermsAndConditions() {
  const data = await getWebsiteData();
  const { pages } = data;
  // console.log('page 1: ', pages[0])
  const page = pages.find((page) => page.pageName === "Terms and conditions");
  console.log('page: ', page)
  return (
    <Suspense fallback="Loading...">
      {page ? (
        <TermsAndConditionsPage page={page} />
      ) : (
        <p>Please try to reload page</p>
      )}
    </Suspense>
  );
}
