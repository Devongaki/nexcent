import React from 'react';
import "./Home.css"
import Hero from '../../Pages/Home/HeroSection/Hero';
import Client from '../../Pages/Home/ClientSection/Client';
import Community from '../../Pages/Home/Community/Community';
import UnlockSection from './UnlockSection/UnlockSection';
import Achievements from './Achievements/Achievements';

function Home() {
  return (
    <main className='main_section'>
      < Hero />
      < Client />
      < Community />
      < UnlockSection />
      < Achievements />
    </main>
  )
}

export default Home