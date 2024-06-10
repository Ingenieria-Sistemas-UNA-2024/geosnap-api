import React, { useEffect, useState } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import getPhotos from "@/lib/getPhotos"
import { Photo } from "@/types/types"
import useGeolocation from "@/hooks/useGeolocation"

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
}

const Map = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const { coordinates } = useGeolocation()

  useEffect(() => {
    const fetch = async () => {
      const recentPhotos = await getPhotos()
      setPhotos(recentPhotos)
    }
    fetch
  }, [])

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD_cXy0RgcLC5VAjc1iAgVCfIjW0YLU_KM",
  })

  if (loadError) {
    return <div>Error loading maps</div>
  }

  if (!isLoaded) {
    return <div>Loading Maps</div>
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={{ lat: coordinates.latitude ?? 9.380168965718807, lng: coordinates.longitude ?? -83.69172815398791 }}
      >
        {photos.map((photo) => (
          <Marker key={photo.photoID} position={{ lat: Number(photo.latitude), lng: Number(photo.longitude)}} />
        ))}
      </GoogleMap>
    </div>
  )
}

export default Map
