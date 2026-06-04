import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terminos y Condiciones | Prisma Studio",
  description: "Terminos y condiciones de uso de los servicios de Prisma Studio.",
}

export default function TerminosPage() {
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
          Terminos y Condiciones
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground font-medium">
            Ultima actualizacion: Junio 2025
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Aceptacion de los Terminos</h2>
            <p>
              Al acceder y utilizar los servicios de Prisma Studio, usted acepta estar sujeto a estos terminos y condiciones. 
              Si no esta de acuerdo con alguna parte de estos terminos, no debera utilizar nuestros servicios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Descripcion de los Servicios</h2>
            <p>Prisma Studio ofrece servicios de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarrollo de sitios web y aplicaciones web</li>
              <li>Sistemas de punto de venta personalizados</li>
              <li>Desarrollo de aplicaciones moviles</li>
              <li>Diseno e implementacion de bases de datos</li>
              <li>Software a medida</li>
              <li>Soporte y mantenimiento de sistemas</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Cotizaciones y Pagos</h2>
            <p>
              Las cotizaciones proporcionadas tienen una vigencia de 30 dias a partir de su emision. 
              Los precios estan sujetos a cambios sin previo aviso. Los terminos de pago seran acordados 
              especificamente para cada proyecto y quedaran estipulados en el contrato correspondiente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Propiedad Intelectual</h2>
            <p>
              Una vez completado el pago total del proyecto, el cliente obtendra los derechos de uso del 
              software desarrollado. Prisma Studio se reserva el derecho de utilizar el proyecto como 
              referencia en su portafolio, salvo acuerdo expreso en contrario.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Confidencialidad</h2>
            <p>
              Prisma Studio se compromete a mantener la confidencialidad de toda la informacion 
              proporcionada por el cliente durante el desarrollo del proyecto.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Garantia</h2>
            <p>
              Ofrecemos un periodo de garantia de 30 dias despues de la entrega del proyecto para 
              correccion de errores o bugs. Esta garantia no cubre cambios en los requerimientos 
              originales ni nuevas funcionalidades.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Limitacion de Responsabilidad</h2>
            <p>
              Prisma Studio no sera responsable por danos indirectos, incidentales o consecuentes 
              que puedan surgir del uso de nuestros servicios o productos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos terminos y condiciones en cualquier momento. 
              Los cambios entraran en vigor inmediatamente despues de su publicacion en este sitio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Ley Aplicable</h2>
            <p>
              Estos terminos y condiciones se regiran e interpretaran de acuerdo con las leyes de Mexico, 
              y cualquier disputa sera sometida a la jurisdiccion de los tribunales de Guadalajara, Jalisco.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">10. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con estos terminos, puede contactarnos via WhatsApp al +52 3310942397.
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
