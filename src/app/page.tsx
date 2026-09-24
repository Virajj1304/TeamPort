import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import Why from "@/components/why/Why";
import Project from "@/components/project/Project";
import Prototype from "@/components/prototype/Prototype";
import Build from "@/components/build/Build";
import Team from "@/components/team/Team";
import Closing from "@/components/closing/Closing";
import Lab from "@/components/easter-eggs/Lab";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Navigation />
      <main className="flex-1 relative">
        {/* Noise texture overlay */}
        <div className="noise-overlay" />
        <Hero />
        <Why />
        <Project />
        <Prototype />
        <Build />
        <Team />
        <Closing />
      </main>
      <Lab />
    </>
  );
}
