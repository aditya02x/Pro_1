import React from 'react'

const More = () => {
  return (
    <section className="py-20 px-10 md:px-20 bg-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        
        {/* Left Side: Image with decorative background shapes */}
        <div className="relative">
          {/* Decorative light gray background block (The "blob" behind) */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-gray-50 rounded-[40px] -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-80 bg-gray-50 rounded-[40px] -z-10"></div>

          {/* Main Image Container */}
          <div className="relative rounded-tl-[100px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] overflow-hidden shadow-2xl">
            <img 
              src="/images/bc.png" // ADD YOUR IMAGE LINK HERE
              alt="Premium Interior" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-5">
          <h4 className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">
            Experiences
          </h4>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We Provide You The <br /> Best Experience
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
            You don't have to worry about the result because all of these 
            interiors are made by people who are professionals in their fields 
            with an elegant and luxurious style and with premium quality materials.
          </p>

          <div className="mt-4">
            <a 
              href="#" 
              className="group flex items-center gap-3 text-orange-500 font-semibold hover:gap-5 transition-all duration-300"
            >
              More Info 
              <span className="text-2xl transition-transform group-hover:translate-x-2">
                &rarr;
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default More