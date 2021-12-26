import dynamic from "next/dynamic";
import Features from "../components/features";
import FixedAssets from "../components/fixed-assets";
import Footer from "../components/footer";
import LandingPageHeader from "../components/header";
import MetaTags from "../components/meta-tags";
import SectionOne from "../components/section-one";
import SectionThree from "../components/section-three";
import SectionTwo from "../components/section-two";

const HandleAnimations = dynamic(() => import("../components/handle-animations"), { ssr: false });

const Home = () => {
  return (
    <>
      <MetaTags />
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
    </>
  );
};

export default Home;
