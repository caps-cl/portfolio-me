import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section name="about">
      <div
        className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
          <div className="relative z-0 lg:py-16 bg">
            <div className="relative h-54 sm:h-80 lg:h-full">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src={require("../assets/zyro-image.png")}
                alt="Indoors house"
              />
            </div>
          </div>
          <div className="flex items-center bg-gray-100">
            <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-4xl">Sobre mi</h2>
              <p className="mt-4 text-gray-600">
                Continuamente aprendiendo y adquiriendo nuevas habilidades en
                función a las actuales y futuras demandas y tendencias
                tecnológicas en el campo del diseño y desarrollo de aplicaciones
                web en general. Soy tranquilamente confiado, naturalmente
                curioso y trabajo perpetuamente para mejorar mis habilidades,
                <span className="font-bold">
                  {" "}
                  un problema de diseño a la vez
                </span>
                .
              </p>
              <h2 className="text-2xl font-bold sm:text-4xl mt-3">
                Pasatiempos
              </h2>
              <div className="text-gray-600 mt-4">
                <p>Codigo ⌨️</p>
                <p>Videojuegos 🎮</p>
                <p>Leer 📚</p>
                <p>Series 🎬</p>
                <p>Estudiar 📖</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
