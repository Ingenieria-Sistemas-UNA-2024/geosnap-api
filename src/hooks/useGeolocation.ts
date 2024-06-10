import { useState, useEffect } from 'react';

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ latitude: null, longitude: null });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { coordinates, error };
};

export default useGeolocation;
