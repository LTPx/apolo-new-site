interface FeatureStartupProps {
  title: string;
  description: string;
  imageSvg: string;
}

export function FeatureStartup(props: FeatureStartupProps) {
  const { title, description, imageSvg } = props;
  return (
    <div className="lg:p-6">
      <div className="flex gap-2 items-center">
        <img className="h-4 w-4" src={imageSvg}/>
        <h3>{title}</h3>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  );
}

export default FeatureStartup;
