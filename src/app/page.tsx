"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import {
  sendFileToDestination,
  getImageFromDestination,
} from "./hooks/hookSaveImage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  let [imageConsulted, setImageConsulted] = useState<File | null>(null);
  const [textInput, setTextInput] = useState<string>("");

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
    if (textInput) setImageConsulted(await getImageFromDestination(textInput));
    console.log("Consultando imagen con texto:", textInput);
  };

  return (
    <>
      <Header />
      
      <Footer />
    </>
  );
}
