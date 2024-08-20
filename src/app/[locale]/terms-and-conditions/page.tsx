import { Suspense } from "react";
import { getWebsiteData } from "@/app/_services/api";
import TermsAndConditionsPage from "./terms-and-conditions-page";

async function TermsAndConditions(nextParams: {
  params: { locale: "en" | "fr" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWebsiteData(locale);
  const { pages } = data;
  const page = pages.find((page) => page.pageName === "Terms and conditions");
  console.log("page: ", page);
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

export default TermsAndConditions;
