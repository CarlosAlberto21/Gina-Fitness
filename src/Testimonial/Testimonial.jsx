import React, {useRef} from 'react';
import img1 from "../assets/fitnessF.png";
import img2 from "../assets/runner.png";
import img3 from "../assets/fitt3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const testimonialData = [
  {
      id: 1,
      name: "Carlos",
      job: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem?",
      img: img1
  },
  {
      id: 2,
      name: "Ginna",
      job: "Designer",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem?",
      img: img2
  },
  {
      id: 3,
      name: "Paris",
      job: "Developer",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem?",
      img: img3
  },
];


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false
};

const Testimonial = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_360dmok',
      'template_4uyr9ss',
      form.current,
      'XH8e2pm7Dzybz6vy8'
    )
    .then((result) => {
        console.log(result.text);
        alert("Mensaje enviado con éxito");
    }, (error) => {
        console.log(error.text);
        alert("Error al enviar el mensaje");
    });

    e.target.reset();
  }
  return (
    <div className='bg-white py-10'>
      <h1 className='text-3xl font-bold text-pink-500 p-4 mb-4 text-center'>Contacto & Testimonios</h1>

      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-4  lg:px-10'>
        
        {/* Formulario */}
        <div className='flex flex-col gap-6 p-6 w-full max-w-lg border-1 ml-3 border-pink-300 shadow-lg bg-gradient-to-r from-white to-pink-50 shadow-gray-300 rounded-2xl'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='mb-4'>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border-b-2 border-b-pink-700 px-4 py-2 rounded mt-1 focus:outline-none focus:bg-gradient-to-r focus:from-pink-300 via-pink-300 to-pink-400"
                placeholder="Your Name"
              />
            </div>

            <div className='mb-4'>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border-b-2 border-b-pink-700 px-4 py-2 rounded mt-1 focus:outline-none focus:bg-gradient-to-r focus:from-pink-300 via-pink-300 to-pink-400"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div className='mb-4'>
              <label className="block font-medium">Number</label>
              <input
                type="text"
                name="phone"
                className="w-full border-b-2 border-b-pink-700 px-4 py-2 rounded mt-1 focus:outline-none focus:bg-gradient-to-r focus:from-pink-300 via-pink-300 to-pink-400"
                placeholder="Number"
              />
            </div>

            <div className='mb-4'>
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                rows="4" 
                className="w-full border-b-2 border-b-pink-700 px-4 py-2 rounded mt-1 focus:outline-none focus:bg-gradient-to-r focus:from-pink-300 via-pink-300 to-pink-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
            >
              Send
            </button>
          </form>
        </div>
        
        {/* Testimonios */}
        <div className='w-full lg:w-1/2'>
          <div data-aos="zoom-in" data-aos-duration="300" className='grid grid-cols-1 gap-8 max-w-[400px] mx-auto'>
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className='my-6'>
                    <div className='flex items-center justify-center flex-col gap-4 text-center shadow-lg mx-4 rounded-xl bg-gradient-to-r from-white to-pink-50 shadow-gray-300 bg-primary/10 relative p-4'>
                      <img src={img} alt="" className='rounded-full block mx-auto w-20 h-20' />
                      <p className='text-gray-500 text-sm'>{text}</p>
                      <h1 className='font-bold text-xl text-pink-600'>{name}</h1>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonial;