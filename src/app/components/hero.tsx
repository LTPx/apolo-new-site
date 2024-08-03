import Link from "next/link";

export interface HeroProps {
  title: string;
  description: string;
  imgHero: string;
}

export function Hero(props: HeroProps) {
  const { title, description, imgHero } = props;
  return (
    <div className="p-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-3 lg:gap-4">
      <div className="lg:col-span-2 flex flex-col gap-2 justify-center items-center lg:items-start text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600">{description}</p>
        <div className="mt-10 flex items-center gap-x-6 lg:flex-row">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Become a founder
          </Link>
          <Link
            href="/"
            className="lg:mt-0 text-sm font-semibold leading-6 text-gray-900"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="lg:col-span-1 mt-4 lg:mt-0">
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
