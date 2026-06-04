"use client"

import Link from "next/link"

export function TopBar() {
  return (
    <div className="bg-[#7c3aed] text-white py-2.5 px-4 text-center text-sm">
      <span className="hidden sm:inline">
        Entrega en <strong>5-8 dias</strong> - Desde <strong>$6,500 MXN</strong> - Pago unico, sin mensualidades
      </span>
      <span className="sm:hidden">
        Desde <strong>$6,500 MXN</strong> - Entrega en 5-8 dias
      </span>
      <Link 
        href="#contacto" 
        className="ml-3 inline-flex items-center font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        Cotizar
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  )
}
