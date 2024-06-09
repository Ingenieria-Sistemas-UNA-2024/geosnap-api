import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 9.380168965718807,
  lng: -83.69172815398791,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD_cXy0RgcLC5VAjc1iAgVCfIjW0YLU_KM'
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;