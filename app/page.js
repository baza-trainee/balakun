import About from "./[lang]/components/About/About";
import { Achivements } from "./[lang]/components/Achivements";
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
      <main>
        <Hero />
        <About />
        <Achivements />
        <Team />
        <Location />
        <YouTube />
        <Experience />
        <Questions />
        <Community />
      </main>
      <Footer />
    </>
  );
}
