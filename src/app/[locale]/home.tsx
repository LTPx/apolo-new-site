import React from "react";
import Hero from "./../components/hero";
import StartupStudio from "./../components/startup-studio";
import FeaturesSections from "./../components/features-section";
import AlreadyLaunched from "./../components/already-launched";
import TeamSection from "./../components/team-sections";
import Banner from "./../components/banner";
import Sponsors from "./../components/sponsors";
import { ApoloLayout } from "./../_interfaces/layout";

interface Props {
  data: ApoloLayout;
}

function Home(props: Props) {
  const { data } = props;
  const defaultImage =
    "https://www.pngfind.com/pngs/m/333-3330324_imagenes-en-png-con-fondo-transparente-johns-hopkins.png";

  const hero = data.layout.find((ly) => ly.blockType === "apolo-hero-section");
  const startupIntro = data.layout.find(
    (ly) => ly.blockType === "apolo-the-studio"
  );
  const chanceSuccess = data.layout.find(
    (ly) => ly.blockType === "increasing-chance-of-success"
  );

  const launched = data.layout.find((ly) => ly.blockType === "apolo-launched");

  const team = data.layout.find((ly) => ly.blockType === "apolo-team");

  const cta = data.layout.find((ly) => ly.blockType === "apolo-bottom-ctas");

  const sponsors = data.layout.find(
    (ly) => ly.blockType === "apolo-our-dear-friends"
  );

  const heroParams = {
    title: hero?.heroTitle || "",
    description: hero?.heroSubtitle,
    imgHero: hero?.heroImage?.url
      ? `https://admin.joinapolo.com${hero?.heroImage?.url}`
      : "",
    textButton: hero?.heroCTA?.heroCTA,
    linkButton: hero?.heroCTA?.heroCTALink,
    textLearnMore: hero?.learnMore ,
    widthImageHero: hero?.heroImage?.width || undefined,
    heightImageHero: hero?.heroImage?.height || undefined,
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
    mainImage: chanceSuccess?.image?.url
      ? `https://admin.joinapolo.com${chanceSuccess.image.url}`
      : defaultImage,
  };

  const launchedParams = {
    title: launched?.title,
    launched: launched?.companies?.map((company) => {
      return {
        img: `https://admin.joinapolo.com${company.companyLogo.url}`,
        name: company.companyName,
        url: company.companyLink
      }
    }),
  };

  const teamParams = {
    title: team?.title,
    description: team?.subtitle,
    members: team?.teamMembers?.map((member) => {
      return {
        img: `https://admin.joinapolo.com${member.image.url}`,
        name: member.name,
        profession: member.role,
        alt: member.image.alt || member.name,
      };
    }),
  };

  const ctaParams = {
    title: cta?.title || "",
    subtitle: cta?.subtitle || "",
    buttons:
      cta?.ctas?.map((cta) => {
        return {
          link: cta.ctaLink || '/',
          title: cta.ctaText,
        };
      }) || [],
  };

  const sponsorsParams = {
    title: sponsors?.title || "",
    subtitle: sponsors?.subtitle || "",
    sponsorsImageUrl:
      sponsors?.companies?.map((company) => {
        return company.companyLogo.url
          ? `https://admin.joinapolo.com${company.companyLogo.url}`
          : defaultImage;
      }) || [],
  };

  return (
    <div className="container mx-auto flex flex-col gap-20">
      <section>
        <Hero
          title={heroParams.title}
          description={heroParams.description || ""}
          imgHero={heroParams.imgHero}
          textButton={heroParams.textButton || ""}
          linkButton={heroParams.linkButton || "/" }
          textLearnMore={heroParams.textLearnMore}
          // width={heroParams.widthImageHero}
          // height={heroParams.heightImageHero}
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
        <AlreadyLaunched
          title={launchedParams.title || ""}
          launched={launchedParams.launched || []}
        />
      </section>
      <section>
        <TeamSection
          title={teamParams.title || ""}
          description={teamParams.description || ""}
          members={teamParams.members || []}
        />
      </section>
      <section>
        <Banner
          title={ctaParams.title}
          subtitle={ctaParams.subtitle}
          buttons={ctaParams.buttons}
        />
      </section>
      <section className="pb-20">
        <Sponsors
          title={sponsorsParams.title}
          subtitle={sponsorsParams.subtitle}
          sponsorsImageUrl={sponsorsParams.sponsorsImageUrl}
        />
      </section>
    </div>
  );
}

export default Home;
