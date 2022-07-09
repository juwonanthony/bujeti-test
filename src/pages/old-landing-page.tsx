// @ts-ignore
import dynamic from "next/dynamic";
import Features from "../components/old-landing-page/features";
import FixedAssets from "../components/old-landing-page/fixed-assets";
import Footer from "../components/old-landing-page/footer";
import LandingPageHeader from "../components/old-landing-page/header";
import SectionOne from "../components/old-landing-page/section-one";
import SectionThree from "../components/old-landing-page/section-three";
import SectionTwo from "../components/old-landing-page/section-two";
import EarlyAccessForm from "../components/old-landing-page/early-access-form";

const HandleAnimations = dynamic(() => import("../components/old-landing-page/handle-animations"), { ssr: false });

const Home = () => {
  return (
    <main className="">
      <div className="h-full w-full relative main-container">
        <LandingPageHeader />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Features />
        <Footer />
        <FixedAssets />
        <HandleAnimations />
      </div>
    </main>
  );
};

export default Home;
