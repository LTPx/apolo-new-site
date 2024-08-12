import Hero from "./components/hero";
import StartupStudio from "./components/startup-studio";
import FeaturesSections from "./components/features-section";
import AlreadyLaunched from "./components/already-launched";
import TeamSection from "./components/team-sections";
import Banner from "./components/banner";
import Sponsors from "./components/sponsors";

export default function Home() {
  const exampleFeatures = [
    {
      title: "Innovative Solutions",
      description: "Creating cutting-edge solutions for modern problems.",
    },
    {
      title: "Expert Team",
      description: "A diverse team of experts ready to tackle any challenge.",
    },
    {
      title: "Global Reach",
      description: "Expanding our impact to markets around the world.",
    },
    {
      title: "Sustainable Growth",
      description: "Focusing on sustainable and scalable business models.",
    },
  ];

  const featuresStartup = [
    {
      title: "Innovative Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
    {
      title: "Expert Team",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
    {
      title: "Global Reach",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
    {
      title: "Sustainable Growth",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
    },
  ];

  const launchedImages = [
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
    "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
  ];

  const sponsors = [
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
  ];

  const teamMembers = [
    {
      img: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      name: "John Doe",
      profession: "Software Engineer",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Jane Smith",
      profession: "Product Manager",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Michael Johnson",
      profession: "UI/UX Designer",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Emily Davis",
      profession: "Marketing Specialist",
    },
    {
      img: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Chris Brown",
      profession: "Data Analyst",
    },
  ];

  const btnBanner = [
    {
      link: "/",
      title: "Become a founder",
    },
    {
      link: "/",
      title: "I'm a startup",
    },
    {
      link: "/",
      title: "I'm a corporate",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-20">
      <section>
        <Hero
          title={"We build digital companies with you"}
          description={
            "We design, test and grow digital business from concept to successful startups "
          }
          imgHero={
            "https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSHN~nHrkWpfRAOZBlifRXkaBRHeE7wGr9-sK4hjCkOyl9shbGF7ggduqh~CECxrYSdDAkDi~ScvqLFizEt6By2ZR9ilrmtpbxq1EoQIipBJrE3JWQhO~y0ENu2xg5iK7sSL7vfNERYTJuzQdG6hk5zG5OmEFDx1N00niVeDl7jqS27jHm87p7MGTLDWLB7RZB0yD11Z10rzPv3k2tD7J4UtMMmHWeg5e7z76B9avsQObLXHFFFaUpU-DTzLkmq990Sb4k8aBZAd9r0H3MnGujWhBmOll3G2tQSkPUO30oiH8NuM9pmQVlKJ5ZK~67kSaLOeZcg0D1ce2WYZefS8YQ__"
          }
          textButton={'Become a founder'}
          textLearnMore={'Learn more'}
        />
      </section>
      <section>
        <StartupStudio
          title={"The Startup Studio"}
          studioFeatures={featuresStartup}
          svg={''}
        />
      </section>
      <section>
        <FeaturesSections
          title={"Increasing the chance of success"}
          advantages={exampleFeatures}
          mainImage={
            "https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSHN~nHrkWpfRAOZBlifRXkaBRHeE7wGr9-sK4hjCkOyl9shbGF7ggduqh~CECxrYSdDAkDi~ScvqLFizEt6By2ZR9ilrmtpbxq1EoQIipBJrE3JWQhO~y0ENu2xg5iK7sSL7vfNERYTJuzQdG6hk5zG5OmEFDx1N00niVeDl7jqS27jHm87p7MGTLDWLB7RZB0yD11Z10rzPv3k2tD7J4UtMMmHWeg5e7z76B9avsQObLXHFFFaUpU-DTzLkmq990Sb4k8aBZAd9r0H3MnGujWhBmOll3G2tQSkPUO30oiH8NuM9pmQVlKJ5ZK~67kSaLOeZcg0D1ce2WYZefS8YQ__"
          }
          svg={''}
        />
      </section>
      <section>
        <AlreadyLaunched title={"Already Launched"} launched={launchedImages} />
      </section>
      <section>
        <TeamSection
          title={"The team behind "}
          description={
            "We are a team of passionate entrepreneurs with complementary skills anda string track record of building successful digital startups"
          }
          members={teamMembers}
        />
      </section>
      <section>
        <Banner
          title={"Join Apolo"}
          subtitle={
            "We are looking for entrepreneurs, startups and corporate to collaborate with!"
          }
          buttons={btnBanner}
        />
      </section>
      <section className="pb-20">
        <Sponsors
          title={"Our dear Friends"}
          subtitle={
            "They are amplify everything we do, benefiting each project directly"
          }
          sponsors={sponsors}
        />
      </section>
    </div>
  );
}
