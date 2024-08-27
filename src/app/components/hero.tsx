import Link from "next/link";
import { BTN_CLASS } from "../constants";

export interface HeroProps {
  title: string;
  description: string;
  imgHero: string;
  textButton: string;
  linkButton: string;
  textLearnMore?: string;
  width?: number;
  height?: number;
}

export function Hero(props: HeroProps) {
  const {
    title,
    description,
    imgHero,
    textButton,
    textLearnMore,
    width,
    height,
    linkButton,
  } = props;

  return (
    <div className="px-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
      <div className="flex flex-col gap-2 justify-center  lg:items-start lg:text-left pt-20 lg:pt-0 lg:col-span-1">
        <h1 className="lg:w-[470px] text-left">{title}</h1>
        <p className="mt-5 text-left lg:w-[351px]">
          {description}
        </p>
        <div className="mt-8 lg:mt-10 flex  gap-x-6 lg:flex-row">
          <Link
            href={linkButton}
            className={BTN_CLASS}
          >
            {textButton}
          </Link>
          {textLearnMore && (
            <Link
              href="/"
              className="lg:mt-0 font-var text-black"
              style={{
                fontSize: "20px",
                lineHeight: "22px",
                fontWeight: 664,
              }}
            >
              {textLearnMore} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
      <div className="lg:col-span-1 mt-4 lg:mt-0 flex justify-center items-center">
        <img
          src={imgHero}
          alt="hero-cover"
          style={{
            width: width ? `${width}px` : "75%",
            height: height ? `${height}px` : "75%",
          }}
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

export default Hero;
