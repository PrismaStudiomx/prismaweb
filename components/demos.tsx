"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

// Configuracion de los demos - Facil de editar
export const demos = [
  {
    id: 1,
    name: "BarberPOS",
    category: "Punto de Venta / Barberia",
    description: "Sistema punto de venta completo para barberias con gestion de citas, inventario y reportes.",
    logo: "/images/demos/demo-1.png",
    url: "#",
    tags: ["POS", "Citas", "Inventario"],
  },
  {
    id: 2,
    name: "RestaurantePRO",
    category: "Punto de Venta / Restaurante",
    description: "Gestion integral para restaurantes con pedidos en linea, mesas y cocina.",
    logo: "/images/demos/demo-2.png",
    url: "#",
    tags: ["Pedidos", "Mesas", "Cocina"],
  },
  {
    id: 3,
    name: "GymControl",
    category: "Gestion / Gimnasio",
    description: "Administracion de gimnasios con control de membresias, clases y pagos.",
    logo: "/images/demos/demo-3.png",
    url: "#",
    tags: ["Membresias", "Clases", "Pagos"],
  },
  {
    id: 4,
    name: "MediCitas",
    category: "Salud / Consultorio",
    description: "Sistema de citas medicas con expediente electronico y recordatorios automaticos.",
    logo: "/images/demos/demo-4.png",
    url: "#",
    tags: ["Citas", "Expedientes", "SMS"],
  },
  {
    id: 5,
    name: "EscuelaPLUS",
    category: "Educacion / Escuela",
    description: "Plataforma educativa con control escolar, calificaciones y comunicacion.",
    logo: "/images/demos/demo-5.png",
    url: "#",
    tags: ["Calificaciones", "Padres", "Tareas"],
  },
  {
    id: 6,
    name: "InmoGestion",
    category: "Inmobiliaria",
    description: "Software inmobiliario con catalogo de propiedades y seguimiento de clientes.",
    logo: "/images/demos/demo-6.png",
    url: "#",
    tags: ["Propiedades", "CRM", "Portal"],
  },
]

export function Demos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="demos" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Proyectos que combinan{" "}
            <span className="italic text-primary">diseno y resultados</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Mostramos trabajos reales con una presentacion visual mas limpia, directa y enfocada en el impacto del proyecto.
          </p>
        </motion.div>

        {/* Demos Grid */}
        <div className="space-y-12">
          {demos.map((demo, index) => (
            <DemoCard key={demo.id} demo={demo} index={index} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DemoCard({ 
  demo, 
  index, 
  isReversed 
}: { 
  demo: typeof demos[0]
  index: number
  isReversed: boolean 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${isReversed ? "md:grid-flow-dense" : ""}`}
    >
      {/* Content */}
      <div className={isReversed ? "md:col-start-2" : ""}>
        <span className="text-sm text-primary font-medium">{demo.category}</span>
        <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">{demo.name}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">{demo.description}</p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {demo.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={demo.url}
          target={demo.url !== "#" ? "_blank" : undefined}
          rel={demo.url !== "#" ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:underline"
        >
          Ver proyecto
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Image Placeholder */}
      <div className={`relative aspect-[4/3] bg-secondary rounded-2xl overflow-hidden ${isReversed ? "md:col-start-1" : ""}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Placeholder - Replace with actual demo screenshots */}
          <div className="w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-primary">{demo.name.charAt(0)}</span>
          </div>
        </div>
        {/* Optional: Use actual image */}
        {/* <Image src={demo.logo} alt={demo.name} fill className="object-cover" /> */}
      </div>
    </motion.div>
  )
}
