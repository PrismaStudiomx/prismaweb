"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const problems = [
  {
    number: "01",
    badge: "Visitas sin conversion",
    badgeColor: "text-[#dc2626] bg-[#fef2f2]",
    title: "Tu web recibe visitas pero no genera leads",
    description: "Tienes trafico, pero nadie te contacta. Falta estructura, llamados a la accion claros y una propuesta de valor que convenza desde el primer vistazo.",
  },
  {
    number: "02",
    badge: "Diseno que aleja",
    badgeColor: "text-[#ea580c] bg-[#fff7ed]",
    title: "Tu sitio no transmite confianza profesional",
    description: "Un diseno desactualizado, lento o confuso hace que tus clientes potenciales se vayan antes de pedir informacion o cotizar.",
  },
  {
    number: "03",
    badge: "Sin visibilidad",
    badgeColor: "text-[#64607a] bg-[#f3f4f6]",
    title: "No apareces cuando te buscan en Google",
    description: "Sin una estructura correcta y SEO base, tu competencia ocupa ese espacio antes que tu y se queda con la intencion de compra.",
  },
]

export function Problems() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-28 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#fef2f2] rounded-full text-sm text-[#dc2626] mb-6">
            <span className="w-2 h-2 bg-[#dc2626] rounded-full" />
            Diagnostico rapido
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1625] text-balance">
            Tu sitio web esta{" "}
            <span className="italic text-[#7c3aed]">perdiendo clientes</span>{" "}
            todos los dias?
          </h2>
          <p className="mt-4 text-lg text-[#64607a] max-w-3xl mx-auto">
            Tener presencia en linea no es suficiente si tu pagina no esta pensada para posicionar, convencer y convertir.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 bg-white rounded-2xl border border-[#e5e2de] group hover:shadow-lg transition-shadow"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-7xl font-bold text-[#e5e2de]">
                {problem.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#f8f6f3] flex items-center justify-center mb-4">
                {problem.number === "01" && (
                  <svg className="w-6 h-6 text-[#64607a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {problem.number === "02" && (
                  <svg className="w-6 h-6 text-[#64607a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
                {problem.number === "03" && (
                  <svg className="w-6 h-6 text-[#64607a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>

              {/* Badge */}
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${problem.badgeColor}`}>
                {problem.badge}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#1a1625] mb-3 pr-12">
                {problem.title}
              </h3>
              <p className="text-[#64607a] leading-relaxed mb-4">
                {problem.description}
              </p>

              {/* Link */}
              <Link 
                href="#contacto" 
                className="inline-flex items-center text-sm font-medium text-[#7c3aed] hover:text-[#6d28d9] transition-colors"
              >
                Resolver ahora
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
