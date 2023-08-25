import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to Street Food Delights!</h1>
        <p className="text-gray-600 mb-8">Share your favorite street food experiences with us.</p>
        <div className="mb-4">
        
        </div>
        <p className="mb-2">Location: Street Name, City</p>
        <p className="mb-2">Price: $5.99</p>
        <p className="mb-4">Opinion: Delicious and spicy!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Share Your Food
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
