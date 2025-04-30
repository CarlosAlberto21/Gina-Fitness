import React from 'react'

const Navbar = () => {
  return (
    < div className=' top-0 left-0 w-full z-50 bg-pink-400 backdrop-blur-sm
    py-4 sm:py-4 '>
       
            <div className='flex  justify-between items-center'>
                <div style={{ fontFamily: "'Pacifico', cursive" }} className="text-3xl text-center text-white">
                   
                   <span>Gianna</span>
                </div>
                <div className='text-white flex items-center gap-4'>
                  <ul className='flex items-center gap-6 text-xl py-4 sm:py-0'>
                    <li className='hover:text-green-400  cursor-pointer '>Menu</li>
                    <li className='hover:text-green-400  cursor-pointer'>Sobre Nosotros</li>
                    <li className='hover:text-green-400  cursor-pointer'>Contacto</li>
                    
                    
                  </ul>                 
                </div>
            </div>

        </div>
    
  )
}

export default Navbar