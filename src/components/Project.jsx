import { AiFillGithub } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const features = [
  {
    id: 1,
    name: "Ecommerce Reaping",
    description:
      "Ecommerce de venta de varios productos hecho con  react, redux, react-router-dom, bootstrap, fakeapi, font-awesome, etc.",
    link: "https://reaping-shop.vercel.app/",
    github:
      "https://vercel.com/botusuario/reaping-shop/BGXc4b7iNw2UBCp91UtY1c9EZc29",
  },
  {
    id: 2,
    name: "Ecommerce Phone",
    description:
      "Ecommerce de Ventas de Celular, con carrito de compra, ocupando react-icons, react-router-dom, redux, etc.",
    link: "https://ecommerce-phone-4iikrec5v-botusuario.vercel.app/",
    github: "https://github.com/caps-cl/ecommerce_phone",
  },
  {
    id: 3,

    name: "Blogging",
    description:
      "Blog hecho con el fin de compartir conocimiento sobre el desarrollo Web y sus diferentes tecnologías.",
    link: "https://blog-website-7gbibkvnp-botusuario.vercel.app/",
    github: "https://github.com/caps-cl/blog-website",
  },
  {
    id: 4,
    name: "Veterinaria Pacientes",
    description:
      "Aplicacion web, donde se puede llevar un seguimiento de lista de pacientes para una veterinaria, aplicacion funcional, hecha en ReacAplicación Web, donde se puede llevar un seguimiento de lista de pacientes para una veterinaria, aplicación funcional, hecha en React.",
    link: "https://veterinaria-vite.vercel.app/",
    github: "https://github.com/caps-cl/veterinaria_vite",
  },
  {
    id: 5,
    name: "Criptomonedas API",
    description:
      "Pagina Web, donde puedes cotizar las primeras 100 critomonedas del mercado, consumiendo una API de Coingecko.",
    link: "https://criptomonedas-vite-i7a8shqau-botusuario.vercel.app/",
    github: "https://github.com/caps-cl/criptomonedas-vite",
  },
  {
    id: 6,
    name: "Modern Website",
    description:
      "Website moderna, donde se da a presentar una aplicación de notas, solamente es una pagina Web estática.",
    link: "https://modern-website-brown.vercel.app/",
    github:
      "https://github.com/caps-cl/modern_website",
  },
];

export default function Example() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div name="project" className="w-full" data-aos="fade-up">
      <div className="py-12 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="lg:text-4xl text-2xl text-[#7dd3fc]  font-bold tracking-wide uppercase">
              Proyectos
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Aquí podrás ver algunos de los proyectos que eh realizado
            </p>
          </div>
          <div className="mt-10 gap-5">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="block p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-xl"
                  href={feature.link}
                  target="_blank"
                >
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-sm text-gray-300">
                    {feature.description}
                  </p>
                  <div className="flex justify-between pt-5 text-2xl text-white">
                    <a href={feature.link} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href={feature.github} target="_blank">
                      <AiFillGithub className="ml-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
