import ButtonGradient from "./assets/svg/ButtonGradient";
import ArenaSurvival from "./components/ArenaSurvival";
import ASLTeacher from "./components/ASLTeacher";
import FutureProjects from "./components/FutureProjects";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Website from "./components/Website";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Portfolio />
        <ArenaSurvival />
        <ASLTeacher />
        <Website />
        <FutureProjects />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
