import { Photo } from "@/types/types"

const getPhotos = async (): Promise<Photo[]> => {
  try {
    const res: Response = await fetch(
      `https://759f8jxwv2.execute-api.us-east-1.amazonaws.com/v1/photos/recent`
    );
    if (!res.ok) {
      return Promise.reject("Ocurrio un problema cargando los imagenes en el mapa");
    }
    const data: Photo[] = await res.json();
    return data;
  } catch (error: any) {
    return Promise.reject("Ocurrió un error al obtener las imágenes del mapa");
  }
};

export default getPhotos;