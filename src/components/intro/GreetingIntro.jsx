
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import greetings from "../../data/greetings.js";
import GreetingItem from "./GreetingItem.jsx";

import "./GreetingIntro.scss";

gsap.registerPlugin(ScrollTrigger);

function GreetingIntro() {
  const sectionRef = useRef(null);
  const greetingRefs = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const items = greetingRefs.current;

    if (!section || !items.length) return;

    const context = gsap.context(() => {
      gsap.set(items, {
        opacity: 0,
        y: 60,
        scale: 0.96,
        filter: "blur(5px)",
      });

      gsap.set(items[0], {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${greetings.length * 1000}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      items.forEach((item, index) => {
        if (index === 0) return;

        const previousItem = items[index - 1];

        timeline.to(previousItem, {
          opacity: 0,
          y: -60,
          scale: 1.03,
          filter: "blur(5px)",
          duration: 1,
          ease: "power2.inOut",
        });

        timeline.fromTo(
          item,
          {
            opacity: 0,
            y: 60,
            scale: 0.96,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          "<0.25"
        );

        timeline.to({}, {
          duration: 0.8,
        });
      });

      timeline.to(".greeting-intro__background", {
        opacity: 0,
        scale: 1.08,
        duration: 1,
        ease: "power3.inOut",
      });

      timeline.to(
        ".greeting-intro__content",
        {
          y: -70,
          opacity: 0,
          scale: 0.95,
          filter: "blur(6px)",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      );

      timeline.to(
        ".greeting-intro__header",
        {
          y: -30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut",
        },
        "<0.1"
      );

      timeline.to(
        ".greeting-intro__footer",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut",
        },
        "<"
      );
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="greeting-intro"
    >
      <div className="greeting-intro__background">
        <span>THE</span>
        <span>INDIA</span>
        <span>YOU NEVER</span>
        <span>MET</span>
      </div>

      <header className="greeting-intro__header">
        <span className="greeting-intro__brand">
          THE INDIA YOU NEVER MET
        </span>

        <span className="greeting-intro__edition">
          FIELD JOURNAL / 001
        </span>
      </header>

      <div className="greeting-intro__content">
        <p className="greeting-intro__eyebrow">
          A JOURNEY THROUGH INDIA
        </p>

        <div className="greeting-intro__stage">
          {greetings.map((greeting, index) => (
            <GreetingItem
              key={greeting.id}
              greeting={greeting}
              itemRef={(element) => {
                greetingRefs.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>

      <footer className="greeting-intro__footer">
        <span>SCROLL TO ENTER</span>
        <span>INDIA / 001</span>
      </footer>
    </section>
  );
}

export default GreetingIntro;

