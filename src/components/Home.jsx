import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#7dd3fc] text-sm pb-3 xl:text-2xl tracking-wide ">
          Hola ✋, mi nombre es
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Juan Eulufí Salazar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Development Web
        </h2>
        <p className="text-[#8892b0] py-4 lg:text-base max-w-[700px] sm:text-xl">
          Soy una persona apasionada por el mundo de la programacion, me gusta
          programar para poder dar soluciones a problemas de la vida real, me
          gusta trabajar con tecnologias como React y TailwindCSS para poder
          crear interfaces web modernas y funcionales.
        </p>
      </div>
    </div>
  );
};

export default Home;
