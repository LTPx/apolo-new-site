import FeatureStartup from "./feature-startup";

interface Features {
  title: string;
  description: string;
}

interface StartupStudioProps {
  studioFeatures: Features[];
  title: string;
}

export function StartupStudio(props: StartupStudioProps) {
  const { studioFeatures, title } = props;
  return (
    <div className="lg:grid lg:grid-cols-4 gap-4 mx-auto px-6 lg:px-8 flex flex-col">
      <div className="col-span-1">
        <h2 className="text-3xl pt-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="col-span-3 lg:grid lg:grid-cols-2 mt-10 lg:mt-0 flex flex-col gap-10">
        {studioFeatures.map((studio, index) => (
          <FeatureStartup
            key={index}
            title={studio.title}
            description={studio.description}
          />
        ))}
      </div>
    </div>
  );
}

export default StartupStudio;
