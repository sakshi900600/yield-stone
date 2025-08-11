import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Roadmap.css";
import ModelHeader from "../../components/Model_header/Header";
import Button from "../../components/Button/Button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const roadmapData = [
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

const Roadmap = () => {
  // Ref for the main section that acts as the scroll trigger
  const sectionRef = useRef();
  // Ref for the sticky wrapper that contains the horizontally scrolling content
  const horizontalScrollWrapperRef = useRef();
  // Ref for the actual container of roadmap cards
  const roadmapContainerRef = useRef();

  useLayoutEffect(() => {
    // Create a GSAP context for proper cleanup on component unmount
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".roadmap-card"); // Get all roadmap cards

      // Set initial state for the first card (applies to both desktop and mobile on load)
      if (cards.length > 0) {
        const firstCard = cards[0];
        const firstHeading = firstCard.querySelector(".roadmap-middle h1");
        const firstCapsule = firstCard.querySelector(".phase-capsule");

        firstCard.classList.add("is-active");
        gsap.set(firstHeading, { color: "#27d690" });
        if (firstCapsule) {
          firstCapsule.classList.add("is-active");
        }
      }

      // Use GSAP's matchMedia to apply different animations based on screen size
      ScrollTrigger.matchMedia({
        // Desktop and larger tablets (min-width: 1159px)
        "(min-width: 1159px)": function() {
          let totalContentWidth = 0;
          if (roadmapContainerRef.current) {
            totalContentWidth = roadmapContainerRef.current.scrollWidth;
          }

          let effectiveViewportWidth = window.innerWidth;
          if (horizontalScrollWrapperRef.current) {
            const wrapperRect = horizontalScrollWrapperRef.current.getBoundingClientRect();
            effectiveViewportWidth = wrapperRect.width;
          }

          let scrollAmount = totalContentWidth - effectiveViewportWidth;
          if (scrollAmount < 0) {
            scrollAmount = 0;
          }

          // Set the height of the section to create enough scroll space for pinning
          if (sectionRef.current) {
            sectionRef.current.style.height = `${scrollAmount + window.innerHeight}px`;
          }

          // Create the main horizontal scroll animation timeline
          const horizontalTl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: horizontalScrollWrapperRef.current,
              start: "top top",
              end: `+=${scrollAmount}`,
              scrub: true,
              invalidateOnRefresh: true,
              // markers: true, // Uncomment for debugging
            },
          });

          // Add the main horizontal movement to the timeline
          horizontalTl.to(roadmapContainerRef.current, {
            x: -scrollAmount,
            ease: "none",
          });

          // Animate individual cards within the horizontal timeline
          cards.forEach((card, index) => {
            const heading = card.querySelector(".roadmap-middle h1");
            const capsule = card.querySelector(".phase-capsule");
            const cardWidth = card.offsetWidth;
            const cardOffset = card.offsetLeft; // Distance from start of roadmap-container

            // Calculate the start and end points for each card's animation relative to the horizontal scroll
            // This makes the animation trigger as the card enters/leaves the central view
            // Adjust trigger points to ensure the effect is visible for the entire duration a card is "active"
            const activeZoneStart = effectiveViewportWidth * 0.25; // Example: start when 25% of viewport is covered
            const activeZoneEnd = effectiveViewportWidth * 0.75;   // Example: end when 75% of viewport is covered

            const triggerStart = cardOffset - activeZoneEnd;
            const triggerEnd = cardOffset + cardWidth - activeZoneStart;

            if (scrollAmount > 0) { // Only add animation if there's actual horizontal scroll
                // Animate heading color directly with GSAP
                horizontalTl.fromTo(heading,
                  { color: "white" },
                  { color: "#27d690", ease: "none" },
                  triggerStart / scrollAmount // Normalized start point in the main timeline (0 to 1)
                )
                .to(heading,
                  { color: "white", ease: "none" },
                  triggerEnd / scrollAmount // Normalized end point
                );

                // Toggle 'is-active' class for pseudo-element glow and capsule using a separate ScrollTrigger
                ScrollTrigger.create({
                    trigger: sectionRef.current, // Use the main section as trigger
                    containerAnimation: horizontalTl, // Link to the horizontal timeline
                    start: triggerStart,
                    end: triggerEnd,
                    onEnter: () => {
                      card.classList.add("is-active");
                      if (capsule) capsule.classList.add("is-active");
                    },
                    onLeave: () => {
                      // Only deactivate if it's not the first card, or if it's the first card and we've scrolled past the very beginning
                      if (index !== 0 || horizontalTl.progress() > 0.01) { // A small threshold
                        card.classList.remove("is-active");
                        if (capsule) capsule.classList.remove("is-active");
                      }
                    },
                    onEnterBack: () => {
                      card.classList.add("is-active");
                      if (capsule) capsule.classList.add("is-active");
                    },
                    onLeaveBack: () => {
                      // Only deactivate if it's not the first card, or if it's the first card and we're scrolling back past its active zone
                      if (index !== 0 || horizontalTl.progress() < 0.99) { // A small threshold
                        card.classList.remove("is-active");
                        if (capsule) capsule.classList.remove("is-active");
                      }
                    },
                    // markers: true,
                });
            }
          });

          // Special ScrollTrigger to ensure first card is active when scroll is at the very top of the section
          // This will override any onLeaveBack from the individual card trigger if it fires too early.
          if (cards.length > 0) {
            const firstCard = cards[0];
            const firstHeading = firstCard.querySelector(".roadmap-middle h1");
            const firstCapsule = firstCard.querySelector(".phase-capsule");

            ScrollTrigger.create({
              trigger: sectionRef.current,
              start: "top top", // When the section starts pinning
              end: "bottom top", // Covers the entire pinned section
              onUpdate: (self) => {
                // If the scroll is at the very beginning of the section, ensure the first card is active
                if (self.progress === 0) {
                  firstCard.classList.add("is-active");
                  gsap.to(firstHeading, { color: "#27d690", duration: 0.5, ease: "power1.out" });
                  if (firstCapsule) gsap.to(firstCapsule, { color: "#27d690", borderColor: "rgba(39, 214, 144, 0.6)", duration: 0.5, ease: "power1.out" });
                }
              },
              // markers: true,
            });
          }
        },
        // Mobile and smaller tablets (max-width: 1158px)
        "(max-width: 1158px)": function() {
          // Reset section height if it was set by GSAP for larger screens
          if (sectionRef.current) {
            sectionRef.current.style.height = 'auto'; // Revert to natural height
          }
          // Ensure roadmapContainerRef.current x-position is reset if it was animated
          gsap.set(roadmapContainerRef.current, { x: 0 });

          // Reset any active classes or colors that might be lingering from desktop view
          cards.forEach(card => {
            // Only remove if not the first card, as first card is initially active
            if (card !== cards[0]) {
              card.classList.remove("is-active");
              gsap.set(card.querySelector(".roadmap-middle h1"), { color: "white" });
              const capsule = card.querySelector(".phase-capsule");
              if (capsule) capsule.classList.remove("is-active");
            }
          });

          // Apply vertical scroll animation for each card
          cards.forEach((card) => {
            const heading = card.querySelector(".roadmap-middle h1");
            const capsule = card.querySelector(".phase-capsule");

            // Create ScrollTrigger for each card to toggle class and animate heading/capsule color
            ScrollTrigger.create({
              trigger: card,
              start: "top center", // When top of card hits center of viewport
              end: "bottom center", // When bottom of card leaves center of viewport
              onEnter: () => {
                card.classList.add("is-active"); // Add class for pseudo-element glow
                gsap.to(heading, { color: "#27d690", duration: 0.5, ease: "power1.out" }); // Animate heading color
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
              // markers: true,
            });
          });
        }
      });
    }, sectionRef); // Pass sectionRef to gsap.context for automatic cleanup

    // Cleanup function for useLayoutEffect
    return () => ctx.revert();
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    // Overall container to manage vertical layout and centering of all elements
    <div className="roadmap-overall-container">
      {/* Wrapper for ModelHeader to control its bottom margin and ensure full width */}
      <div className="roadmap-header-wrapper">
        <ModelHeader
          imageSrc="/numbers/nine.svg"
          label="ROADMAP"
          title="What We Plan Ahead Of Us"
        />
      </div>

      {/* The main roadmap section with horizontal/vertical card animation */}
      <section className="roadmap-section" ref={sectionRef}>
        {/* This wrapper will be sticky and contain the horizontally scrolling cards */}
        <div className="horizontal-scroll-wrapper" ref={horizontalScrollWrapperRef}>
          {/* This is your original roadmap-container, now set to flex-nowrap */}
          <div className="roadmap-container" ref={roadmapContainerRef}>
            {roadmapData.map((item, index) => (
              <div key={index} className="roadmap-card">
                <div className="roadmap-top">
                  <img
                    src={item.icon}
                    alt={`Icon for ${item.phase}`}
                    className="roadmap-icon"
                  />
                  <div className="phase-capsule">{item.phase}</div>
                </div>

                <div className="roadmap-middle">
                  <h1>{item.title}</h1>
                </div>

                <div className="roadmap-bottom">
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

      {/* Wrapper for the Button to center it */}
      <div className="roadmap-button-wrapper">
        <Button  text={'View Full Roadmap'} />
      </div>
      
    </div>
  );
};

export default Roadmap;
