import React from 'react'
import DouniaPic from '../../assets/img/dounia_app5.png'

const Step1 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 relative">
    {/* Text Content */}
    <div className="text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-red-600">ORDERBELL</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 font-medium max-w-lg mx-auto">
        Get your restaurant's dashboard and manage it effortlessly.
      </p>
    </div>
  
    {/* Positioned Image */}
    <div className="absolute right-4 bottom-0 md:right-8 md:bottom-0">
      <img
        src={DouniaPic}
        alt="Dounia"
        className="w-20 md:w-32 lg:w-60 "
      />
    </div>
  </div>

  )
}

export default Step1
