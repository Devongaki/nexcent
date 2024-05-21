import React from 'react';
import "./Home.css"
import Hero from '../../Pages/Home/HeroSection/Hero';
import Client from '../../Pages/Home/ClientSection/Client';
import Community from '../../Pages/Home/Community/Community';

function Home() {
  return (
    <main className='main_section'>
      < Hero />
      < Client />
      < Community />
    </main>
  )
}

export default Home