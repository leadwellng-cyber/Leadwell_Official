import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import Projects from "../components/Projects";
import Events from "../components/Events";
import CalendarPreview from "../components/CalendarPreview";
import News from "../components/News";
import GetInvolved from "../components/GetInvolved";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Projects />
      <Events />
      <CalendarPreview />
      <News />
      <GetInvolved />
    </>
  );
}
