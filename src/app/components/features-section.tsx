import Feature from "./feature";

interface Advantages {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionsProps {
  advantages: Advantages[];
  title: string;
  mainImage: string;
}

export function FeaturesSections(props: FeaturesSectionsProps) {
  const { advantages, title, mainImage } = props;
  return (
    <div className="mx-auto px-6 lg:px-8">
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="mt-2">
              {title}
            </h2>
            <dl className="mt-10 max-w-xl space-y-8 leading-7 lg:max-w-none">
              {advantages.map((item, index) => (
                <Feature
                  key={index}
                  title={item.title}
                  description={item.description}
                  svg={item.icon}
                />
              ))}
            </dl>
          </div>
        </div>
        <img
          src={mainImage}
          alt={"features-img"}
          className="object-cover object-center h-full w-full lg:flex"
        />
      </div>
    </div>
  );
}

export default FeaturesSections;
