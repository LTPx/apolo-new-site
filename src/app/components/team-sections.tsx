import MemberTeam from "./member-team";

interface MemberProps {
  img: string;
  alt: string;
  name: string;
  profession: string;
}

interface TeamSectionProps {
  members: MemberProps[];
  title: string;
  description: string;
  social?: string;
}

export function TeamSection(props: TeamSectionProps) {
  const { members, title, description, social } = props;

  return (
    <div className="mx-auto px-6 lg:px-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-6 text-lg">{description}</p>
      <div className="mt-10 overflow-hidden">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {members.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start pb-4"
            >
              <MemberTeam
                img={item.img}
                alt={item.alt}
                name={item.name}
                profession={item.profession}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
