import React from 'react';
import { motion } from 'framer-motion';
import "./Community.css";
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import ModelHeader from '../../components/Model_header/Header';

const Community_card = () => {
  const cardData = [
    {
      id: 1,
      title: "Telegram",
      description: "Join our Telegram group to connect with a dynamic community of investors and the YieldStone team.",
      icon: "/community/telegram.svg",
      mainImage: "/community/telegram_img.avif",
      hoverImage: "hoverImage.avif",
      links: "https://t.me/Yieldstoneai",
    },
    {
      id: 2,
      title: "Twitter",
      description: "Our Twitter feed is a vital channel for real-time updates, engaging content, & direct interactions.",
      icon: "/community/x.svg",
      mainImage: "/community/x_img.avif",
      hoverImage: "hoverImage.avif",
      links: "https://x.com/yieldstone",
    }
  ];

  return (
    <>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <ModelHeader
          imageSrc="/numbers/eight.svg"
          label="JOIN US"
          title="Join The YieldStone Community"
        />
      </div>

      <div className="community-container">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            onClick={() => window.open(`${card.links}`, '_blank')}
            className="community-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="card-top">
              <img src={card.icon} alt={`${card.title} icon`} className="icon" />

              <div className="community-content">
                <div className="community-text-box">
                  <h1>{card.title}</h1>
                  <p>{card.description}</p>
                </div>

                <div className="community-text-button">
                  <img src="/community/community_btn_outline.svg" alt="" className="outline-img" />
                  <div className="arrow-icon">
                    <ArrowUpRight className='arrow' size={24} />
                    <ArrowRight className='arrow-right' size={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-bottom">
              <img className='cb-img' src={card.mainImage} alt={`${card.title} visual`} />
              <img className='cb-hover' src={card.hoverImage} alt="hover effect" />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Community_card;
