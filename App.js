import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./IMG_20250716_183638_614.jpg" ;
import { FaListUl } from "react-icons/fa";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";

import photo1 from './logo.svg';
import photo_10_2025_07_16_12_59_09 from './photo_10_2025-07-16_12-59-09.jpg';
import photo_9_2025_07_16_12_59_09 from './photo_9_2025-07-16_12-59-09.jpg';


function App() {
   const pictures =[
      {
         src:'./IMG_20250716_183638_614.jpg',
      },
      {
         url:{photo1},
         
      },
      {
         src:'./photo_10_2025-07-16_12-59-09.jpg',
         
      },
      {
         src:'./photo_11_2025-07-16_12-59-09.jpg',
         
      },
      {
         src:'./photo_12_2025-07-16_12-59-09.jpg',
        
      },
      
         ]
         
  const [pipcture,setPpicture] = useState([]);
  return (
     <div className='max-w-screen m-auto w-full'>
      
        <div className='flex justify-start items-center p-8 shadow-lg rounded-lg w-full'>
          <FaListUl className=' text-2xl transition-in-out duration-300 hover:scale-125 ' />        
        </div>
        <div className='flex justify-center items-center p-6  rounded-lg bg-gradient-to-l from-transparent to-gray-200 w-full '>
           <img url='./IMG_20250716_183638_614.jpg' alt="(عکس)سایت راه اندازی شد" className='w-1/2 h-1/2' />
        </div>
        <div className='p-20 flex justify-start items-center shadow-lg rounded-lg space-between w-full'>
          
          <p className='text-xl text-gray-500 p-20'><span className='text-6xl font-bold font-sans text-black '>درباره ما</span><br/>شسیششسیشسیشسیشسیشسیشسیشسیشس<br/>شسیشسیشسیشسیشسیشسیشسیa<br/>شسیشسیشسیشیشسیشسیشیشسیشسیشسی</p>        
          <div  className='p-40 transition-in-out duration-300 hover:scale-105 rounded-lg w-full h-full'alt='asd'/>
          <div style={{backgroundImage: `src={(photo1)}`}} className='p-40 transition-in-out duration-300 hover:scale-105 rounded-lg'alt='asd'><img src='./phpto.png' alt="asd" /></div>
          <div style={{backgroundImage: `url=''`}} className='p-40 transition-in-out duration-300 hover:scale-105 rounded-lg'alt='asd'/>
          <div style={{backgroundImage: `url(${pictures[1].url})`}} className='p-40 transition-in-out duration-300 hover:scale-105 rounded-lg'alt='asd'/>
          
        </div>
        <div className='max-w-[1400px] m-auto  h-[780px] w-full py-16 px-4 relative group transition-in-out duration-300 '>
         <span className='text-4xl font-bold font-sans text-black text-center bg-green-300 rounded-full w-[800px] h-[100px] flex justify-center items-center -translate-x-200px mx-auto'>گالری تصاویر</span>
            <div style={{backgroundImage: `url(${pictures[1].url})`}}className='w-full h-full rounded-2xl bg-center bg-cover duration-500 ' alt='asd' >
               <div  className='absolute top-[50%] hidden transition-in-out duration-300 group-hover:block -translate-y-[-50%] -translate-x-0 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  '>
                  <BsChevronLeft size={30} />
               </div>
               <div className='absolute top-[50%] hidden group-hover:block -translate-y-[-50%] -translate-x-0 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                  <BsChevronRight size={30} />
               </div>
            </div>
        </div>
        

     </div>
  )
}
   export default App;
   