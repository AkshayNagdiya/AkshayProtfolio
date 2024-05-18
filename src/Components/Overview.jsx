import React, { useEffect } from 'react'
import webdev from '../assets/web-dev.png'
import backend from '../assets/api.png'
import frontend from '../assets/frontend.png'
import fullstack from '../assets/react-native.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Overview = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div  className='overview h-full px-10 lg:px-60 py-10 md:py-40 md:px-20' id='Overview'  data-aos="fade-right">
      <p className='text-gray-300'>INTRODUCTION</p>
      <h1 className='text-white text-4xl md:text-[60px] py-2 font-extrabold'>Overview.</h1>
      <p className='text-gray-300 text-sm md:text-xl lg:pt-10'>I am a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js. I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>

      <div className='mt-20 flex justify-center sm:justify-normal flex-wrap gap-5'>

        <div style={{ position: "relative" , animation: "mymove 3s infinite"}} class="w-full xs:w-[250px] sm:w-[210px]" data-aos="fade-right" data-aos-delay="200">
          <div class="w-full  p-[1px] rounded-[20px] " style={{opacity: 1, transform: "none"}}>
          <div class="bg-[#161b22] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" >
          <img alt="Web Developer" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="w-18 h-18 object-contain" style={{color:'transparent'}} src={webdev}/>
          <h3 class="text-white text-[20px] font-bold text-center">Web Developer</h3></div></div>
        </div>
        <div style={{ position: "relative" , animation: "mymove2 3s infinite"}} class="w-full xs:w-[250px] sm:w-[210px] " data-aos="fade-right" data-aos-delay="300">
          <div class="w-full  p-[1px] rounded-[20px] " style={{opacity: 1, transform: "none"}}>
          <div class="bg-[#161b22] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img alt="Web Developer" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="w-18 h-18 object-contain" style={{color:'transparent'}} src={frontend}/>
          <h3 class="text-white text-[20px] font-bold text-center">Front-End Developer</h3></div></div>
        </div>
        <div style={{ position: "relative" , animation: "mymove3 3s infinite"}}  class="w-full xs:w-[250px] sm:w-[210px] " data-aos="fade-right" data-aos-delay="400">
          <div class="w-full  p-[1px] rounded-[20px] " style={{opacity: 1, transform: "none"}}>
          <div class="bg-[#161b22] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img alt="Web Developer" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="w-18 h-18 object-contain" style={{color:'transparent'}} src={backend}/>
          <h3 class="text-white text-[20px] font-bold text-center">Back-End Developer</h3></div></div>
        </div>
        <div style={{ position: "relative" , animation: "mymove4 3s infinite"}}  class="w-full xs:w-[250px] sm:w-[210px] " data-aos="fade-right" data-aos-delay="500">
          <div class="w-full  p-[1px] rounded-[20px] " style={{opacity: 1, transform: "none"}}>
          <div class="bg-[#161b22] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img alt="Web Developer" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="w-18 h-18 object-contain" style={{color:'transparent'}} src={fullstack}/>
          <h3 class="text-white text-[20px] font-bold text-center">Full-Stack Developer</h3></div></div>
        </div>
      </div>
    </div>

  )
}

export default Overview;
