import PresentationSection from "@/app/(landing)/_components/sections/presentation";
import LandingSection from "@/app/(landing)/_components/sections/landing";
import KnowledgeSection from "@/app/(landing)/_components/sections/knowledge";
import ProjectsSection from "@/app/(landing)/_components/sections/projects";

function HomePage() {
  return (
    <main>
      <LandingSection />
      <PresentationSection />
      <KnowledgeSection />
      <ProjectsSection />
    </main>
  );
}

export default HomePage;
