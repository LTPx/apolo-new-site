import { getWebsiteData } from "../_services/api";

export default async function SandBox() {
  const data = await getWebsiteData();
  const logoUrl = data.layout[0].logoImage.url;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>{data?.WebsiteName}</h2>
      <img src={`${process.env.APOLO_API_URL}${logoUrl}`} alt="img" />
    </main>
  );
}
