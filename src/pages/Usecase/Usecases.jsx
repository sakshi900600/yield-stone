import React from "react";
import { motion } from "framer-motion";
import "./Usecases.css";
import ModelHeader from "../../components/Model_header/Header";
import Button from "../../components/Button/Button";

const Usecases = () => {
  const usecaseData = [
    {
      id: 1,
      icon: "/usecases/usecase1.avif",
      title: "Institutional Investors",
      description:
        "Unlock highly liquid yields, enhanced by agentic AI decision-making.",
      link: "#institutional",
    },
    {
      id: 2,
      icon: "/usecases/usecase2.avif",
      title: "Real Estate Analysts",
      description:
        "Use our PropAI agentic real estate advisory tools to make the best investment decisions for your private portfolio. From institutions seeking stable, asset-backed yield to retail investors hunting fractional, high-performance property exposure, Yieldstone provides the on-chain gateway to AI-optimized real-estate income",
      link: "#analysts",
    },
    {
      id: 3,
      icon: "/usecases/usecase3.avif",
      title: "Retail Investors",
      description:
        "Access premium real estate investment deals usually only open to large-scale financial institutions.",
      link: "#retail",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    })
  };

  return (
    <div className="usecase-container">
      <div style={{ width: "100vw", overflow: "hidden" }}>
        <ModelHeader
          imageSrc="/numbers/seven.svg"
          label="ROADMAP"
          title="The YieldStone Use Cases"
        />
      </div>

      <div className="usecase-grid">
        {usecaseData.map((usecase, index) => (
          <div className="usecase-card" key={usecase.id}>
            <motion.img
              src={usecase.icon}
              alt={usecase.title}
              custom={index * 0.2}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
            <motion.h1
              custom={index * 0.2 + 0.1}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {usecase.title}
            </motion.h1>
            <motion.p
              custom={index * 0.2 + 0.2}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {usecase.description}
            </motion.p>
          </div>
        ))}
      </div>

      <motion.div
        custom={usecaseData.length * 0.2 + 0.3}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Button
          href="https://yieldstone.gitbook.io/yieldstone-whitepaper"
          target="_blank"
          text={"Read Documents"}
        />
      </motion.div>
    </div>
  );
};

export default Usecases;
