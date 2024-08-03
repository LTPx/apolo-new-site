import MemberTeam from "./member-team";

interface MemberProps {
  img: string;
  name: string;
  profession: string;
}

interface TeamSectionProps {
  members: MemberProps[];
  title: string;
  description: string;
}

export function TeamSection(props: TeamSectionProps) {
  const { members, title, description } = props;
  return (
    <div className="mx-auto px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-10">
        {members.map((item, index) => (
          <MemberTeam
            key={index}
            img={item.img}
            name={item.name}
            profession={item.profession}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
