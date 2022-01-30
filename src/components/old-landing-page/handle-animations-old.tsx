import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const HandleAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = Array.from(document.querySelectorAll(".section"));
    const container = document.querySelector(".main-container");

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("animation will now mount");
          startAnimation();
        }
      },
      { threshold: 1 }
    );

    intersectionObserver.observe(container);

    function startAnimation() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => "+=" + (window.innerHeight * sections.length - window.innerHeight),
          pin: true,
          // scrub: true,
          scrub: 2,
          snap: {
            snapTo: "labels",
            duration: { min: 0.3, max: 0.9 },
            ease: "power1.inOut",
          },
          // anticipatePin: 1,
          markers: true,
          invalidateOnRefresh: true,
          // snap: "labels",
        },
      });

      sections.forEach((section, index) => {
        const sectionHeight = section.clientHeight;
        console.log(sectionHeight);

        tl.addLabel(`label-${index}`);

        tl.to(section, {
          y: `${-1 * sectionHeight}px`,
          onStart: () => {
            console.log(section);
          },
          duration: 0.1,
        });

        if (index < sections.length - 1) {
          // console.log(sections[index + 1]);
          tl.to(sections[index + 1], { y: 0, duration: 0.1 }, "<");
        }
      });

      // const sectionHeight = sections[0].clientHeight;
      // console.log(sectionHeight);

      // tl.to(sections[0], {
      //   y: `${-1 * sectionHeight}px`,
      //   onStart: () => {
      //     console.log(sections[0]);
      //   },
      // });

      // tl.to(sections[1], { y: 0 }, "<");
    }
  }, []);

  return null;
};

export default HandleAnimations;
