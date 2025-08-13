import React, { useState } from 'react';
import './Functionality.css';
import Button from '../../components/Button/Button';
import ModelHeader from '../../components/Model_header/Header';


const options = [
  {
    id: 1,
    title: "NEXUS Subscribers",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 36 36" fill="none" class="tab_icon"><path d="M25.0847 14.5798H10.9153C9.87717 14.5808 8.88188 14.9902 8.14784 15.718C7.4138 16.4459 7.00099 17.4328 7 18.4622V25.1176C7.00099 26.147 7.4138 27.1339 8.14784 27.8618C8.88188 28.5897 9.87717 28.999 10.9153 29H25.0847C26.1228 28.999 27.1181 28.5897 27.8522 27.8618C28.5862 27.1339 28.999 26.147 29 25.1176V18.4622C28.999 17.4328 28.5862 16.4459 27.8522 15.718C27.1181 14.9902 26.1228 14.5808 25.0847 14.5798ZM20.7966 22.6625H18.9322V24.5113C18.9322 24.7564 18.834 24.9915 18.6592 25.1649C18.4843 25.3382 18.2472 25.4356 18 25.4356C17.7528 25.4356 17.5157 25.3382 17.3408 25.1649C17.166 24.9915 17.0678 24.7564 17.0678 24.5113V22.6625H15.2034C14.9562 22.6625 14.719 22.5651 14.5442 22.3918C14.3694 22.2184 14.2712 21.9833 14.2712 21.7382C14.2712 21.493 14.3694 21.2579 14.5442 21.0845C14.719 20.9112 14.9562 20.8138 15.2034 20.8138H17.0678V18.965C17.0678 18.7199 17.166 18.4848 17.3408 18.3114C17.5157 18.1381 17.7528 18.0407 18 18.0407C18.2472 18.0407 18.4843 18.1381 18.6592 18.3114C18.834 18.4848 18.9322 18.7199 18.9322 18.965V20.8138H20.7966C21.0438 20.8138 21.281 20.9112 21.4558 21.0845C21.6306 21.2579 21.7288 21.493 21.7288 21.7382C21.7288 21.9833 21.6306 22.2184 21.4558 22.3918C21.281 22.5651 21.0438 22.6625 20.7966 22.6625Z" fill="currentColor"></path><path d="M25.4576 12.916H10.5424C10.2457 12.916 9.96116 12.7991 9.75137 12.5911C9.54159 12.3831 9.42373 12.1009 9.42373 11.8067C9.42373 11.5125 9.54159 11.2304 9.75137 11.0224C9.96116 10.8143 10.2457 10.6975 10.5424 10.6975H25.4576C25.7543 10.6975 26.0388 10.8143 26.2486 11.0224C26.4584 11.2304 26.5763 11.5125 26.5763 11.8067C26.5763 12.1009 26.4584 12.3831 26.2486 12.5911C26.0388 12.7991 25.7543 12.916 25.4576 12.916Z" fill="currentColor"></path><path d="M23.9661 9.21849H12.0339C11.7372 9.21849 11.4527 9.10162 11.2429 8.8936C11.0331 8.68557 10.9153 8.40343 10.9153 8.10924C10.9153 7.81505 11.0331 7.53291 11.2429 7.32489C11.4527 7.11687 11.7372 7 12.0339 7H23.9661C24.2628 7 24.5473 7.11687 24.7571 7.32489C24.9669 7.53291 25.0847 7.81505 25.0847 8.10924C25.0847 8.40343 24.9669 8.68557 24.7571 8.8936C24.5473 9.10162 24.2628 9.21849 23.9661 9.21849Z" fill="currentColor"></path></svg>
    ),
  },
  {
    id: 2,
    title: "Liquidity Providers (LPs)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 36 36" fill="none" class="tab_icon"><path d="M31.0967 21.6776C30.8372 21.4615 30.5545 21.2524 30.251 21.0508C30.6139 21.6909 30.8046 22.367 30.8046 23.0612C30.8046 24.983 29.3916 26.7402 26.8258 28.0092C24.4537 29.1823 21.3192 29.8285 18 29.8285C14.6808 29.8285 11.5464 29.1824 9.17426 28.0092C6.6085 26.7402 5.19545 24.983 5.19545 23.0612C5.19545 22.367 5.38605 21.6909 5.7491 21.0508C5.44553 21.2524 5.16287 21.4615 4.9033 21.6776C4.03506 22.4006 3 23.5668 3 25.0163C3 25.8652 3.34992 26.7047 4.03998 27.5116C4.76244 28.3563 5.81379 29.1235 7.16502 29.7917C10.0444 31.2157 13.8924 32 18 32C22.1077 32 25.9556 31.2157 28.835 29.7916C30.1862 29.1234 31.2376 28.3562 31.96 27.5116C32.6501 26.7047 33 25.8652 33 25.0163C33 23.5668 31.9649 22.4006 31.0967 21.6776Z" fill="currentColor"></path><path d="M18 25.9183C14.0762 25.9183 10.7451 23.3616 9.61904 19.8442C7.91221 20.7629 6.95326 21.9062 6.95326 23.0612C6.95326 24.2722 8.04932 25.5089 9.96035 26.4541C12.0931 27.5089 14.9483 28.0898 18 28.0898C21.0517 28.0898 23.9069 27.5089 26.0396 26.4541C27.9507 25.5089 29.0467 24.2723 29.0467 23.0612C29.0467 21.9062 28.0878 20.7629 26.381 19.8442C25.2549 23.3616 21.9238 25.9183 18 25.9183Z" fill="currentColor"></path><path d="M18 24.1796C21.877 24.1796 25.0311 21.0598 25.0311 17.225C25.0311 15.9266 24.6659 14.6592 23.9748 13.5598C23.9736 13.5579 18 4 18 4L12.0264 13.5579C11.3342 14.6592 10.9689 15.9266 10.9689 17.225C10.9689 21.0597 14.123 24.1796 18 24.1796Z" fill="currentColor"></path></svg>
    ),
  },
  {
    id: 3,
    title: "AI Tools & Model Marketplace",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 36 36" fill="none" class="tab_icon"><path d="M23.283 7.7829C23.283 4.51895 11.5957 4.51889 11.5957 7.7829C11.5957 11.0475 23.283 11.0477 23.283 7.7829Z" fill="currentColor"></path><path d="M26.0955 16.1246C25.8843 15.3558 25.3446 14.6351 24.516 14.0184V13.4689C25.6174 12.6511 26.1979 11.6707 26.1979 10.6214V7.7829C26.1979 3.43683 16.7575 1.50968 11.3624 4.31544C9.63352 5.21456 8.68141 6.44593 8.68141 7.7829V9.4773C7.58037 10.2949 7 11.2751 7 12.3242V15.1626C7 16.2117 7.57991 17.1918 8.68141 18.01C8.68141 19.8121 8.59139 20.2928 9.07624 21.1515C8.81443 21.6156 8.68141 22.1013 8.68141 22.5992V28.2193C8.68141 29.5562 9.63352 30.7877 11.3624 31.6868C16.7324 34.4795 26.1979 32.5824 26.1979 28.2193V26.0707C27.9828 25.1767 29 23.9023 29 22.5424V19.704C29 18.3169 27.9447 17.0212 26.0955 16.1246ZM23.4726 23.1942C24.8762 22.4751 26.1979 21.2841 26.1979 19.7039V17.2362C29.7189 19.2801 27.989 22.1569 23.4726 23.1942ZM9.71285 21.9863C10.1906 22.4742 10.8246 22.9142 11.5849 23.283C11.8979 24.419 12.9253 25.4159 14.4191 26.1355C11.2384 25.4605 9.09625 23.7747 9.71285 21.9863ZM17.4393 20.7112C15.1494 20.7112 13.0091 20.1947 11.5449 19.3678C17.1039 21.0041 24.3991 19.0173 24.5141 15.2481C27.0385 17.8397 22.9078 20.7112 17.4393 20.7112ZM17.4393 3.93767C21.6852 3.93767 25.2722 5.69858 25.2722 7.78284C25.2722 9.86744 21.6852 11.6286 17.4393 11.6286C13.1938 11.6286 9.60714 9.86744 9.60714 7.78284C9.60714 5.69858 13.1938 3.93767 17.4393 3.93767ZM8.68326 10.7056C8.79615 14.4589 16.0695 16.4699 21.653 14.8264C20.1887 15.6534 18.0482 16.1699 15.758 16.1699C10.2805 16.1699 6.1566 13.2895 8.68326 10.7056Z" fill="currentColor"></path></svg>
    ),
  },
  {
    id: 4,
    title: "Competitive Landscape",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 36 36" fill="none" class="tab_icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.2551 4L16.5102 7.01412V31.9999H18.5636V26.7477L18.0884 26.795C17.894 26.8141 17.7215 26.665 17.7032 26.4617C17.6849 26.2585 17.8276 26.0782 18.022 26.059L21.6768 25.6953C21.8712 25.6761 22.0437 25.8253 22.0621 26.0286C22.0804 26.2318 21.9377 26.4121 21.7433 26.4313L21.2017 26.4852V31.9999H30V7.01412L23.2551 4ZM19.1561 23.3811L17.8812 23.5087V20.9335L19.1561 20.728V23.3811ZM19.1565 19.198L17.8812 19.4485V16.8671L19.1565 16.5385V19.198ZM19.1565 15.0128L17.8812 15.3862V12.8049L19.1565 12.3533V15.0128ZM19.1565 10.8255L17.8812 11.3198V8.90827L19.1569 8.33663L19.1565 10.8255ZM21.884 23.1095L20.4474 23.2534V20.5169L21.884 20.2849V23.1095ZM21.884 18.6588L20.4474 18.9415V16.2071L21.884 15.8365V18.6588ZM21.884 14.2103L20.4474 14.6316V11.8951L21.884 11.3858V14.2103ZM21.884 9.76188L20.4474 10.3217L20.447 7.75882L21.884 7.11431L21.884 9.76188ZM25.2961 27.6121C25.2961 27.8169 25.1373 27.9829 24.9413 27.9829C24.7454 27.9829 24.5866 27.8169 24.5866 27.6121V7.23936C24.5866 7.03451 24.7454 6.86849 24.9413 6.86849C25.1373 6.86849 25.2961 7.03451 25.2961 7.23936V27.6121ZM26.9823 27.6121C26.9823 27.8169 26.8235 27.9829 26.6276 27.9829C26.4316 27.9829 26.2728 27.8169 26.2728 27.6121V7.9929C26.2728 7.78806 26.4317 7.62203 26.6276 7.62203C26.8235 7.62203 26.9823 7.78812 26.9823 7.9929V27.6121ZM28.6686 27.6121C28.6686 27.8169 28.5097 27.9829 28.3138 27.9829C28.1178 27.9829 27.959 27.8169 27.959 27.6121V8.74644C27.959 8.5416 28.1178 8.37558 28.3138 8.37558C28.5097 8.37558 28.6686 8.5416 28.6686 8.74644V27.6121ZM13.0236 11.2793L6 14.418V31.9999H8.19283V27.9221L7.71762 27.9694C7.5232 27.9886 7.35073 27.8394 7.3324 27.6362C7.31407 27.4329 7.45674 27.2526 7.65116 27.2335L11.306 26.8698C11.5004 26.8507 11.6729 26.9998 11.6913 27.2031C11.7096 27.4063 11.5669 27.5866 11.3725 27.6058L10.8308 27.6597V32H15.8007V12.5203L13.0236 11.2793ZM8.53832 24.1282L7.50068 24.2768V22.1888L8.53832 21.966V24.1282ZM8.53832 20.7248L7.50068 20.9916V18.9036L8.53832 18.5625V20.7248ZM8.53867 17.3201L7.50074 17.7038V15.7536L8.53903 15.2965L8.53867 17.3201ZM10.7947 23.8026L9.59967 23.9747V21.7385L10.7947 21.4807V23.8026ZM10.7947 20.1424L9.59967 20.4501V18.2126L10.7947 17.8178V20.1424ZM10.7947 16.4809L9.59932 16.9257V14.8302L10.7947 14.3007V16.4809Z" fill="currentColor"></path></svg>
    ),
  },
];



// 💡 Add this array to store detailed content for each option
const optionDetails = [
  {
    id: 1,
    icon: "/functionality/func-icon1.svg",
    heading: "NEXUS Subscribers",
    subheading: "NEXUS Subcribers lock $USDC in our Commitment Pool while it is open and receive nEXUS shares based on the capital committed.",
    text1: "Once the pool is closed, no new NEXUS I shares will be issued as it is a closed-end investment vehicle. Shareholders will receive distributions in $USDC from the profits generated by the NEXUS. These NEXUS shares, distinct from $YIELD tokens, will be tradable in our secondary marketplace.",
    text2: "The committed capital is locked for a 5-year investment period. During this time, we utilize the liquidity, combined with leverage, to acquire and monetize real estate assets. Capital is returned to shareholders at the end of the investment period and earlier through distributions. Fees follow the standard “2&20” model: the DAO will receive a 2% management fee on"
  },
  {
    id: 2,
    icon: "/functionality/func-icon2.svg",
    heading: "Liquidity Providers (LPs)",
    subheading: "LPs provide liquidity to the lending pools by supplying stablecoins such as USDC.",
    text1: "The REID is able to borrow capital from the lending pool and pay interest to LPs on the capital borrowed.",
    text2: "LPs earn returns based on competitive APY rates, supporting the platform’s liquidity and enabling efficient financial operations."
  },
  {
    id: 3,
    icon: "/functionality/func-icon3.svg",
    heading: "AI Tools & Model Marketplace",
    subheading: "$YIELD holders benefit from sharing the revenue generated by the DAO, which collects a 20% performance fee on the REID profits.",
    text1: "Additionally, holders play a crucial role in managing and decision-making within the DAO, as the $YIELD token represents governance rights, with holders being able to vote on new properties to be acquired by the REID",
    text2: ""
  },
  {
    id: 4,
    icon: "/functionality/func-icon4.svg",
    heading: "Competitive Landscape",
    subheading: "YieldStone operates uniquely as a DAO, acquiring a diverse global property portfolio. It blends REITs & PERE funds, bringing it onto the blockchain for enhanced strength.",
    text1: "This innovative approach combines REIT liquidity with PERE growth potential, offering accessible high-value opportunities.",
    text2: ""
  }
];



