import { Separator } from "@/components/ui/separator";

import PresentationSection from "@/app/(landing)/_components/sections/presentation";
import LandingSection from "@/app/(landing)/_components/sections/landing";
import KnowledgeSection from "@/app/(landing)/_components/sections/knowledge";
import ProjectsSection from "@/app/(landing)/_components/sections/projects";

function HomePage() {
  return (
    <main>
      <LandingSection />
      <Separator className="bg-gray-300" />
      <PresentationSection />
      <Separator className="bg-gray-300" />
      <KnowledgeSection />
      <Separator className="bg-gray-300" />
      <ProjectsSection />
    </main>
  );
}

export default HomePage;
