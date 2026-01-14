export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white dark:bg-darkBg transition-colors">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Name" />
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <textarea className="w-full border p-3 rounded" placeholder="Message"></textarea>
        <button className="bg-accent text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </div>
  )
}
