import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import './Team.css';

const Team = () => {
  const members = [
    {
      name: "Damian Owca",
      image: "/team/member-1.avif",
      linkedin: "https://www.linkedin.com/in/damian-owca/",
      role: "Co-Founder & Managing Partner, North Node Capital Developed foundational expertise at Goldman Sachs in structured finance and private equity within GSAM.",
      description: `Led co-investment syndication at Pantera Capital and contributed strategic oversight at fintech firm Amount. In a separate capacity, applies machine learning methodologies at Pin AI. At North Node Capital, Damian integrates institutional rigor and data-driven analysis across multiple asset classes.`,
    },
    {
      name: "Larry Lundy",
      image: "/team/member-2.avif",
      linkedin: "https://scholargps.com/scholars/26593571063131/larry-lundy",
      role: "Larry is a seasoned DeFi expert and highly respected advisor, known for his broad expertise in policy, legal compliance, AI, security, mining, and web3. He has played a key role in advising governments and shaping global blockchain compliance standards.",
      description: `Larry has held leadership positions at top industry firms including CertiK APAC, Salus Labs, and Metatrust Security. He now serves as Chief Business Officer at HashpowerX, one of the world’s top three companies in mining and data infrastructure.`,
    },
    {
      name: "Justin Hoskins",
      image: "/team/member-3.avif",
      linkedin: "https://www.linkedin.com/in/justin-hoskins-cima%C2%AE-70051bb6/",
      role: "Vice President | Regional Director, Goldman Sachs | Advisor At Yieldstone.",
      description: `Has held multiple roles at Goldman Sachs across equity derivatives and institutional asset management. With a CIMA® credential, Justin currently leads defined contribution investment initiatives in the Midwest, ensuring efficient capital deployment and adherence to institutional standards`,
    },
    {
      name: "Dante Krieger",
      image: "/team/member-4.avif",
      linkedin: "https://www.linkedin.com/in/dante-krieger-8204a7127/",
      role: "Associate Director of Strategy at Willow Bridge Property Company, where he works closely with the executive team to lead innovation and growth across a $3B+ multifamily real estate portfolio.",
      description: `Dante brings deep expertise in real estate finance and strategic advisory, previously serving clients at McKinsey & Company in NYC advising private equity firms, developers, and proptech pioneers. His work focuses on integrating technology, driving sustainable expansion, and future-proofing operations in an evolving real estate landscape..`,
    },
  ];

  return (
    <div id='team' className="team-card-container">
      {members.map((member, index) => (
        <motion.div
          className="team-card"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Top section animation */}
          <motion.div
            className="team-card-top"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="profile">
              <img src={member.image} alt={member.name} />
              <div className="corners top-left"></div>
              <div className="corners top-right"></div>
              <div className="corners bottom-left"></div>
              <div className="corners bottom-right"></div>

              <div className="profile-topper">
                <div className="corners top-left green"></div>
                <div className="corners top-right green"></div>
                <div className="corners bottom-left green"></div>
                <div className="corners bottom-right green"></div>
                <p>{member.name}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div className="profile-decor">
              <div className="green-bg"></div>
              <div className="green-border"></div>
            </div>
          </motion.div>

          {/* Bottom section animation (delayed) */}
          <motion.div
            className="team-card-bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 + 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Team;
