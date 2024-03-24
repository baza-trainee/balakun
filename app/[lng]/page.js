import { About } from '@/components/About';
import { Achievements } from '@/components/Achivements';
import { Community } from '@/components/Community';
import { Experience } from '@/components/Experience';
import { Hero } from '@/components/Hero';
import { Location } from '@/components/Location';
import { Questions } from '@/components/Questions';
import { Team } from '@/components/Team';
import { YouTube } from '@/components/YouTube';
/*This element is example, It can switch language*/
//import LanguageChanger from "@/components/Internationalization/LanguageChanger";
//import ExampleClient from "@/components/Internationalization/ExampleClient";

//file's name, you can add other files in other components
const i18nNamespaces = ['translation'];

export default async function Home({ params: { lng } }) {
  return (
    <>
      <Hero />
      <About />
      <Achievements />
      <Team />
      <Location />
      <YouTube />
      <Experience />
      <Questions />
      <Community />
    </>
  );
}
