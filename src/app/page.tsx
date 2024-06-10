"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Login from "@/components/Login";
import Welcome from "@/components/Welcome";
import signInUser from "@/lib/signInUser";

export default function Home() {
  const [showMap, setShowMap] = useState(false);
  const [showLoginComponent, setShowLoginComponent] = useState(false);

  const handleLogin = async(email:string, password: string) => {
    try {
    await signInUser(email, password)
    setShowMap(true);
    setShowLoginComponent(true);
    } catch (error) {
      alert("Ocurrio un error al validar usuario")
    }
  };

  const handleShowLogin = () => {
    setShowLoginComponent(true);
  };

  return (
    <>
      <Header handleShowLogin={handleShowLogin} />
      {showLoginComponent ? (
        showMap ? (
          <Map />
        ) : (
          <Login onLogin={handleLogin} />
        )
      ) : (
        <Welcome />
      )}
      <Footer />
    </>
  );
}