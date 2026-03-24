import React from 'react'

const Hero = () => {
  return (
    <section id='main' className='relative h-screen w-full overflow-hidden'>
      {/* Background Image & Overlay */}
      <img 
        src="/images/bg.png" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
      />
      {/* Subtle Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Content Overlay */}
      <div className="content relative z-10 w-full h-full flex flex-col">
        <nav className='flex justify-between items-center px-10 py-6'>
          {/* Logo */}
          <div className="logo">
            <h1 className='text-white font-bold text-3xl tracking-tighter cursor-pointer'>Ozizs.</h1>
          </div>

          {/* Navigation Links */}
          <div className="links text-white font-medium hidden md:block">
            <ul className='flex gap-10 items-center text-lg'>
              <li className="cursor-pointer hover:text-gray-300 transition-colors">Home</li>
              <li className="cursor-pointer hover:text-gray-300 transition-colors">Products</li>
              <li className="cursor-pointer hover:text-gray-300 transition-colors">Shop</li>
              <li className="cursor-pointer hover:text-gray-300 transition-colors">About us</li>
              <li className="cursor-pointer hover:text-gray-300 transition-colors">Contact</li>
            </ul>
          </div>

          {/* Shop Icon */}
          <div className="shop flex items-center cursor-pointer hover:scale-110 transition-transform">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.3596 8.27L22.0696 5.5C21.6496 2.48 20.2796 1.25 17.3497 1.25H14.9896H13.5097H10.4697H8.98965H6.58965C3.64965 1.25 2.28965 2.48 1.85965 5.53L1.58965 8.28C1.48965 9.35 1.77965 10.39 2.40965 11.2C3.16965 12.19 4.33965 12.75 5.63965 12.75C6.89965 12.75 8.10965 12.12 8.86965 11.11C9.54965 12.12 10.7097 12.75 11.9997 12.75C13.2896 12.75 14.4197 12.15 15.1096 11.15C15.8797 12.14 17.0696 12.75 18.3096 12.75C19.6396 12.75 20.8396 12.16 21.5896 11.12C22.1896 10.32 22.4597 9.31 22.3596 8.27Z" fill="white"></path> 
              <path d="M11.3491 16.6602C10.0791 16.7902 9.11914 17.8702 9.11914 19.1502V21.8902C9.11914 22.1602 9.33914 22.3802 9.60914 22.3802H14.3791C14.6491 22.3802 14.8691 22.1602 14.8691 21.8902V19.5002C14.8791 17.4102 13.6491 16.4202 11.3491 16.6602Z" fill="white"></path> 
              <path d="M21.3709 14.3981V17.3781C21.3709 20.1381 19.1309 22.3781 16.3709 22.3781C16.1009 22.3781 15.8809 22.1581 15.8809 21.8881V19.4981C15.8809 18.2181 15.4909 17.2181 14.7309 16.5381C14.0609 15.9281 13.1509 15.6281 12.0209 15.6281C11.7709 15.6281 11.5209 15.6381 11.2509 15.6681C9.47086 15.8481 8.12086 17.3481 8.12086 19.1481V21.8881C8.12086 22.1581 7.90086 22.3781 7.63086 22.3781C4.87086 22.3781 2.63086 20.1381 2.63086 17.3781V14.4181C2.63086 13.7181 3.32086 13.2481 3.97086 13.4781C4.24086 13.5681 4.51086 13.6381 4.79086 13.6781C4.91086 13.6981 5.04086 13.7181 5.16086 13.7181C5.32086 13.7381 5.48086 13.7481 5.64086 13.7481C6.80086 13.7481 7.94086 13.3181 8.84086 12.5781C9.70086 13.3181 10.8209 13.7481 12.0009 13.7481C13.1909 13.7481 14.2909 13.3381 15.1509 12.5981C16.0509 13.3281 17.1709 13.7481 18.3109 13.7481C18.4909 13.7481 18.6709 13.7381 18.8409 13.7181C18.9609 13.7081 19.0709 13.6981 19.1809 13.6781C19.4909 13.6381 19.7709 13.5481 20.0509 13.4581C20.7009 13.2381 21.3709 13.7181 21.3709 14.3981Z" fill="white"></path> 
            </svg>
          </div>
        </nav>

        {/* Hero Text Section */}
        <div className="grow flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
               Make your Interior More <span className="italic font-serif">Minimalistic</span> & Modern
             </h2>
             <p className='text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed opacity-90'>
               Turn your room with Panto into a lot more minimalist and modern with ease and speed.
             </p>
             <button className="mt-10 px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all uppercase tracking-widest text-xs">
               Explore Collection
             </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero