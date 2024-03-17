import initTranslations from "../i18n";
import TranslationsProvider from "./components/Internationalization/TranslationsProvider/TranslationsProvider";

import { About } from "./components/About";
import { Achivements } from "./components/Achivements";
import { Community } from "./components/Community";

import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Questions } from "./components/Questions";
import { Team } from "./components/Team";
import { YouTube } from "./components/YouTube";

/*This element is example, It can switch language*/
//import LanguageChanger from "./components/Internationalization/LanguageChanger/LanguageChanger";
//import ExampleClient from "./components/Internationalization/ExampleClient/ExampleClient";

//file's name, you can add other files in other components  
const i18nNamespaces = ['translation'];

export default async function Home({params:{lang}}) {
/*You can run this function to change language on the server components*/
  const {t, resources }= await initTranslations(lang,i18nNamespaces)
  return (
    <TranslationsProvider
    namespaces={i18nNamespaces}
    locale={lang}
    resources={resources}
    >
      <Header />

      {/* <LanguageChanger/> */}
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
        {/* 
        *You'll see how change language in this components *
        <ExampleClient/> */}
      </main>
      <Footer />
      </TranslationsProvider>
  );
};