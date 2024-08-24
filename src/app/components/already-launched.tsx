import Link from "next/link";

interface AlreadyLaunchedProps {
  launched: {
    img: string;
    name: string;
    url?: string;
  }[];
  title: string;
}

export function AlreadyLaunched(props: AlreadyLaunchedProps) {
  const { launched, title } = props;
  return (
    <div className="bg-body py-10 lg:py-18">
      <div className="mx-auto px-6 lg:px-8">
        <h2>
          {title}
        </h2>
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 items-center gap-x-8 gap-y-10 sm:grid-cols-5 sm:max-w-2xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {launched.map((item, index) => (
            <>
              {item.url ? (
                <Link target='_blank' href={item.url || "#"} key={index}>
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={item.img}
                    alt={item.name}
                    width="158"
                    height="48"
                  />
                </Link>
              ) : (
                <img
                  key={index}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={item.img}
                  alt={item.name}
                  width="158"
                  height="48"
                />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlreadyLaunched;
