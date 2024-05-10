import React from 'react';
import "./Home.css"
import Hero from '../../HeroSection/Hero';
import Client from '../../ClientSection/Client';
import Community from '../../Community/Community';

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