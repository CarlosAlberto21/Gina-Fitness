import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6'
import { GiPlantsAndAnimals, GiPlantSeed } from 'react-icons/gi'
import { PiNuclearPlant } from 'react-icons/pi'
import img1 from "../assets/fitt3.png"
import img2 from "../assets/runner.png"
import img3 from "../assets/fitnessF.png"
import { IoFitnessSharp } from "react-icons/io5";

const ServiceData = [
    {
    title: "FLORA",
    content: "CUIDAR" ,
    description: "Used for astronomical observations capturing stunning images of the universe",
    icon: img1 ,
    aosDeplay: "300",

    },

    {
        title: "FAUNA",
        content: "PROTEJER" ,
        description: "Used for astronomical observations capturing stunning images of the universe",
        icon: img1,
        aosDeplay: "500",
        
        },

        {
            title: "AMBIENTE",
            content: "SANAR" ,
            description: "Used for astronomical observations capturing stunning images of the universe",
            icon: img1,
            aosDeplay: "700",
            
            }
]

const Services = () => {
  return (
    <div className='bg-white py-8 z-[50] relative'>
        
            <h1 className='text-4xl xl:text-5xl font-bold text-pink-500 text-center mb-3.5'>Services</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-3 gap-8 ml-4 px-5'>

                <div className='py-10 p-5 bg-gradient-to-br from-pink-300 to-black
                text-white rounded-3xl relative h-[320px] flex items-end
                transition-transform duration-300 ease-in-out transform hover:scale-105'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Personalized</p>
                            <p className='text-2xl  font-semibold'>Training</p>
                            <p className='text-4xl xl:text-5xl text-pink-400 opacity-50 font-bold'>Plans</p>
                        </div>
                    </div>
                    <img src={img1} alt="" className='w-[90px] absolute
                    bottom-0 right-0 
                  '/>
                </div>

                <div className='py-10 pl-5 bg-gradient-to-br from-pink-300 to-black
                text-white rounded-3xl relative h-[320px] flex items-end
                transition-transform duration-300 ease-in-out transform hover:scale-105'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Personalized</p>
                            <p className='text-2xl  font-semibold'>Training</p>
                            <p className='text-4xl xl:text-5xl text-pink-400 opacity-50 font-bold'>Sessions</p>
                        </div>
                    </div>
                    <img src={img2} alt="" className='w-[175px] absolute
                    bottom-0 right-0'/>
                </div>

                <div className='py-10 pl-5 bg-gradient-to-br from-pink-300 to-black
                text-white rounded-3xl relative h-[320px] flex items-end
                transition-transform duration-300 ease-in-out transform hover:scale-105'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Basic</p>
                            <p className='text-2xl  font-semibold'>Nutrition</p>
                            <p className='text-4xl xl:text-5xl text-pink-400 opacity-50 font-bold'>Guidance</p>

                        </div>
                    </div>
                    <img src={img3} alt="" className='w-[130px] absolute
                    bottom-0 right-0'/>
                </div>

            </div>
            
           
        </div>



    
  )
}

export default Services