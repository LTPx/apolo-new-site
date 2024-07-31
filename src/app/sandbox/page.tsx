import { getBackendData } from "../_services/api";

export default async function SandBox() {
  const data = await getBackendData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>{data?.name}</h2>
      <p>{data.description}</p>
    </main>
  );
}
