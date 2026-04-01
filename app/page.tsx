"use client";

import Image from "next/image";

export default function Home() {

  {/* esta esla funcion para que funcione el boton de la ubiaciacion del lugar del evento */}
  const mapa = () => {
    const MapsUrl = "https://www.google.com/maps/search/?api=1&query=calle+39A+pasto+colombia";
    window.open(MapsUrl, "_blank");
  };

  return (
    <div className="h-auto w-full flex flex-col items-center justify-center bg-contain bg-[url(/media/fondo.png)] ">
      {/* esta card es para la foto del bebe */}
      <div className="w-auto h-full flex flex-col bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl rounded-xl text-[100px] items-center justify-center mt-10 overflow-hidden relative">
        {/* aqui esta la foto del bebe */}
        <img src="/media/josue.jpeg" alt="Lian" className="flex object-cover rounded-xl w-[400px] h-[400px] border border-white/40 mt-10" />
        
        {/* procedemos a realizar la card del nombre y los años que cumple el bebe */}
        <div className="h-auto w-full flex rounded-xl border-[var(--dbz-outline)]  text-dbz-yellow text-stroke-dbz text-[74px] items-center justify-center p-10">Lian Josue</div>

        {/* procedemos a realizar la card de los años que cumple el bebe */}
      <div className="flex flex-row ites-center justify-center items-end gap-15 -mt-20 p-10 ">
          <p className="text-dbz-yellow text-stroke-dbz text-[64px]">Cumple</p>
          <p className="text-dbz-yellow text-stroke-dbz text-[120px]">1</p>
          <p className="text-dbz-yellow text-stroke-dbz text-[64px]">Añito</p>
      </div>
      </div>
      
      
      {/* procedemos a mostrar las fotos del bebe */}
      <div className="w-auto h-full flex flex-col items-center justify-center gap-10 mt-20 border border-white/40 rounded-xl p-10 bg-white/20 backdrop-blur-md shadow-2xl">
        <img src="/media/lian1.jpeg" alt="fotos Lian1" className="w-[500px] h-[500px] object-cover rounded-xl"/>
        <img src="/media/lian2.jpeg" alt="fotos Lian2" className="w-[500px] h-[500px] object-cover rounded-xl"/>
      </div>

      <div className="flex items-center justify-center -mt-70">
        <img src="/media/goku.png" alt="goku" />
      </div>

       {/* realizamos una card con la informacion del dia la hora y lugar del evento */}
      <div className="w-auto h-full flex flex-col rounded-xl text-dbz-yellow text-stroke-dbz -mt-150 border border-white/40 rounded-xl p-10 bg-white/20 backdrop-blur-md shadow-2xl">
        
        <p className="flex -translate-x-60 -translate-y-30 text-[90px] rotate-270">Abril</p>
        <p className="flex translate-x-25 -translate-y-40 text-[50px]">Sabado</p>
        <p className="flex translate-x-25 -translate-y-45 text-[180px]">25</p>
        <p className="flex translate-x-100 -translate-y-126 text-[50px]">Hora</p>
        <p className="flex translate-x-90 -translate-y-120 text-[100px]">01:00</p>
      
        <div className="flex border-dashed border-black/40 border-t-4 -mt-60 -translate-y-50"></div>  
        <div className="w-73 flex rotate-90 border-dashed border-black/40 border-t-4 translate-x-45 -translate-y-90"></div>
        <p className="flex translate-x-10 -translate-y-50 text-[120px]">Dirección</p>
        <p className="flex text-[40px] translate-x-1 -translate-y-50">Salon cultural B/ Sol de Oriente</p>
        {/* aqui se crea el boton para que rediriga a la ubiacaion del lugar del evento por medi de google maps */}
        <button 
          onClick={mapa}
          className="w-60 flex text-[20px] items-center justify-center border border-white/40 rounded-xl p-2 bg-white/20 backdrop-blur-md shadow-2xl active:scale-95 hover:bg-white/30 transition-all duration-200 text-dbz-yellow text-stroke-dbz translate-x-40 -translate-y-50 cursor-pointer mt-10"
        >📍Ver Ubicación</button>
      </div>
      
      {/* esta es la card final de te esperamos*/}
      <div className="w-auto h-full flex flex-col items-center justify-center text-dbz-yellow text-stroke-dbz border border-white/40 rounded-xl bg-white/20 backdrop-blur-md shadow-2xl mt-20">
        
        <div className="flex border-dashed border-black/40 border-t-4 -mt- -translate-y-"></div> 
      </div> 
      
    </div>
  );
}
