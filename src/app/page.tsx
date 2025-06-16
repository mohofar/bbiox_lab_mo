import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-delft-blue to-delft-light-blue">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            BBioX Research Group
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Advancing the frontiers of biomechanics and biomedical engineering at TU Delft
          </p>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-delft-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To advance the understanding of biomechanics and develop innovative solutions
                for healthcare challenges through interdisciplinary research and collaboration.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-delft-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-gray-600 text-lg">
                Combining cutting-edge computational methods with experimental validation
                to solve complex biomechanical problems and improve patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Central Question */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Central Question</h2>
            <div className="bg-delft-blue text-white rounded-2xl p-12 shadow-xl">
              <p className="text-2xl leading-relaxed">
                How can we leverage computational modeling and experimental techniques
                to better understand and predict biomechanical behavior in health and disease?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Research Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bone Growth',
                description: 'Computational modeling of bone development and growth patterns.',
                icon: '🦴'
              },
              {
                title: 'Osteoarthritis',
                description: 'Advanced analysis of joint degeneration and treatment strategies.',
                icon: '🦵'
              },
              {
                title: 'Pediatric Imaging',
                description: 'Specialized imaging techniques for pediatric patients.',
                icon: '👶'
              }
            ].map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 