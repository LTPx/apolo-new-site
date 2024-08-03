import Link from "next/link";
import Header from "./header";

async function AppHeader() {
  return (
    <Header>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
          href="/"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Join Apolo
        </Link>
      </div>
    </Header>
  );
}

export default AppHeader;
