import ServiceCard from "../components/ServiceCard"
import CTA from "../components/CTA"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Strategic Consulting for Sustainable Growth
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Liberty Consultancy partners with organizations to deliver clarity,
            transformation, and measurable impact.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard title="Business Strategy" desc="Data-driven strategies to scale and compete." />
          <ServiceCard title="Technology Consulting" desc="Modern solutions for digital transformation." />
          <ServiceCard title="Operational Excellence" desc="Optimizing performance and efficiency." />
        </div>

        <CTA />
      </section>
    </>
  )
}
