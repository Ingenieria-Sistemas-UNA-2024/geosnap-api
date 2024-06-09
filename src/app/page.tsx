"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import {
  sendFileToDestination,
  getImageFromDestination,
} from "./hooks/hookSaveImage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Login from "@/components/Login";
export default function Home() {
  const [showMap, setShowMap] = useState(false);

  const handleLogin = () => {
    setShowMap(true);
  };

  return (
    <>
      <Header />
      {showMap ? <Map /> : <Login onLogin={handleLogin} />}
      <Footer />
    </>
  );
}
