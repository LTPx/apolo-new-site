import React from "react";
import Hero from "./components/hero";
import StartupStudio from "./components/startup-studio";
import FeaturesSections from "./components/features-section";
import AlreadyLaunched from "./components/already-launched";
import TeamSection from "./components/team-sections";
import Banner from "./components/banner";
import Sponsors from "./components/sponsors";
import { ApoloLayout } from "./_interfaces/layout";

interface Props {
  data: ApoloLayout;
}

function Home(props: Props) {
  const { data } = props;
  const hero = data.layout.find((ly) => ly.blockType === "apolo-hero-section");
  const startupIntro = data.layout.find(
    (ly) => ly.blockType === "apolo-the-studio"
  );
  const chanceSuccess = data.layout.find(
    (ly) => ly.blockType === "increasing-chance-of-success"
  );

  const defaultImage =
    "https://www.pngfind.com/pngs/m/333-3330324_imagenes-en-png-con-fondo-transparente-johns-hopkins.png";

  const heroParams = {
    title: "We build digital companies with you",
    description: hero?.heroSubtitle,
    imgHero: defaultImage,
    textButton: hero?.heroCTA,
    textLearnMore: hero?.learnMore,
  };

  const startupIntroParams = {
    title: startupIntro?.title,
    features: startupIntro?.features?.map((feature) => {
      return {
        title: feature.featureTitle,
        description: feature.featureText[0].children[0].text || "",
        icon: `https://admin.joinapolo.com${feature.featureIcon.url}`,
      };
    }),
  };

  const chanceSuccessParams = {
    title: chanceSuccess?.title,
    advantages: chanceSuccess?.chances?.map((feature) => {
      return {
        title: feature.featureTitle,
        description: feature.featureText[0].children[0].text || "",
        icon: `https://admin.joinapolo.com${feature.featureIcon.url}`,
      };
    }),
    mainImage: defaultImage,
  };

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
          title={heroParams.title}
          description={heroParams.description || ""}
          imgHero={heroParams.imgHero}
          textButton={heroParams.textButton || ""}
          textLearnMore={heroParams.textLearnMore || "Learn More"}
        />
      </section>
      <section>
        <StartupStudio
          title={startupIntroParams.title || ""}
          studioFeatures={startupIntroParams.features || []}
        />
      </section>
      <section>
        <FeaturesSections
          title={chanceSuccessParams.title || ""}
          advantages={chanceSuccessParams.advantages || []}
          mainImage={chanceSuccessParams.mainImage}
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

export default Home;
