interface MenberTeamProps {
  img: string;
  alt: string;
  name: string;
  profession: string;
}

export function MemberTeam(props: MenberTeamProps) {
  const { img, name, profession, alt } = props;
  return (
    <div className="group block">
      <img
        src={img}
        alt={alt}
        className="aspect-square w-full rounded-lg object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="mt-3">
        <h3>
          {name}
        </h3>
        <p className="mt-1">{profession}</p>
      </div>
    </div>
  );
}

export default MemberTeam;
