// hooks/useScrollAnimation.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(containerRef, childSelector) {
  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(childSelector);

    gsap.from(elements, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // when section is near viewport
        toggleActions: "play none none reverse",
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [containerRef, childSelector]);
}
