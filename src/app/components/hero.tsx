import Link from "next/link";

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
    <div className="px-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-3 lg:gap-4">
      {/* Imagen */}
      <div className="lg:col-span-1 lg:order-2 mt-4 lg:mt-0 flex justify-center">
        <img
          src={imgHero}
          alt="hero-cover"
          style={{
            width: width ? `${width}px` : "100%",
            height: height ? `${height}px` : "100%",
          }}
          className="object-cover object-center"
        />
      </div>
      
      {/* Contenido del texto */}
      <div className="lg:col-span-2 lg:order-1 flex flex-col gap-2 justify-center lg:items-start lg:text-left">
        <h1 className="lg:w-[480px] text-center lg:text-left">
          {title}
        </h1>
        <p className="mt-5 text-center lg:text-left lg:w-[351px]">{description}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:flex-row">
          <Link
            href={linkButton}
            className="font-var px-[10px] bg-primary h-[37px] flex items-center justify-center rounded-[4px] text-white hover:bg-primary-600"
            style={{
              fontSize: '20px',
              lineHeight: '22px',
              fontWeight: 664
            }}
          >
            {textButton}
          </Link>
          {textLearnMore && (
            <Link
              href="/"
              className="lg:mt-0 font-var text-black"
              style={{
                fontSize: '20px',
                lineHeight: '22px',
                fontWeight: 664,
              }}
            >
              {textLearnMore} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
