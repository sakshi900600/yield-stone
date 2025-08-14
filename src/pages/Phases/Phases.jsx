import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Phases.css";
import ModelHeader from "../../components/Model_header/Header";
import Button from "../../components/Button/Button";

gsap.registerPlugin(ScrollTrigger);

const phaseData = [
  {
    phase: "PHASE 1",
    title: "AI Intelligence Tools Launch",
    icon: "/roadmap/roadmap-1.avif",
    points: [
      "Deploy PropAI Chat for basic property valuations and analytics",
      "Initial community testing and refinement of AI models",
    ],
  },
  {
    phase: "PHASE 2",
    title: "Specialized AI Agents & Developer Marketplace",
    icon: "/roadmap/roadmap-2.avif",
    points: [
      "Introduce domain-specific AI agents for portfolio optimization and market forecasting.",
      "Launch a marketplace for developers to upload custom AI models and earn $YIELD.",
    ],
  },
  {
    phase: "PHASE 3",
    title: "Decentralized Compute Foundations & GPU Marketplace MVP",
    icon: "/roadmap/roadmap-3.avif",
    points: [
      "Deploy foundational smart contracts for GPU rentals.",
      "Onboard initial GPU providers and run pilot compute tasks through PropAI and developer agents.",
    ],
  },
  {
    phase: "PHASE 4",
    title: "NEXUS Fund Integration & Tokenization of Real Estate",
    icon: "/roadmap/roadmap-4.avif",
    points: [
      "Launch tokenized real estate assets backed by the NEXUS Fund.",
      "Introduce AI-driven asset selection and performance tracking dashboards.",
    ],
  },
  {
    phase: "PHASE 5",
    title: "Full Ecosystem Convergence",
    icon: "/roadmap/roadmap-5.avif",
    points: [
      "Seamlessly integrate AI models, GPU compute, and NEXUS Fund assets.",
      "Optimize the entire ecosystem to operate as a unified, intelligent, and stable investment platform.",
    ],
  },
];

