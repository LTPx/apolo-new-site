import Link from "next/link";

interface FooterProps {
  address: string;
  logoFooter: string;
}

export function Footer(props: FooterProps) {
  const { address, logoFooter } = props;
  return (
    <footer className="bg-black">
      <div className="mx-auto container px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 pb-16">
          <div>
            <div className="flex justify-start text-teal-600">
              <img src={logoFooter} alt="logo-footer" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-left">
              <p className="text-lg font-medium text-white">ADDRESS</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="text-white-light">{address}</li>
              </ul>
            </div>
            <div className="text-left">
              <p className="text-lg font-medium text-white">CONTACT</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="mailto:hello@joinapolo.com"
                  >
                    <span className="flex-1 text-white transition hover:text-primary">
                      hello(at)joinapolo.com
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="tel:+41215521000"
                    target="_blank"
                  >
                    <span className="flex-1 text-white transition hover:text-primary">
                      +41 21 552 10 00
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="text-white-light block sm:inline">
                All rights reserved.
              </span>
              <Link
                className="inline-block text-white underline transition hover:text-primary"
                href="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
              <span>&middot;</span>
              <Link
                className="inline-block text-white underline transition hover:text-primary"
                href="/"
              >
                Privacy Policy
              </Link>
            </p>
            <p className="mt-4 text-sm text-white-light sm:order-first sm:mt-0">
              &copy; 2022 Company Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
