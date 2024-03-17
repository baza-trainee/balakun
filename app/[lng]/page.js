import { About } from "@/components/About/About";
import { Achievements } from "@/components/Achievements";
import { Community } from "@/components/Community";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Questions } from "@/components/Questions";
import { Team } from "@/components/Team";
import { YouTube } from "@/components/YouTube";

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
}
