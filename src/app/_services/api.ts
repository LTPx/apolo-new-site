import { ApoloLayout } from "../_interfaces/layout";

export async function getWebsiteData(locale: 'en' | 'fr'): Promise<ApoloLayout> {
    const url = `${process.env.APOLO_API_URL}/api/websites/662a93053afb198b0683ca2f?locale=${locale}`;
    console.log('url: ', url)
    const response = await fetch(url, {
      next: {
        revalidate: 0,
      },
    });
    const dataJson = await response.json();
    if (!response.ok) throw new Error(dataJson.message);
    return dataJson;
  }
