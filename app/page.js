import { About } from "./[lang]/components/About";
import { Achievements } from "./[lang]/components/Achievements";
import { Community } from "./[lang]/components/Community";
import { Experience } from "./[lang]/components/Experience";
import { Footer } from "./[lang]/components/Footer";
import { Header } from "./[lang]/components/Header";
import { Hero } from "./[lang]/components/Hero";
import { Location } from "./[lang]/components/Location";
import { Questions } from "./[lang]/components/Questions";
import { Team } from "./[lang]/components/Team";
import { YouTube } from "./[lang]/components/YouTube";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Team />
      <Location />
      <YouTube />
      <Experience />
      <Questions />
      <Community />
      <Footer />
    </>
  );
};