import Link from "next/link";

interface SponsorsProps {
  title: string;
  subtitle: string;
  sponsorsImageUrl: {
    imageUrl: string;
    linkUrl: string;
  }[];
}

export function Sponsors(props: SponsorsProps) {
  const { title, subtitle, sponsorsImageUrl } = props;
  return (
    <div className="mx-auto px-6 py-8 sm:py-12 lg:px-8">
      <div>
        <h2>{title}</h2>
        <p className="mt-4">{subtitle}</p>
      </div>
      <div className="mx-auto mt-14 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {sponsorsImageUrl.map((item, index) => (
          <Link href={item.linkUrl} target="_blank" key={index}>
            <img
              src={item.imageUrl}
              alt={`sponsor ${index + 1}`}
              className="col-span-2 lg:col-span-1 lg:h-[80px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[70px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
