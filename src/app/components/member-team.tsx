interface MenberTeamProps {
  img: string;
  alt: string;
  name: string;
  profession: string;
}

export function MemberTeam(props: MenberTeamProps) {
  const { img, name, profession, alt } = props;
  return (
    <div className="block">
      <img
        src={img}
        alt={alt}
        className="w-full rounded-lg object-cover"
      />
      <div className="mt-3">
        <h2>
          {name}
        </h2>
        <p className="mt-1">{profession}</p>
      </div>
    </div>
  );
}

export default MemberTeam;
