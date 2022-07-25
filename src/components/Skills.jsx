import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section name="skills" className="bg-[#0a192f] mt-20 py-10">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">
          <div
            className="max-w-lg mx-auto text-center lg:text-left lg:mx-0"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold sm:text-4xl text-white">
              Habilidades Digitales
            </h2>

            <p className="mt-4 text-[#8892b0]">
              Este plan está diseñado para desarrollar las habilidades
              necesarias para construir y mantener aplicaciones o sitios web,
              usando el stack de tecnologías fundamentales para el desarrollo
              Front end, es decir, HTML, CSS y JavaScript. Un desarrollador
              Front end se especializa en la creación de componentes visuales
              dentro de un software, aplicación o sitio web, estando encargado
              de implementar las funcionalidades que son usadas directamente por
              el cliente o usuario final.
            </p>
          </div>

          <div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
            data-aos="fade-up"
          >
            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <img
                  src={require("../assets/html.png")}
                  className="w-5 h-5 ml-3"
                />
              </span>

              <h6 className="mt-2 font-bold text-white">HTML</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Indicar la estructura de nuestro documento mediante etiquetas.
              </p>
            </a>

            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <img
                  src={require("../assets/css.png")}
                  className="w-5 h-5 ml-3"
                />
              </span>

              <h6 className="mt-2 font-bold text-white">CSS</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Estiliza elementos escritos en un lenguaje de marcado.
              </p>
            </a>

            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <img
                  src={require("../assets/javascript.png")}
                  className="w-5 h-5 ml-3"
                />
              </span>

              <h6 className="mt-2 font-bold text-white">JavasScript</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Crea contenido de actualización dinámica, controlar multimedia,
                etc.
              </p>
            </a>

            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <img
                  src={require("../assets/react.png")}
                  className="w-5 h-5 ml-3"
                />
              </span>

              <h6 className="mt-2 font-bold text-white">React</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Biblioteca de JavaScript para crear interfaces de usuario.
              </p>
            </a>

            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <img
                  src={require("../assets/tailwind.png")}
                  className="w-5 h-5 ml-3"
                />
              </span>

              <h6 className="mt-2 font-bold text-white">TailwindCSS</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Consiste en especificar los estilos con clases muy concisas
              </p>
            </a>

            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <AiFillGithub className="w-5 h-5 ml-3" />
              </span>

              <h6 className="mt-2 font-bold text-white">Github</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-400 sm:block">
                Es un portal creado para alojar el código de las aplicaciones de
                cualquier desarrollador.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
