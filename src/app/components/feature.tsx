interface FeatureProps {
  title: string;
  description: string;
  svg: string;
}

export function Feature(props: FeatureProps) {
  const { title, description, svg } = props;
  return (
    <div className="relative pl-9">
      <dt className="inline font-semibold text-gray-900">
        <img className="h-4 w-4" src={svg} alt="image-svg" />
        {title}
      </dt>
      <dd className="inline"> {description}</dd>
    </div>
  );
}

export default Feature;
