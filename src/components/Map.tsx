import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import getPhotos from "@/lib/getPhotos";
import { Photo } from "@/types/type";
import useGeolocation from "@/hooks/useGeolocation";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const Map = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { coordinates } = useGeolocation();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      const recentPhotos = await getPhotos();
      setPhotos(recentPhotos);
    };
    fetchPhotos();
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD_cXy0RgcLC5VAjc1iAgVCfIjW0YLU_KM",
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
        zoom={15}
        center={{
          lat: coordinates.latitude ?? 9.380168965718807,
          lng: coordinates.longitude ?? -83.69172815398791,
        }}
      >
        {photos.map((photo) => (
          <Marker
            key={photo.photoID}
            position={{
              lat: parseFloat(photo.latitude),
              lng: parseFloat(photo.longitude),
            }}
            onClick={() => setSelectedPhoto(photo)}
          >
            {selectedPhoto && selectedPhoto.photoID === photo.photoID && (
              <InfoWindow>
                <div>
                  <img src={photo.photoURL} alt="Photo" style={{ maxWidth: "200px" }} />
                  <p>Likes: {photo.likes}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;