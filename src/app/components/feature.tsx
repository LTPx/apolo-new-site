interface FeatureProps {
  title: string;
  description: string;
  svg: string;
}

export function Feature(props: FeatureProps) {
  const { title, description, svg } = props;
  return (
    <div className="relative pl-9">
      <dt className="font-bold text-gray-900 text-xl flex items-center">
      <img className="absolute left-1 top-1 h-5 w-5 text-indigo-600" src={svg} alt="image-svg" />
        {title}
      </dt>
      <dd className="block mt-1 text-gray-700 font-sans"> {description}</dd>
    </div>
  );
}

export default Feature;
