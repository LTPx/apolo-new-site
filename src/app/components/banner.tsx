import Link from "next/link";

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
    <div className="mx-auto px-6 lg:px-8 py-20 lg:py-32 lg:flex lg:items-center">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-5xl">{title}</h2>
        <p className="mt-4 sm:text-xl/relaxed">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {buttons.map((btn, index) => (
            <Link
              href={btn.link}
              key={index}
              className="rounded-lg bg-primary px-4 py-3 text font-bold text-white shadow hover:bg-primary-600 focus:outline-none focus:ring active:bg-primary-400 sm:w-auto"
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
