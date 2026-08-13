import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../Navbar/Navbar.jsx";
import "./Hero.scss";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useLayoutEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const context = gsap.context(() => {
      const image = hero.querySelector(".hero__image");
      const texture = hero.querySelector(".hero__texture");
      const content = hero.querySelector(".hero__content");
      const journal = hero.querySelector(".hero__journal");
      const sideLabel = hero.querySelector(".hero__side-label");
      const footer = hero.querySelector(".hero__footer");
      const navbar = hero.querySelector(".navbar");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=120%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });
      timeline.to(image, { scale: 1.18, duration: 2, ease: "power2.inOut" });
      timeline.to(
        content,
        { y: -180, opacity: 0, duration: 1.5, ease: "power2.inOut" },
        "<0.2",
      );
      timeline.to(
        navbar,
        { y: -60, opacity: 0, duration: 1, ease: "power2.inOut" },
        "<",
      );
      timeline.to(
        journal,
        { x: -80, opacity: 0, duration: 1, ease: "power2.inOut" },
        "<",
      );
      timeline.to(
        sideLabel,
        { x: 120, opacity: 0, duration: 1, ease: "power2.inOut" },
        "<",
      );
      timeline.to(
        footer,
        { y: 80, opacity: 0, duration: 1, ease: "power2.inOut" },
        "<",
      );
      timeline.to(
        texture,
        { opacity: 0, duration: 1.5, ease: "power2.inOut" },
        "<",
      );
    }, hero);
    return () => {
      context.revert();
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__image" />

      <div className="hero__texture" />

      <Navbar />

      <div className="hero__content">
        <p className="hero__eyebrow">A FIELD JOURNAL OF THE UNSEEN</p>

        <h1 className="hero__title">
          <span>THE INDIA</span>
          <em>you never met</em>
        </h1>

        <div className="hero__description">
          <p>
            You’ve seen the famous places.
            <br />
            You’ve heard the famous stories.
          </p>

          <p className="hero__question">
            But have you seen <em>this</em> India?
          </p>
        </div>

        <button className="hero__button">
          <span>START EXPLORING</span>

          <span>→</span>
        </button>
      </div>

      <div className="hero__journal">
        <span>FIELD NOTE</span>

        <strong>001</strong>
      </div>

      <div className="hero__side-label">
        INDIA
        <span>×</span>
        UNSEEN
        <span>DISCOVERY</span>
        JOURNAL
        <small>VOL. I</small>
      </div>

      <div className="hero__footer">
        <span>CRAFT / SOUND / FOOD / STORIES</span>

        <span>SCROLL TO DISCOVER ↓</span>
      </div>
    </section>
  );
}

export default Hero;
