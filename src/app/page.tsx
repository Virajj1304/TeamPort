import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import Why from "@/components/why/Why";
import Project from "@/components/project/Project";
import Prototype from "@/components/prototype/Prototype";
import Build from "@/components/build/Build";
import Team from "@/components/team/Team";
import Closing from "@/components/closing/Closing";
import Lab from "@/components/easter-eggs/Lab";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
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
