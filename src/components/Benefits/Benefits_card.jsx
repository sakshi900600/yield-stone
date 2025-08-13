import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Benefits_card.css";
import ModelHeader from "../Model_header/Header";

const Benefits_card = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
  }, []);

  const cardData = [
    {
      id: 1,
      icon: "/benefits/benefits1.avif",
      title: "Agentic AI Analytics",
      description:
        "Drive asset selection and dynamic rebalancing that outperform human-only strategies.",
      hoverImage: "hoverImage.avif",
    },
    {
      id: 2,
      icon: "/benefits/benefits2.avif",
      title: "On-chain Tokenization",
      description:
        "Converts real-world properties into tradeable, compliance-ready digital assets.",
      hoverImage: "hoverImage.avif",
    },
    {
      id: 3,
      icon: "/benefits/benefits3.avif",
      title: "Decentralized GPU Infrastructure",
      description:
        "Eliminates cloud bottlenecks, lowers AI compute costs, deepens network sovereignty and unlocks supplementary income streams.",
      hoverImage: "hoverImage.avif",
    },
    {
      id: 4,
      icon: "/benefits/benefits4.avif",
      title: "$YIELD Governance & Incentives",
      description:
        "Deliver community-driven investment decisions, with buy-back-and-burn deflationary mechanics.",
      hoverImage: "hoverImage.avif",
    },
  ];

  return (
    <>
      {/* Animate heading */}
      <h1
        className="benefits-heading"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        Benefits
      </h1>

      <div className="benefits-container">
        {cardData.map((card, index) => (
          <div
            className="benefit-card"
            key={card.id}
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 200} // stagger cards
          >
            <div className="card-icon">
              <img src={card.icon} alt="benefit icon" />
            </div>

            <div className="card-content-container">
              <div className="blur-overlay"></div>

              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>

              <div className="card-hover-image">
                <img src={card.hoverImage} alt="" />
              </div>
            </div>
          </div>
        ))}

        <ModelHeader
          imageSrc="/numbers/three.svg"
          icon
          label="NEW AI TECHNOLOGY"
          title="About YieldStone & AI"
        />
      </div>
    </>
  );
};

export default Benefits_card;