const Functionality = () => {
  const [selected, setSelected] = useState(1);

  const current = optionDetails.find((opt) => opt.id === selected);


  return (
    <>

      {/* model header */}
      <ModelHeader
        imageSrc="/numbers/four.svg" icon
        label="TOKENOMICS"
        title="YieldStone V2 AI Functionality"
      />


      {/*  top text */}
      <div className="functionality-top-info">
        <p className="functionality-info-text">Real estate will remain a stable anchor, but now it is complemented by a robust ecosystem of GPU-driven compute resources and advanced AI tools. These multiple dimensions reflect the realities of a rapidly evolving economy where data, infrastructure, and intelligence are as critical as physical property.</p>
      </div>


      {/* Topper Option Selector */}
      <div className="func-option-select">
        {options.map((opt) => (
          <div
            key={opt.id}
            className={`option ${selected === opt.id ? 'active' : ''}`}
            onClick={() => setSelected(opt.id)}
          >
            <a href="#">{opt.icon}</a>
            <h1>{opt.title}</h1>
          </div>
        ))}
      </div>



      {/* Main Content */}
      <div className="functionality-card-container">
        {/* Left Card */}
        <div className="functionality-card functionality-left-card">
          <div className="heading">
            <img src={current.icon} alt="icon" className="func-icon" />
            <h1>{current.heading}</h1>
          </div>

          <div className="subheading">{current.subheading}</div>
          <div className="text">{current.text1}</div>
          <div className="text">{current.text2}</div>
        </div>


        {/* Right Card */}
        <div className="functionality-card functionality-right-card">
          <img src="/functionality/func_img.avif" alt="Illustration" className="main-img" />
          <div className="bottom-shadow"></div>
        </div>
      </div>


        {/* Bottom Info Section Below the Cards */}
        <div className="functionality-bottom-info">
        <p className="functionality-info-text">
            <strong>Diverse Exposure:</strong> Gain indirect exposure to real estate, DePIN <br /> infrastructure, and AI services through a single token.
        </p>
        
        <p className="functionality-info-text">
            <strong>Stability and Upside:</strong> Stable revenue from real assets, combined with <br /> high-growth tech markets.
        </p>

        <Button target="_blank"
 href="https://yieldstone.gitbook.io/yieldstone-whitepaper" text={'View Whitepaper'} className="functionality-btn" />

        </div>


    </>
  );
};

export default Functionality;
