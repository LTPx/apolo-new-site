interface MenberTeamProps {
  img: string;
  name: string;
  profession: string;
}

export function MemberTeam(props: MenberTeamProps) {
  const { img, name, profession } = props;
  return (
    <div className="group block">
      <img
        src={img}
        alt="img-alt"
        className="aspect-square w-full rounded-lg object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="mt-3">
        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gray-700">{profession}</p>
      </div>
    </div>
  );
}

export default MemberTeam;
