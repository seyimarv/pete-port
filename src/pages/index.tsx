
import { theme } from '@themes/theme';
import type { NextPage } from 'next';
import About from '../components/About';
import BuyTicket from '../components/BuyTickets';
import Contact from '../components/Contact';
import { Faq } from '../components/Faq';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';


const Home: NextPage = () => {
  return (
    <>
     <Header />
     <HeroSection />
     <About />
     <BuyTicket />
     <Faq />
     <Contact />
    </>
  )
}

export default Home;
