interface FeatureStartupProps {
  title: string;
  description: string;
  imageSvg: string;
}

export function FeatureStartup(props: FeatureStartupProps) {
  const { title, description, imageSvg } = props;
  return (
    <div className="relative pl-9 lg:p-6">
      <div className="flex gap-0 lg:gap-2 items-center">
        <img
          className="h-5 w-5 lg:h-4 lg:w-4 absolute left-1 top-1 lg:static"
          src={imageSvg}
        />{" "}
        <h3>{title}</h3>
      </div>
      <p className="mt-1 lg:mt-4">{description}</p>
    </div>
  );
}

export default FeatureStartup;
