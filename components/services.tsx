"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Google te encuentra primero",
    description: "SEO tecnico desde el desarrollo. Estructura, velocidad y metadatos correctos desde el dia uno.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Transmite confianza al instante",
    description: "Diseno profesional que posiciona tu marca y convierte visitantes en clientes antes de que te hablen.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Mas leads por WhatsApp",
    description: "CTAs, botones y formularios estrategicamente ubicados para que cada visita se convierta en un contacto.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Velocidad y rendimiento real",
    description: "Carga en menos de 3 segundos. Core Web Vitals optimizados para mejorar posicion en Google y conversion.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Lo que incluye tu pagina web
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Una web que{" "}
              <span className="italic text-primary">trabaja por ti</span>{" "}
              las 24 horas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Disenamos paginas web para negocios, doctores y profesionales que quieren conseguir mas clientes por internet. Diseno claro, SEO incluido y entrega en 5-8 dias habiles.
            </p>
          </motion.div>

          {/* Right - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 bg-card rounded-2xl border border-border"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-foreground">95/100</p>
              <p className="text-sm text-muted-foreground mt-1">Velocidad</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">+31%</p>
              <p className="text-sm text-muted-foreground mt-1">WhatsApp</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-foreground">92/100</p>
              <p className="text-sm text-muted-foreground mt-1">SEO Score</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-green-600">Organico real</p>
              <p className="text-sm text-muted-foreground mt-1">Trafico</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
