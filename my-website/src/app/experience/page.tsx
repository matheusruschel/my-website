import { getExperience } from "@/contentful/experience";
import InformationPanel from "@/components/general/information-panel";
import PortfolioPanel from "@/components/general/portfolio-panel";
import ExperienceCard from "@/components/general/experience-card";

export default async function ExperiencePage() {
  const experiencePageProps = await getExperience();

  if (!experiencePageProps) return null;

  const { headerTitle, portfolio, experience } = experiencePageProps;
  const portfolioFields = portfolio?.fields;

  return (
    <main className="flex flex-col items-center justify-center content-center">
      <InformationPanel headerTitle={headerTitle ?? ""}>
        {portfolioFields && <PortfolioPanel {...portfolioFields} />}
        {experience &&
          experience.map((position, index) => (
            <ExperienceCard singleExperience={position} key={index} />
          ))}
      </InformationPanel>
    </main>
  );
}
