import React from 'react'

const Review
 = () => {
  const reviews = [
    {
      id: 1,
      name: "Bang Upin",
      role: "Pedagang Asongan",
      img: "/images/b1.png", // Background room image
      avatar: "/images/p1.png", // Person's face
      text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      stars: 5
    },
    {
      id: 2,
      name: "Ibuk Sukijan",
      role: "Ibu Rumah Tangga",
      img: "/images/b2.png",
      avatar: "/images/p2.png",
      text: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
      stars: 4
    },
    {
      id: 3,
      name: "Mpok Ina",
      role: "Karyawan Swasta",
      img: "/images/b3.png",
      avatar: "/images/p3.png",
      text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
      stars: 5
    }
  ];

  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Testimonials
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Client Reviews
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-black transition-all">
             <span className="text-2xl">&larr;</span>
          </button>
          <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-black transition-all">
             <span className="text-2xl">&rarr;</span>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((item) => (
              <div key={item.id} className="relative h-[550px] w-full rounded-[30px] overflow-hidden group">
                {/* Background Image */}
                <img 
                  src={item.img} 
                  alt="Room" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-[20px] shadow-lg text-center flex flex-col items-center">
                  {/* Avatar Circle */}
                  <div className="absolute -top-10 w-20 h-20 rounded-full border-[6px] border-white overflow-hidden bg-gray-200">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <p className="text-gray-400 text-xs mb-4 uppercase tracking-wider">{item.role}</p>
                    <p className="text-gray-600 text-sm italic leading-relaxed">
                      "{item.text}"
                    </p>
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < item.stars ? "text-orange-400" : "text-gray-200"}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



export default Review
