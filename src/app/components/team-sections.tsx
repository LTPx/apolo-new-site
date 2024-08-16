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
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      <div className="mt-10 overflow-hidden">
        <div className="flex flex-nowrap gap-4 lg:grid lg:grid-cols-3 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar">
          {members.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 lg:flex-shrink lg:w-auto snap-start pb-4"
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
