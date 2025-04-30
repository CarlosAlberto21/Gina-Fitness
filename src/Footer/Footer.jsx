import React from 'react'

import { FaLocationArrow } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className='bg-[#B76E79] text-white'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='grid md:grid-cols-3 py-5'>
                        <div className='py-8 px-4'>
                            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                                
                                Gianna
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem, suscipit consequuntur minus deserunt ipsa optio ad fugiat cupiditate quae!
                            </p>
                            <br />
                            <div className='flex gap-3 items-center'>
                                <FaLocationArrow />
                                <p>Noida, Uttar Pradesh 201301</p>
                            </div>
                            <div className='flex  gap-3 items-center mt-3'>
                                <FaPhoneAlt />
                                <p>+91 9876543210</p>
                            </div>
                            {/*social handles*/}
                            <div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="">
                                        <FaFacebookF className='text-3xl' />
                                    </a>
                                    <a href="">
                                        <FaInstagram className='text-3xl' />
                                    </a>
                                    <a href="">
                                        <FaTwitter className='text-3xl' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                            <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold text-justify 
                                    sm:text-left mb-3'>Important Links</h1>
                                    <ul className='flex gap-3 flex-col'>
                                        <li>
                                            <a href="">Home</a>
                                        </li>
                                        <li>
                                            <a href="">About</a>
                                        </li>
                                        <li>
                                            <a href="">Services</a>
                                        </li>
                                        <li>
                                            <a href="">Contact</a>
                                        </li>
                                        <li>
                                            <a href="">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer