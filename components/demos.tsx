"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const demos = [
  {
  id: 1,
  name: "Vintage Studio",
  category: "Punto de Venta / Barbería",
  description:
    "Sistema POS para barberías con gestión de citas, ventas, servicios, barberos, corte de caja y panel administrativo.",
  image: "/images/demos/vintage.png",
  url: "https://vintagestudiogdl.vercel.app/",
  tags: ["POS", "Citas", "Ventas"],
},
  {
  id: 2,
  name: "Umbral",
  category: "Inmobiliaria / Presencia digital",
  description:
    "Experiencia inmobiliaria con enfoque editorial para presentar propiedades, zonas y recorridos de forma más atractiva y profesional.",
  image: "/images/demos/umbral.jpg",
  url: "https://umbral-gray-six.vercel.app/",
  tags: ["Inmobiliaria", "Editorial", "Propiedades"],
},
  {
  id: 3,
  name: "Aura",
  category: "Spa Médico / Clínica estética",
  description:
    "Landing premium para clínica estética con una experiencia visual enfocada en transmitir confianza, exclusividad y facilitar la reserva de citas.",
  image: "/images/demos/aura.jpg",
  url: "https://aura-chi-mauve.vercel.app/",
  tags: ["Spa Médico", "Estética", "Reservas"],
},
  {
  id: 4,
  name: "Lúmina",
  category: "Eventos / Fotografía / Experiencias",
  description:
    "Landing visual y cinematográfica para salones de eventos, fotógrafos y marcas que crean experiencias memorables.",
  image: "/images/demos/lumina.jpg",
  url: "https://lumina-sigma-orcin.vercel.app/",
  tags: ["Eventos", "Fotografía", "Experiencias"],
},
  {
  id: 5,
  name: "NOST",
  category: "Ecommerce / Streetwear",
  description:
    "Tienda online para marca de ropa con catálogo de productos, carrito de compras, página de producto, checkout y panel administrativo.",
  image: "/images/demos/nost.png",
  url: "https://nost-rs5a.vercel.app/",
  tags: ["Ecommerce", "Carrito", "Admin"],
},
  {
    id: 6,
    name: "La Pampa",
    category: "Restaurante argentino",
    description:
      "Landing gastronómica para restaurante con presentación de experiencia, cortes, ubicación y reservas.",
    image: "/images/demos/lapampa.png",
    url: "https://la-pampa-web.vercel.app/",
    tags: ["Restaurante", "Reservas", "Menú"],
  },
  {
  id: 7,
  name: "Vértice",
  category: "Consultoría empresarial",
  description:
    "Landing profesional para consultoría empresarial con enfoque en autoridad, servicios, propuesta de valor y captación de prospectos.",
  image: "/images/demos/vertice.png",
  url: "https://vertice-eta.vercel.app/",
  tags: ["Consultoría", "Empresas", "Estrategia"],
},
];

export function Demos() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="demos" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Proyectos realizados
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Demos reales que muestran{" "}
            <span className="italic text-primary">
              diseño, estrategia y ejecución
            </span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada demo está pensada para mostrar cómo puede verse un negocio con una presencia digital clara, profesional y lista para convertir visitas en contactos.
          </p>
        </motion.div>

        <div className="space-y-16">
          {demos.map((demo, index) => (
            <DemoCard
              key={demo.id}
              demo={demo}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function DemoCard({
  demo,
  index,
  isReversed,
}: {
  demo: (typeof demos)[0];
  index: number;
  isReversed: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.a
      ref={ref}
      href={demo.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group block"
    >
      <div
        className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
          isReversed ? "md:grid-flow-dense" : ""
        }`}
      >

        <div className={isReversed ? "md:col-start-2" : ""}>
          <span className="text-sm text-primary font-medium">
            {demo.category}
          </span>

          <h3 className="mt-2 text-2xl md:text-4xl font-bold text-foreground">
            {demo.name}
          </h3>

          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
            {demo.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {demo.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 mt-7 text-primary font-medium">
            Ver demo
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        <div
  className={`relative aspect-[1200/630] bg-black rounded-2xl overflow-hidden border border-border shadow-sm transition duration-500 group-hover:scale-[1.015] group-hover:shadow-xl ${
    isReversed ? "md:col-start-1" : ""
  }`}
>
          <Image
  src={demo.image}
  alt={demo.name}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-contain transition duration-700 group-hover:scale-[1.02]"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
        </div>

      </div>
    </motion.a>
  );
}