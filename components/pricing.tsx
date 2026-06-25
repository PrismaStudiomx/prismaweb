"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"

const categories = ["Landing Page", "Pagina Web", "E-commerce", "Punto de Venta"]

const plans = {
  "Landing Page": [
    {
      name: "Esencial",
      subtitle: "Tu presencia profesional online",
      price: "$4,500",
      features: ["1 pagina optimizada", "Diseno responsivo", "Formulario de contacto", "SEO basico", "Entrega 3-5 dias"],
    },
    {
      name: "Profesional",
      subtitle: "Conversion ",
      price: "$6,500",
      recommended: true,
      features: ["Hasta 3 secciones", "Animaciones modernas", "Integracion WhatsApp", "SEO avanzado", "Entrega 5-8 dias", "1 revision incluida"],
    },
  ],
  "Pagina Web": [
    {
      name: "Esencial",
      subtitle: "Tu presencia profesional online",
      price: "$6,500",
      features: ["Hasta 5 paginas", "Diseno responsivo", "Formulario de contacto", "SEO basico", "Entrega 5-8 dias"],
    },
    {
      name: "Crecimiento",
      subtitle: "Trafico organico + contactos constantes",
      price: "$13,900",
      recommended: true,
      features: ["Hasta 10 paginas", "Blog integrado", "Panel administrable", "SEO avanzado", "Entrega 10-15 dias", "3 revisiones incluidas"],
    },
    {
      name: "Pro",
      subtitle: "Domina tu nicho en Google",
      price: "$21,900",
      features: ["Paginas ilimitadas", "Sistema de citas", "Integraciones avanzadas", "SEO premium", "Entrega 15-20 dias", "Soporte 30 dias"],
    },
  ],
  "E-commerce": [
    {
      name: "Starter",
      subtitle: "Empieza a vender online",
      price: "$15,900",
      features: ["Hasta 50 productos", "Carrito de compras", "Pagos en linea", "Gestion de inventario", "Entrega 15-20 dias"],
    },
    {
      name: "Business",
      subtitle: "Escala tu tienda online",
      price: "$28,900",
      recommended: true,
      features: ["Productos ilimitados", "Multiples metodos de pago", "Envios automatizados", "Reportes de ventas", "Entrega 20-30 dias", "Soporte 60 dias"],
    },
  ],
  "Punto de Venta": [
    {
      name: "Basico",
      subtitle: "Control de tu negocio",
      price: "$18,900",
      features: ["Gestion de ventas", "Control de inventario", "Reportes basicos", "1 usuario", "Capacitacion incluida"],
    },
    {
      name: "Completo",
      subtitle: "Solucion integral",
      price: "$35,900",
      recommended: true,
      features: ["Multiusuario", "Facturacion electronica", "Citas y reservaciones", "Reportes avanzados", "App movil", "Soporte 90 dias"],
    },
  ],
}

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("Pagina Web")

  const currentPlans = plans[activeCategory as keyof typeof plans]

  return (
    <section id="precios" className="py-20 md:py-28 bg-[#1a1625]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#7c3aed]/20 border border-[#7c3aed]/30 rounded-full text-sm text-white mb-6">
            Planes web
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance">
            Precios claros para crecer con{" "}
            <span className="italic text-[#a78bfa]">tecnologia</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 bg-white/10 rounded-full flex-wrap justify-center gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-white text-[#1a1625]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className={`grid gap-6 ${currentPlans.length === 3 ? 'md:grid-cols-3' : currentPlans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'max-w-md mx-auto'}`}>
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                plan.recommended
                  ? "bg-white"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#7c3aed] text-white text-xs font-medium rounded-full">
                  RECOMENDADO
                </span>
              )}

              <div className="mb-6">
                <p className={`text-xs font-medium tracking-wider uppercase mb-1 ${plan.recommended ? "text-[#7c3aed]" : "text-[#a78bfa]"}`}>
                  {plan.recommended ? "MAS RECOMENDADO" : "PARA EMPEZAR"}
                </p>
                <h3 className={`text-2xl font-bold ${plan.recommended ? "text-[#1a1625]" : "text-white"}`}>{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.recommended ? "text-[#64607a]" : "text-white/60"}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className={`text-4xl font-bold ${plan.recommended ? "text-[#1a1625]" : "text-white"}`}>{plan.price}</span>
                <span className={`text-sm font-medium ${plan.recommended ? "text-[#64607a]" : "text-white/60"}`}>
                  PAGO UNICO
                </span>
              </div>

              <Link
                href={`https://wa.me/523310942397?text=Hola%20Prisma%20Studio%2C%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}%20de%20${encodeURIComponent(activeCategory)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-full font-medium mb-4 transition-colors ${
                  plan.recommended
                    ? "bg-[#7c3aed] text-white hover:bg-[#6d28d9]"
                    : "bg-white text-[#1a1625] hover:bg-white/90"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {plan.recommended ? "Quiero este plan" : "Cotizar por WhatsApp"}
              </Link>

              <div className={`mt-6 pt-6 border-t ${plan.recommended ? "border-[#e5e2de]" : "border-white/10"}`}>
                <p className={`text-sm font-medium mb-4 ${plan.recommended ? "text-[#1a1625]" : "text-white"}`}>
                  Incluye:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-3 text-sm ${plan.recommended ? "text-[#64607a]" : "text-white/70"}`}>
                      <svg className={`w-4 h-4 flex-shrink-0 ${plan.recommended ? "text-[#7c3aed]" : "text-[#a78bfa]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
