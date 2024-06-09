import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Geo-Snap</h1>
        <p className="text-lg mb-8">Captura momentos inolvidables con nuestra aplicación de geolocalización.</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Utilizar Geo-Snap
        </button>
      </div>
    </header>
  );
};

export default Header;