const Phase = () => {
  const sectionRef = useRef();
  const horizontalWrapperRef = useRef();
  const phaseContainerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".phase-card");

      if (cards.length > 0) {
        const firstCard = cards[0];
        const firstHeading = firstCard.querySelector(".phase-middle h1");
        const firstCapsule = firstCard.querySelector(".phase-capsule");

        firstCard.classList.add("is-active");
        gsap.set(firstHeading, { color: "#27d690" });
        if (firstCapsule) firstCapsule.classList.add("is-active");
      }

      ScrollTrigger.matchMedia({
        "(min-width: 1159px)": function() {
          let totalWidth = phaseContainerRef.current?.scrollWidth || 0;
          let viewportWidth = horizontalWrapperRef.current?.getBoundingClientRect().width || window.innerWidth;
          let scrollAmount = Math.max(totalWidth - viewportWidth, 0);

          if (sectionRef.current) {
            sectionRef.current.style.height = `${scrollAmount + window.innerHeight}px`;
          }

          const horizontalTl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: horizontalWrapperRef.current,
              start: "top top",
              end: `+=${scrollAmount}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          horizontalTl.to(phaseContainerRef.current, { x: -scrollAmount, ease: "none" });

          cards.forEach((card, index) => {
            const heading = card.querySelector(".phase-middle h1");
            const capsule = card.querySelector(".phase-capsule");
            const cardWidth = card.offsetWidth;
            const cardOffset = card.offsetLeft;

            const startZone = viewportWidth * 0.25;
            const endZone = viewportWidth * 0.75;
            const triggerStart = cardOffset - endZone;
            const triggerEnd = cardOffset + cardWidth - startZone;

            if (scrollAmount > 0) {
              horizontalTl.fromTo(heading, { color: "white" }, { color: "#27d690", ease: "none" }, triggerStart / scrollAmount)
                .to(heading, { color: "white", ease: "none" }, triggerEnd / scrollAmount);

              ScrollTrigger.create({
                trigger: sectionRef.current,
                containerAnimation: horizontalTl,
                start: triggerStart,
                end: triggerEnd,
                onEnter: () => {
                  card.classList.add("is-active");
                  if (capsule) capsule.classList.add("is-active");
                },
                onLeave: () => {
                  if (index !== 0 || horizontalTl.progress() > 0.01) {
                    card.classList.remove("is-active");
                    if (capsule) capsule.classList.remove("is-active");
                  }
                },
                onEnterBack: () => {
                  card.classList.add("is-active");
                  if (capsule) capsule.classList.add("is-active");
                },
                onLeaveBack: () => {
                  if (index !== 0 || horizontalTl.progress() < 0.99) {
                    card.classList.remove("is-active");
                    if (capsule) capsule.classList.remove("is-active");
                  }
                },
              });
            }
          });
        },
        "(max-width: 1158px)": function() {
          if (sectionRef.current) sectionRef.current.style.height = "auto";
          gsap.set(phaseContainerRef.current, { x: 0 });

          cards.forEach(card => {
            if (card !== cards[0]) {
              card.classList.remove("is-active");
              gsap.set(card.querySelector(".phase-middle h1"), { color: "white" });
              const capsule = card.querySelector(".phase-capsule");
              if (capsule) capsule.classList.remove("is-active");
            }
          });

          cards.forEach(card => {
            const heading = card.querySelector(".phase-middle h1");
            const capsule = card.querySelector(".phase-capsule");

            ScrollTrigger.create({
              trigger: card,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                card.classList.add("is-active");
                gsap.to(heading, { color: "#27d690", duration: 0.5, ease: "power1.out" });
                if (capsule) gsap.to(capsule, { color: "#27d690", borderColor: "rgba(39, 214, 144, 0.6)", duration: 0.5, ease: "power1.out" });
              },
              onLeave: () => {
                card.classList.remove("is-active");
                gsap.to(heading, { color: "white", duration: 0.5, ease: "power1.out" });
                if (capsule) gsap.to(capsule, { color: "white", borderColor: "rgba(255, 255, 255, 0.05)", duration: 0.5, ease: "power1.out" });
              },
              onEnterBack: () => {
                card.classList.add("is-active");
                gsap.to(heading, { color: "#27d690", duration: 0.5, ease: "power1.out" });
                if (capsule) gsap.to(capsule, { color: "#27d690", borderColor: "rgba(39, 214, 144, 0.6)", duration: 0.5, ease: "power1.out" });
              },
              onLeaveBack: () => {
                card.classList.remove("is-active");
                gsap.to(heading, { color: "white", duration: 0.5, ease: "power1.out" });
                if (capsule) gsap.to(capsule, { color: "white", borderColor: "rgba(255, 255, 255, 0.05)", duration: 0.5, ease: "power1.out" });
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="phase-overall-container">
      <div className="phase-header-wrapper">
        <ModelHeader
          imageSrc="/numbers/nine.svg"
          label="PHASES"
          title="What We Plan Ahead Of Us"
        />
      </div>

      <section className="phase-section" ref={sectionRef}>
        <div className="horizontal-scroll-wrapper" ref={horizontalWrapperRef}>
          <div className="phase-container" ref={phaseContainerRef}>
            {phaseData.map((item, index) => (
              <div key={index} className="phase-card">
                <div className="phase-top">
                  <img src={item.icon} alt={`Icon for ${item.phase}`} className="phase-icon" />
                  <div className="phase-capsule">{item.phase}</div>
                </div>

                <div className="phase-middle">
                  <h1>{item.title}</h1>
                </div>

                <div className="phase-bottom">
                  <ul>
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="phase-button-wrapper">
        <Button text={"View Full Roadmap"} />
      </div>
    </div>
  );
};

export default Phase;
