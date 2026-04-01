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
      <div className="w-auto h-full flex flex-col bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl rounded-xl text-[100px] items-center justify-center mt-10 ">
        {/* aqui esta la foto del bebe */}
        <img src="/media/josue.jpeg" alt="Lian" className="flex object-cover rounded-xl w-[200px] h-[200px] border border-white/40 mt-10" />
        
        {/* procedemos a realizar la card del nombre y los años que cumple el bebe */}
        <div className="h-auto w-full flex rounded-xl  text-dbz-yellow text-stroke-dbz text-7xl items-center justify-center p-10">Lian Josue</div>

        {/* procedemos a realizar la card de los años que cumple el bebe */}
      <div className="flex flex-row ites-center justify-center items-end gap-10 -mt-20 p-10 ">
          <p className="text-dbz-yellow text-stroke-dbz text-5xl">Cumple</p>
          <p className="text-dbz-yellow text-stroke-dbz text-5xl">1</p>
          <p className="text-dbz-yellow text-stroke-dbz text-5xl">Añito</p>
      </div>
      </div>
      
      
      {/* procedemos a mostrar las fotos del bebe */}
      <div className="w-auto h-full flex flex-col items-center justify-center gap-10 mt-20 border border-white/40 rounded-xl p-10 bg-white/20 backdrop-blur-md shadow-2xl">
        <img src="/media/lian1.jpeg" alt="fotos Lian1" className="w-[390px] h-[400px] object-cover rounded-xl"/>
        <img src="/media/lian2.jpeg" alt="fotos Lian2" className="w-[390px] h-[400px] object-cover rounded-xl"/>
      </div>

      <div className=" flex items-center justify-center -mt-50">
        <img src="/media/goku.png" alt="goku" />
      </div>

       {/* realizamos una card con la informacion del dia la hora y lugar del evento */}
      <div className="w-auto h-full flex flex-col rounded-xl text-dbz-yellow text-stroke-dbz border border-white/40 rounded-xl p-10 bg-white/20 backdrop-blur-md shadow-2xl -mt-90">
        
        <p className="flex -translate-x-40 -translate-y-27 text-6xl rotate-270">Abril</p>
        <p className="flex translate-x-15 -translate-y-20 text-4xl">Sabado</p>
        <p className="flex text-8xl ml-15 -mt-15">25</p>
        <p className="flex text-5xl pl-65 -translate-y-40">Hora</p>
        <p className="flex text-5xl pl-65 -translate-y-40">01:00</p>
        <p className="flex text-5xl pl-70 -translate-y-40">PM</p>
      
        <div className="flex border-dashed border-black/40 border-t-4 -mt-40 "></div>  
        <div className="w-50 flex rotate-90 border-dashed border-black/40 border-t-4 translate-x-30 -mt-28"></div>
        <p className="flex justify-center  text-7xl mt-30">Dirección</p>
        <p className="flex justify-center text-2xl items-center mt-4 ">Salon cultural B/ Sol de Oriente</p>
        {/* aqui se crea el boton para que rediriga a la ubiacaion del lugar del evento por medi de google maps */}
        <button 
          onClick={mapa}
          className=" flex text-[20px] items-center justify-center translate-y-10 border border-white/40 rounded-xl p-2 bg-white/20 backdrop-blur-md shadow-2xl active:scale-95 hover:bg-white/30 transition duration-200 text-dbz-yellow text-stroke-dbz cursor-pointer -mt-8 mb-8"
        >📍Ver Ubicación</button>
      </div>
      
      {/* esta es la card final de te esperamos*/}
      <div className="w-auto h-full flex flex-col items-center justify-center text-dbz-yellow text-stroke-dbz border border-white/40 rounded-xl bg-white/20 backdrop-blur-md shadow-2xl mt-20">
        
        <div className="flex border-dashed border-black/40 border-t-4 -mt- -translate-y-"></div> 
      </div> 
      
    </div>
  );
}
