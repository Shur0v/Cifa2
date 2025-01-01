import React from 'react';
import Hero from "../components/home/Hero"
import Accreditation from "../components/home/Accreditation"
import Slider from "../components/home/Slider"
import Instructor from "../components/home/Instructor"
import Online from "../components/home/Online"
import Blogs from "../components/home/Blogs"
import Cifa from "../components/home/Cifa"

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Accreditation />
      <Instructor/>
      <Online/>
      <Blogs/>
      <Cifa/>
    </div>
  )
}

export default Home