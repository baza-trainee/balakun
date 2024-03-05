import { About } from "./components/About";
import { Achivements } from "./components/Achivements";
import { Community } from "./components/Community";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Questions } from "./components/Questions";
import { Team } from "./components/Team";
import { YouTube } from "./components/YouTube";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Achivements />
      <Team />
      <Map />
      <YouTube />
      <Experience />
      <Questions />
      <Community />
      <Footer />
    </>
  );
}
