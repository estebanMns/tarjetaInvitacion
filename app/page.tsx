"use client";
import Image from "next/image";
import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";



export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  const skipTime = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };
 
  const mapa = () => {
    // Enlace a la ubicación exacta en Pasto, calle 39A
    const MapsUrl = "https://maps.google.com/?q=1.236875,-77.270922";
    window.open(MapsUrl, "_blank");
  };

  const confirmarAsistencia = () => {
    const phoneNumber = "573163512852"; // Tu número de WhatsApp
    const message = "Confirmo asistencia al cumpleaños de Liam Josue";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    // Cambié h-auto por min-h-screen y añadí padding (p-4) para que nada toque los bordes en móvil
    <div className="min-h-screen w-full flex flex-col items-center bg-cover bg-center bg-[url(/media/fondo2.png)] p-4 space-y-10">
      
      {/* CARD PRINCIPAL - Foto y Nombre */}
      <div className="w-full max-w-md flex flex-col items-center bg-white/5  border border-white/40 shadow-2xl rounded-2xl p-6 mt-10">
        <div className="relative w-48 h-48 border-4 border-white/40 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/media/josue.jpeg" 
            alt="Lian" 
            fill 
            className="object-cover"
          />
        </div>
        
        <h1 className="text-dbz-yellow text-stroke-dbz text-5xl md:text-6xl text-center mt-6">
          Liam Josue
        </h1>

        <div className="flex flex-col items-center gap-4 mt-4">
          <p className="text-dbz-yellow text-stroke-dbz text-4xl">Te invito a celebrar </p>
          <span className="text-dbz-yellow text-stroke-dbz text-4xl">mi primer</span>
          <p className=" text-dbz-yellow text-stroke-dbz text-5xl">Añito</p>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center max-w-md bg-white/5  border border-white/40 rounded-2xl p-8 shadow-2xl text-dbz-yellow text-stroke-dbz text-center">
        <audio 
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          src="/media/goku.mp3" 
        />
        
        {/* Controles de Reproducción */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => skipTime(-10)} 
            className="text-white/70 hover:text-white transition-colors"
          >
            <SkipBack size={24} />
          </button>

          <button 
            onClick={togglePlay}
            className="text-yellow-400 hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
          </button>

          <button 
            onClick={() => skipTime(10)} 
            className="text-white/70 hover:text-white transition-colors"
          >
            <SkipForward size={24} />
          </button>
        </div>

        {/* Barra de Progreso */}
        <input 
          type="range"
          value={progress || 0}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-yellow-400"
        />
      </div>

      

      {/* CARD DE INFORMACIÓN - Simplificada para que no se rompa */}
      <div className="w-full max-w-md bg-white/5  border border-white/40 rounded-2xl p-8 shadow-2xl text-dbz-yellow text-stroke-dbz text-center">
        
        <div className="w-48 md:w-64 items-center mx-auto -mt-20">
          <img src="/media/goku.png" alt="goku" className="w-full h-auto" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6 -mt-30">
          <div className="border-r-2 border-dashed border-black/30 ">
            <p className="text-2xl">Domingo</p>
            <p className="text-6xl ">26</p>
            <p className="text-3xl">Abril</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl">Hora</p>
            <p className="text-4xl">02:00</p>
            <p className="text-2xl">PM</p>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-black/20 my-4"></div>

        <h2 className="text-4xl mt-4">Dirección</h2>
        <p className="text-xl mt-2 mb-6">Salón cultural B/ Sol de Oriente</p>
        
        <button 
          onClick={mapa}
          className="w-full py-3 bg-white/30 border border-white/50 rounded-xl shadow-lg active:scale-95 hover:bg-white/40 transition text-2xl"
        >
          📍 Ver Ubicación
        </button>
      </div>

      {/* GALERÍA DE FOTOS */}
      {/*<div className="w-full max-w-md flex flex-col items-center gap-6 p-6 bg-white/5  border border-white/40 rounded-2xl shadow-2xl">*/}
        {/* Cambié las imágenes a w-full para que se adapten al ancho del celular */}
        {/*<img src="/media/lian1.jpeg" alt="Lian 1" className="w-full h-auto object-cover rounded-xl shadow-lg"/>
        <img src="/media/lian2.jpeg" alt="Lian 2" className="w-full h-auto object-cover rounded-xl shadow-lg"/>
      </div> 
      
      {/* ESPACIADOR FINAL */}
      <div className="w-full max-w-md bg-white/5  border border-white/40 rounded-2xl p-8 shadow-2xl text-dbz-yellow text-stroke-dbz text-center">
        <p>¡Te Esperamos!</p>

        <button 
          onClick={confirmarAsistencia}
          className="w-full py-3 bg-white/30 border border-white/50 rounded-xl shadow-lg active:scale-95 hover:bg-white/40 transition text-2xl"
        >
           Confirmar Asistencia
        </button>
      </div>
      
      <div className="w-full max-w-md bg-white/5  border border-white/40 rounded-2xl p-8 shadow-2xl text-dbz-yellow text-stroke-dbz text-center">
          <p className=" text-1xl ">Diseñado por: Esteban Meneses</p>
      <p className=" text-1xl ">Contacto: 3148762586</p>
      </div>
      

    </div>
  );
}