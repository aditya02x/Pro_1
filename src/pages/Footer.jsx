import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-10 md:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tighter text-gray-900">Ozizs.</h2>
          <p className="text-gray-500 leading-relaxed">
            The advantage of hiring a workspace with us is that it gives you service throughout the day and night with high-speed internet.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-orange-500 font-bold mb-6">Services</h4>
          <ul className="flex flex-col gap-4 text-gray-600 font-medium">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Email Marketing</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Campaigns</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Branding</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Offline</li>
          </ul>
        </div>

        {/* Column 3: Furniture */}
        <div>
          <h4 className="text-orange-500 font-bold mb-6">Furniture</h4>
          <ul className="flex flex-col gap-4 text-gray-600 font-medium">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Beds</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Chair</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">All Furniture</li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h4 className="text-orange-500 font-bold mb-6">Follow Us</h4>
          <ul className="flex flex-col gap-4 text-gray-600 font-medium">
            <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
              <span>Facebook</span>
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
              <span>Twitter</span>
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
              <span>Instagram</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>Copyright © 2026 Ozizs. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="cursor-pointer hover:text-gray-600">Terms & Conditions</span>
          <span className="cursor-pointer hover:text-gray-600">Privacy Policy</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer