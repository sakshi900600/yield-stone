import React from 'react'
import Community_card from "./pages/Community/Community"
import Footer from './components/Footer/Footer'
import Roadmap from './pages/Phases/Roadmap'
import DaoSection from './pages/Model/DaoSection'
import TeamSection from './pages/Team/Team'
import About from './pages/About/About'
import Technology from './pages/Technology/Technology'
import AiAgentsCard from './pages/Technology/Technology'
import FunctionalityCard from './pages/Functionality/Functionality'
import LiquidityCard from './pages/Functionality/Functionality'
import FeatureSlider from './components/FeatureScroll/HomeAfter'
import Benefits_card from './components/Benefits/Benefits_card'
import Card from './components/Lotte-Animation/Card'
import Navbar from './components/Navbar/Navbar'



import AOS from 'aos';
import 'aos/dist/aos.css';
import Usecases from './pages/Usecase/Usecases'


const App = () => {
  return (
   <>



    <Navbar />
    {/* <Hero /> */}

    <div style={{paddingTop: '20vh'}}>
      <FeatureSlider />
    </div>

    {/* <FeatureSlider /> */}
    <About />
   <Benefits_card />
   <Technology />
   <FeatureSlider stripePosition="bottom" />
    <FunctionalityCard />
    <TeamSection />
    <DaoSection />
   <Usecases />
   <Community_card />
    <Roadmap />

    <Footer />

    {/* <Roadmap /> */}
   
    {/* <LiquidityCard /> */}


    {/* testing lottie animation ----------------------- */}
    {/* <Card /> */}
    

      
      

      

   
   </>
  )
}

export default App
