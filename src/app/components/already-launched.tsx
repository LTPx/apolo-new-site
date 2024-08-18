import Link from "next/link";

interface AlreadyLaunchedProps {
  launched: string[];
  title: string;
  urlLink: string;
}

export function AlreadyLaunched(props: AlreadyLaunchedProps) {
  const { launched, title, urlLink } = props;
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 items-center gap-x-8 gap-y-10 sm:grid-cols-5 sm:max-w-2xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {launched.map((item, index) => (
            <Link href={urlLink} key={index} target="_blank">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={item}
                alt={`Logo ${index + 1}`}
                width="158"
                height="48"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlreadyLaunched;
