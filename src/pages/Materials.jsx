import React from 'react'

const Materials = () => {
  return (
    <section className="py-20 px-10 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <h4 className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">
            Materials
          </h4>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Very Serious <br /> Materials For Making <br /> Furniture
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-md">
            Because panto was very serious about designing furniture for our 
            environment, using a very expensive and famous capital but at a 
            relatively low price.
          </p>

          <div className="mt-2">
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

        {/* Right Side: Staggered Image Grid */}
        <div className="relative order-1 lg:order-2 grid grid-cols-2 gap-4 items-end">
           {/* Decorative background shape */}
           <div className="absolute top-1/2 -right-20 w-80 h-80 bg-gray-50 rounded-[40px] -z-10 transform -translate-y-1/2"></div>

           {/* Column 1: Two stacked smaller images */}
           <div className="flex flex-col gap-4">
              <img 
                src="/images/m1.png" // Small Image Top Left
                alt="Material Detail 1" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="/images/m2.png" // Small Image Bottom Left
                alt="Material Detail 2" 
                className="w-full h-72 object-cover rounded-2xl shadow-lg"
              />
           </div>

           {/* Column 2: One large tall image */}
           <div className="h-full">
              <img 
                src="/images/m3.png" // Large Image Right
                alt="Material Feature" 
                className="w-full h-[500px] object-cover rounded-tl-[100px] rounded-br-[40px] rounded-tr-2xl rounded-bl-2xl shadow-2xl"
              />
           </div>
        </div>

      </div>
    </section>
  )
}

export default Materials