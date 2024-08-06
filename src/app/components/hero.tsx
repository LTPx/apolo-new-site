import Link from "next/link";

export interface HeroProps {
  title: string;
  description: string;
  imgHero: string;
  textButton: string;
  textLearnMore: string;
}

export function Hero(props: HeroProps) {
  const { title, description, imgHero, textButton, textLearnMore } = props;
  return (
    <div className="p-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-3 lg:gap-4">
      <div className="lg:col-span-2 flex flex-col gap-2 justify-center lg:items-start lg:text-left">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          {title}
        </h1>
        <p className="mt-5 text-xl leading-8 text-gray-600">{description}</p>
        <div className="mt-10 flex items-center gap-x-6 lg:flex-row">
          <Link
            href="/"
            className="rounded-3xl bg-primary px-6 py-4 text-md font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {textButton}
          </Link>
          <Link
            href="/"
            className="lg:mt-0 text-md font-semibold leading-6 text-gray-900"
          >
            {textLearnMore} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:col-span-1 mt-4 lg:mt-0">
        <img
          src={imgHero}
          alt={"hero-cover"}
          className="object-cover object-center h-full w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
