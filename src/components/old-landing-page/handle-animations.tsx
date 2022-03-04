import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";

const HandleAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const sections = Array.from(document.querySelectorAll(".section"));
    let currentSection = 0;
    const container = document.querySelector(".main-container");
    const learnMoreButton = document.querySelector("#learn-more");
    const logo = document.querySelector("#logo");
    const followTexts = document.querySelectorAll(".follow-text");
    const card = document.querySelector(".card");
    const phoneScreen = document.querySelector(".phone-screen");
    const cardModalScreen = document.querySelector(".card-modal-screen");
    const transactionsScreen = document.querySelector(".transactions-screen");

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    intersectionObserver.observe(container);

    function startAnimation() {
      // this scrolling object just allows us to conveniently call scrolling.enable(), scrolling.disable(), and check if scrolling.enabled is true.
      // some browsers (like iOS Safari) handle scrolling on a separate thread and can cause things to get out of sync (jitter/jumpy), so when we're animating the scroll position, force an update of GSAP tweens when there's a scroll event in order to maintain synchronization)
      const scrolling = {
        enabled: true,
        events: "scroll,wheel,touchmove,pointermove".split(","),
        prevent: (e) => e.preventDefault(),
        disable() {
          if (scrolling.enabled) {
            scrolling.enabled = false;
            window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
            scrolling.events.forEach((e, i) =>
              (i ? document : window).addEventListener(e, scrolling.prevent, { passive: false })
            );
          }
        },
        enable() {
          if (!scrolling.enabled) {
            scrolling.enabled = true;
            window.removeEventListener("scroll", gsap.ticker.tick);
            scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
          }
        },
      };

      function goToSection(section: Element, index: number, anim?: () => void) {
        if (scrolling.enabled) {
          // skip if a scroll tween is in progress
          scrolling.disable();
          gsap.to(window, {
            scrollTo: { y: section, autoKill: false },
            onComplete: scrolling.enable,
            duration: 1,
          });

          currentSection = index;

          anim && anim();
        }
      }

      const responsiveSize = (sizes: [number | string, number | string]) => {
        const isLargeScreen = window.innerWidth >= 800;

        if (isLargeScreen) {
          return sizes[1];
        }

        return sizes[0];
      };

      const positions = [
        {
          phone: () => responsiveSize(["67%", "52.5%"]),
          card: () => responsiveSize(["22%", "-25%"]),
        },
        {
          phone: () => responsiveSize(["54%", "20%"]),
          card: () => -1.5 * window.innerHeight,
        },
        {
          phone: () => responsiveSize(["54%", "12%"]),
          card: () => -1.5 * window.innerHeight,
        },
        {
          phone: () => responsiveSize(["54%", "12%"]),
          card: () => -1.5 * window.innerHeight,
        },
        {
          phone: () => -1 * (0.93 * phoneScreen.clientHeight + (window.innerHeight - phoneScreen.clientHeight)),
          card: () => -1.5 * window.innerHeight,
        },
        {
          phone: () => "-200%",
          card: () => -1.5 * window.innerHeight,
        },
      ];

      const initialCardAndPhoneAnim = () => {
        //reduce logo size and make it fixed
        logo.className = "logo logo--fixed";

        //fade text in
        gsap.fromTo(followTexts[0], { opacity: 0.6 }, { opacity: 1 });

        //take card out of view
        gsap.to(card, { y: positions[1].card(), duration: 1.4, ease: Power1.easeInOut, delay: 0.15 });

        //move phone screen up
        gsap.to(phoneScreen, { y: positions[1].phone(), duration: 0.8, ease: Power1.easeOut, delay: 0.15 });
      };

      ScrollTrigger.create({
        trigger: sections[0],
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () => goToSection(sections[0], 0),
        onEnterBack: () =>
          goToSection(sections[0], 0, () => {
            //bring logo back in normal position
            logo.className = "logo logo--normal";
            //bring card back in normal position
            gsap.to(card, { y: positions[0].card(), duration: 1.4, ease: Power1.easeInOut, delay: 0.15 });
            //bring phone screen back in normal position
            gsap.to(phoneScreen, {
              y: positions[0].phone(),
              duration: 0.8,
              ease: Power1.easeOut,
              delay: 0.15,
            });
          }),
      });

      ScrollTrigger.create({
        trigger: sections[1],
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () => goToSection(sections[1], 1, initialCardAndPhoneAnim),
        onEnterBack: () =>
          goToSection(sections[1], 1, () => {
            //fade text in
            gsap.fromTo(followTexts[0], { opacity: 0.6 }, { opacity: 1 });

            //hide the card modal screen
            gsap.to(cardModalScreen, { y: "100%" });

            //return phone screen to normal position
            gsap.to(phoneScreen, { y: positions[1].phone(), duration: 0.8, ease: Power1.easeOut });
          }),
      });

      ScrollTrigger.create({
        trigger: sections[2],
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () =>
          goToSection(sections[2], 2, () => {
            //fade text in
            gsap.fromTo(followTexts[1], { opacity: 0.6 }, { opacity: 1 });

            //move phone screen up a bit
            gsap.to(phoneScreen, { y: positions[2].phone(), duration: 0.8, ease: Power1.easeOut });

            //bring the card modal screen in view
            gsap.to(cardModalScreen, { y: 0 });
          }),
        onEnterBack: () =>
          goToSection(sections[2], 2, () => {
            //fade text in
            gsap.fromTo(followTexts[1], { opacity: 0.6 }, { opacity: 1 });

            //hide transactions screen
            gsap.to(transactionsScreen, { y: "100%" });
          }),
      });

      ScrollTrigger.create({
        trigger: sections[3],
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () =>
          goToSection(sections[3], 3, () => {
            // fade text in
            gsap.fromTo(followTexts[2], { opacity: 0.6 }, { opacity: 1 });

            // show transactions screen
            gsap.to(transactionsScreen, { y: 0 });
          }),
        onEnterBack: () =>
          goToSection(sections[3], 3, () => {
            //fade text in
            gsap.fromTo(followTexts[2], { opacity: 0.6 }, { opacity: 1 });

            //bring phone screen back in full view
            gsap.to(phoneScreen, {
              y: positions[2].phone(),
              duration: 0.8,
              ease: Power1.easeOut,
              delay: 0.15,
            });
          }),
      });

      ScrollTrigger.create({
        trigger: sections[4],
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () =>
          goToSection(sections[4], 4, () => {
            //move phone screen up to only show a part
            gsap.to(phoneScreen, {
              y: positions[4].phone(),
              duration: 0.8,
              ease: Power1.easeOut,
              delay: 0.15,
            });
          }),
        onEnterBack: () =>
          goToSection(sections[4], 4, () => {
            //move phone screen up to only show a part
            gsap.to(phoneScreen, {
              y: positions[4].phone(),
              duration: 0.8,
              ease: Power1.easeOut,
              delay: 0.15,
            });
            // revert logo to normal color
            logo.className = "logo logo--fixed";
          }),
      });

      ScrollTrigger.create({
        trigger: sections[5],
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () =>
          goToSection(sections[5], 5, () => {
            //take phone screen completely out of view
            gsap.to(phoneScreen, { y: positions[5].phone(), duration: 0.8, ease: Power1.easeOut, delay: 0.15 });

            // make logo white
            logo.className = "logo logo--fixed text-white";
          }),
        onEnterBack: () => goToSection(sections[5], 5),
        onUpdate: () => {
          const topDistance = sections[5].getBoundingClientRect().top;

          if (topDistance < -10) {
            logo.classList.add("opacity-0");
          } else {
            logo.classList.remove("opacity-0");
          }
        },
      });

      learnMoreButton.addEventListener("click", () => {
        goToSection(sections[1], 1, initialCardAndPhoneAnim);
      });

      window.addEventListener("resize", (e) => {
        const isLargeScreen = window.innerWidth >= 800;

        const xPositions = [
          //small screens
          {
            card: "17%",
            phone: "-50%",
          },
          //large screens
          {
            card: "-73%",
            phone: 0,
          },
        ];

        const xValues = isLargeScreen ? xPositions[1] : xPositions[0];

        console.log(xValues);

        gsap.to(phoneScreen, { transform: `translate(${xValues.phone}, ${positions[currentSection].phone()})` });
        gsap.to(card, { transform: `translate(${xValues.card}, ${positions[currentSection].card()})` });
      });
    }
  }, []);

  return null;
};

export default HandleAnimations;
