import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import FeatureCards from "./sections/FeatureCards"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Aboutme from "./sections/Aboutme"
const App = () => {
  return (
   <>
   <NavBar />
   <Hero/>
   <ShowcaseSection />
   <LogoSection />
   <FeatureCards />
   <ExperienceSection />
   <TechStack />
   <Testimonials />
   <Contact />
   <Aboutme />
   </>
  )
}

export default App
