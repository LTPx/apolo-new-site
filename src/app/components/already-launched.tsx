interface AlreadyLaunchedProps {
  launched: string[];
  title: string;
}

export function AlreadyLaunched(props: AlreadyLaunchedProps) {
  const { launched, title } = props;
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <div className="mx-auto mt-14 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {launched.map((item, index) => (
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              key={index}
              src={item}
              alt={`Logo ${index + 1}`}
              width="158"
              height="48"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlreadyLaunched;
