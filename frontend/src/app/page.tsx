import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PoweredBy from "@/components/PoweredBy";

const LandingPage = () => {
  return (
    <div className="">
      <main>
        <Navbar />
        <div className="mt-12">
          <Hero />
          <Features />
          <FeaturesSection />
          <PoweredBy /> <Footer />/
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
