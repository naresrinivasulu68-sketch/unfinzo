import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Features from "./sections/Features";
import WhyUs from "./sections/WhyUs";
import Industry from "./sections/Industry";
import CTA from "./sections/CTA";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <WhyUs />
      <Industry />
      <CTA />
    </>
  );
}
