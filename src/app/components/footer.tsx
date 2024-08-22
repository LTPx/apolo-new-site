import Link from "next/link";

interface FooterProps {
  address: string;
  logoFooter: string;
}

export function Footer(props: FooterProps) {
  const { address, logoFooter } = props;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-footer">
      <div className="mx-auto container px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 pb-16">
          <div>
            <div className="flex justify-start text-teal-600">
              <img
                src={"/images/apolo_logo NegativePNG_RVB.png"}
                alt="logo-footer"
                className={"h-[80px] w-[-60] lg:h-full lg:w-full"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-left">
              <h3 className="text-white">ADDRESS</h3>
              <div className="mt-5 space-y-4 text-sm">
                <p className="text-[#898989]">{address}</p>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-white">CONTACT</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="mailto:hello@joinapolo.com"
                  >
                    <p className="flex-1 text-white transition hover:text-primary">
                      hello(at)joinapolo.com
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="tel:+41215521000"
                    target="_blank"
                  >
                    <p className="flex-1 text-white transition hover:text-primary">
                      +41 21 552 10 00
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="flex flex-col-reverse gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex gap-4 items-center justify-center">
              <p className="text-white sm:mt-0">
                &copy; Apolo SA {currentYear}
              </p>
              <p className="text-white block sm:inline">All rights reserved.</p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Link
                className="inline-block text-white underline transition hover:text-primary"
                href="/en/terms-and-conditions"
              >
                <p>Terms & Conditions</p>
              </Link>
              <Link
                className="inline-block text-white underline transition hover:text-primary"
                href="/en/privacy-policy"
              >
                <p>Privacy Policy</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
