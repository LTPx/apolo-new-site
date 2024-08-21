interface FeatureProps {
  title: string;
  description: string;
  svg: string;
}

export function Feature(props: FeatureProps) {
  const { title, description, svg } = props;
  return (
    <div className="relative pl-9">
      <h3 className="flex items-center">
        <img
          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
          src={svg}
          alt="image-svg"
        />
        {title}
      </h3>
      <p className="block mt-1"> {description}</p>
    </div>
  );
}

export default Feature;
