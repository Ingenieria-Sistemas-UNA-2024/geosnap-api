"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Login from "@/components/Login";
import Welcome from "@/components/Welcome";

export default function Home() {
  const [showMap, setShowMap] = useState(false);
  const [showLoginComponent, setShowLoginComponent] = useState(false);

  const handleLogin = () => {
    setShowMap(true);
    setShowLoginComponent(true);
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