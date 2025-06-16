export default function Contact() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-delft-blue mb-12 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <svg className="w-7 h-7 text-delft-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0 0H9m3 0h3" /></svg>
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-delft-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0 0H9m3 0h3" /></svg>
                Email
              </h3>
              <a href="mailto:contact@bbiox.tudelft.nl" className="text-delft-blue hover:text-delft-light-blue block mt-1">
                contact@bbiox.tudelft.nl
              </a>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-delft-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V6a4 4 0 00-8 0v4m12 0a4 4 0 01-8 0m8 0v4a4 4 0 01-8 0v-4" /></svg>
                Address
              </h3>
              <p className="text-gray-600 mt-1">
                Faculty of Mechanical Engineering<br />
                TU Delft<br />
                Mekelweg 2<br />
                2628 CD Delft<br />
                The Netherlands
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <svg className="w-7 h-7 text-delft-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0 0H9m3 0h3" /></svg>
            Send us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-delft-blue focus:ring-delft-blue"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-delft-blue focus:ring-delft-blue"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-delft-blue focus:ring-delft-blue"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-delft-blue text-white px-4 py-2 rounded-md hover:bg-delft-light-blue transition-colors font-semibold text-lg shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 