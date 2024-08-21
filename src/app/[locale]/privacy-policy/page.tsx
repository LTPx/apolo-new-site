import { Suspense } from "react";
import { getWebsiteData } from "@/app/_services/api";
import PrivacyPolicyPage from "./privacy-policy-page";

async function PrivacyPolicy(nextParams: {
  params: { locale: "en" | "fr" };
}) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWebsiteData(locale);
  const { pages } = data;
  const page = pages.find((page) => page.pageName === "Privacy");
  return (
    <Suspense fallback="Loading...">
      {page ? (
        <PrivacyPolicyPage page={page} />
      ) : (
        <p>Please try to reload page</p>
      )}
    </Suspense>
  );
}

export default PrivacyPolicy;
