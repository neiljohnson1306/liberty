export default function ServiceCard({ title, desc }) {
  return (
    <div className="border p-6 rounded-xl hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary">{desc}</p>
    </div>
  )
}
