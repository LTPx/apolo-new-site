import Link from "next/link";
import { BTN_CLASS } from "../constants";

interface ButtonsProps {
  link: string;
  title: string;
}

interface BannerProps {
  title: string;
  subtitle: string;
  buttons: ButtonsProps[];
}

export function Banner(props: BannerProps) {
  const { title, subtitle, buttons } = props;
  return (
    <div className="mx-auto px-6 lg:px-8 py-10 lg:py-12 lg:flex lg:items-center">
      <div className="mx-auto max-w-2xl text-center">
        <h2>{title}</h2>
        <p className="mt-4">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {buttons.map((btn, index) => (
            <Link
              href={btn.link}
              key={index}
              className={BTN_CLASS}
            >
              {btn.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
