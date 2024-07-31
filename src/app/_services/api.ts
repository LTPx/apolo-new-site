export async function getBackendData(): Promise<any> {
    const url = `${process.env.APOLO_API_URL}/characters/1`;
    const response = await fetch(url);
    const dataJson = await response.json();
    if (!response.ok) throw new Error(dataJson.message);
    return dataJson;
  }