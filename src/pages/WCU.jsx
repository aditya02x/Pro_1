import React from 'react'

const WCU = () => {
  const features = [
    {
      title: "Luxury facilities",
      description: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
    },
    {
      title: "Affordable Price",
      description: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
    },
    {
      title: "Many Choices",
      description: "We provide many unique work space choices so that you can choose the workspace to your liking.",
    }
  ];

  return (
    <section className="py-24 px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
        
        {/* Main Title Column */}
        <div className="lg:pr-10">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Why <br /> Choosing Us
          </h2>
        </div>

        {/* Features Columns */}
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              {feature.description}
            </p>
            <div className="mt-2">
              <a 
                href="#" 
                className="group flex items-center gap-3 text-orange-500 font-semibold text-sm transition-all hover:gap-5"
              >
                More Info 
                <span className="text-xl">&rarr;</span>
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default WCU