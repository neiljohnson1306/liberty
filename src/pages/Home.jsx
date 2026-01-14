import ServiceCard from '../components/ServiceCard'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-6">
        Strategic Consulting for Sustainable Growth
      </h1>
      <p className="text-xl text-secondary mb-12">
        Liberty Consultancy partners with organizations to deliver clarity,
        transformation, and measurable impact.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard title="Business Strategy" desc="Data-driven strategies to scale and compete." />
        <ServiceCard title="Technology Consulting" desc="Modern solutions for digital transformation." />
        <ServiceCard title="Operational Excellence" desc="Optimizing performance and efficiency." />
      </div>

      <CTA />
    </div>
  )
}
