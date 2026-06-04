import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Prisma Studio",
  description: "Aviso de privacidad y proteccion de datos personales de Prisma Studio.",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/isotipo.png"
              alt="Prisma Studio"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              PRISMA <span className="text-primary">STUDIO</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Aviso de Privacidad
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground font-medium">
            Ultima actualizacion: Junio 2025
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Identidad del Responsable</h2>
            <p>
              Prisma Studio, con domicilio en Guadalajara, Jalisco, Mexico, es responsable del tratamiento de sus datos personales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Datos Personales que Recabamos</h2>
            <p>Para las finalidades senaladas en el presente aviso de privacidad, podemos recabar los siguientes datos personales:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre completo</li>
              <li>Correo electronico</li>
              <li>Numero de telefono</li>
              <li>Nombre de la empresa (si aplica)</li>
              <li>Informacion sobre el proyecto o servicio solicitado</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Finalidades del Tratamiento</h2>
            <p>Los datos personales que recabamos seran utilizados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a sus solicitudes de informacion y cotizaciones</li>
              <li>Proporcionar los servicios de desarrollo web contratados</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
              <li>Mejorar nuestros productos y servicios</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Transferencia de Datos</h2>
            <p>
              Prisma Studio no transfiere sus datos personales a terceros sin su consentimiento, salvo en los casos previstos por la ley.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). 
              Para ejercer estos derechos, puede contactarnos a traves de nuestros canales de comunicacion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Cambios al Aviso de Privacidad</h2>
            <p>
              Nos reservamos el derecho de efectuar modificaciones al presente aviso de privacidad. 
              Cualquier cambio sera publicado en esta pagina.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Contacto</h2>
            <p>
              Si tiene preguntas sobre este aviso de privacidad, puede contactarnos via WhatsApp al +52 3310942397.
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </article>
    </main>
  )
}
