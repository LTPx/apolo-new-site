interface FeatureProps {
  title: string;
  description: string;
}

export function Feature(props: FeatureProps) {
  const { title, description } = props;
  return (
    <div className="relative pl-9">
      <dt className="inline font-semibold text-gray-900">
        <svg
          className="absolute left-1 top-1 h-5 w-5 text-primary-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
            clip-rule="evenodd"
          />
        </svg>
        {title}
      </dt>
      <dd className="inline"> {description}</dd>
    </div>
  );
}

export default Feature;
