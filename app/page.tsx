"use client";
import Image from "next/image";

export default function Home() {
  const mapa = () => {
    // Asegúrate de usar una URL válida de Google Maps aquí
    const MapsUrl = "https://maps.google.com/?q=Salon+cultural+Sol+de+Oriente+Pasto";
    window.open(MapsUrl, "_blank");
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
          Lian Josue
        </h1>

        <div className="flex flex-row items-center gap-4 mt-4">
          <p className="text-dbz-yellow text-stroke-dbz text-3xl">Cumple</p>
          <span className="text-dbz-yellow text-stroke-dbz text-6xl">1</span>
          <p className="text-dbz-yellow text-stroke-dbz text-3xl">Añito</p>
        </div>
      </div>

      {/* GALERÍA DE FOTOS */}
      <div className="w-full max-w-md flex flex-col items-center gap-6 p-6 bg-white/5  border border-white/40 rounded-2xl shadow-2xl">
        {/* Cambié las imágenes a w-full para que se adapten al ancho del celular */}
        <img src="/media/lian1.jpeg" alt="Lian 1" className="w-full h-auto object-cover rounded-xl shadow-lg"/>
        <img src="/media/lian2.jpeg" alt="Lian 2" className="w-full h-auto object-cover rounded-xl shadow-lg"/>
      </div>

      

      {/* CARD DE INFORMACIÓN - Simplificada para que no se rompa */}
      <div className="w-full max-w-md bg-white/5  border border-white/40 rounded-2xl p-8 shadow-2xl text-dbz-yellow text-stroke-dbz text-center">
        {/* PERSONAJE - Quitamos el margen negativo excesivo */}
        <div className="w-48 md:w-64 items-center mx-auto -mt-20">
          <img src="/media/goku.png" alt="goku" className="w-full h-auto" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6 -mt-30">
          <div className="border-r-2 border-dashed border-black/30 ">
            <p className="text-2xl">Sábado</p>
            <p className="text-6xl ">25</p>
            <p className="text-3xl">Abril</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl">Hora</p>
            <p className="text-4xl">01:00</p>
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
      
      {/* ESPACIADOR FINAL */}
      <div className="h-20"></div>
    </div>
  );
}