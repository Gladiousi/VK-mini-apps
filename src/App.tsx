import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-black'>
      <h1 className='text-white'>Hello, React!!!!</h1>
      <button className='bg-blue-500 py-2 px-4 rounded-lg'>Подписаться</button>
    </div>
  );
};

export default App;
