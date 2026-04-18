import { Hero } from "../components/sections/Hero";
import { TrustStrip } from "../components/sections/TrustStrip";
import { Services } from "../components/sections/Services";
import { Portfolio } from "../components/sections/Portfolio";
import { Showreel } from "../components/sections/Showreel";
import { MissionVision } from "../components/sections/WhyChooseUs";
import { Testimonials } from "../components/sections/Testimonials";
import { OurClients } from "../components/sections/OurClients";
import { Contact } from "../components/sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Portfolio />
      <Showreel />
      <MissionVision />
      <OurClients />
      <Testimonials />
      <Contact />
    </>
  );
}
