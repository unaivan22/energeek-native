import React, { useEffect, useState } from 'react';
import Jumbotron from './structure/Jumbotron'
import Services from './structure/Services'
import WhyChooseUs from './structure/WhyChooseUs'
import Portfolios from './structure/Portfolios'
import Teams from './structure/Teams'
import Clients from './structure/Clients'
import Counter from './structure/Counter'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './utils/Header';
import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
  useEffect(() => {
    AOS.init();
    }, []);
  return (
    <div>
      <Header />
      {/* <div data-aos='fade-up'> */}
        <Jumbotron />
      {/* </div> */}
      
      {/* <div data-aos='fade-up'> */}
        <Clients />
      {/* </div> */}
      
      <div data-aos='fade-up'>
        <Services />
      </div>
      
      <div data-aos='fade-up'>
        <WhyChooseUs />
      </div>
      
      <div data-aos='fade-up'>
        <Portfolios />
      </div>
      
      <div data-aos='fade-up'>
        <Counter />
      </div>
      
      <div data-aos='fade-up'>
        <Teams />
      </div>
      
      <div className='fixed bottom-12 right-12'>
        <ModeToggle />
      </div>
    </div>
  )
}
