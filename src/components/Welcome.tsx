import React from 'react';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-[#693CA5]">¡Bienvenido a Geo-Snap!</h1>
      <p className="text-lg mb-8">
        Comparte fotos en tiempo real con geolocalización. Explora, conecta y comparte momentos especiales al instante.
      </p>
    </div>
  );
};


export default Welcome;