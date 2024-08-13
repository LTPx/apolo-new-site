import { ApoloLayout } from "../_interfaces/layout";

export async function getWebsiteData(): Promise<ApoloLayout> {
    const url = `${process.env.APOLO_API_URL}/api/websites/662a93053afb198b0683ca2f?locale=fr`;
    const response = await fetch(url);
    const dataJson = await response.json();
    if (!response.ok) throw new Error(dataJson.message);
    return dataJson;
  }
