"use client"
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { sendFileToDestination,getImageFromDestination } from "./hooks/hookSaveImage";
import Header from "@/components/Header";
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  let [imageConsulted, setImageConsulted] = useState<File | null>(null);
  const [textInput, setTextInput] = useState<string>('');

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      try {
        await sendFileToDestination(selectedImage);
        console.log("Subiendo imagen:", selectedImage.name);
      } catch (error) {
        console.error("Error al subir la imagen:", error);
      }
    } else {
      console.log("No se ha seleccionado ninguna imagen");
    }
  };

  // Asegúrate de implementar la lógica para consultar la imagen
  const handleImageConsult = async () => {
    if(textInput)
      setImageConsulted(await getImageFromDestination(textInput))
    console.log('Consultando imagen con texto:', textInput);
  };

  return (
    <>
    <Header/>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-3xl font-bold mb-4">GeoSnap</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        {selectedImage && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Selected Image Preview:</h2>
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Image"
              width={400}
              height={400}
            />
          </div>
        )}
        <button
          onClick={handleImageUpload}
          className="bg-purple-600 p-2 pl-4 pr-4 m-4 rounded-md"
        >
          Enviar
        </button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <input 
          type="text" 
          className="mb-4 text-black" 
          value={textInput} 
          onChange={handleTextInputChange} 
        />
        {imageConsulted && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Selected Image Preview:</h2>
            <Image
              src={URL.createObjectURL(imageConsulted)}
              alt="Selected Image"
              width={400}
              height={400}
            />
          </div>
        )}
        <button
          onClick={handleImageConsult}
          className="bg-purple-600 p-2 pl-4 pr-4 m-4 rounded-md"
        >
          Consultar Imagen
        </button>
      </div>
      </>
  );
}
