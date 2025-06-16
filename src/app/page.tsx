export default function Home() {
  return (
    <div className="container py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-delft-blue mb-4">
          Welcome to the BBioX Research Group
        </h1>
        <p className="text-xl text-delft-gray max-w-3xl mx-auto">
          Advancing the frontiers of biomechanics and biomedical engineering at TU Delft
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-delft-blue mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To advance the understanding of biomechanics and develop innovative solutions
            for healthcare challenges through interdisciplinary research and collaboration.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-delft-blue mb-4">Our Approach</h2>
          <p className="text-gray-700">
            Combining cutting-edge computational methods with experimental validation
            to solve complex biomechanical problems and improve patient outcomes.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-delft-blue mb-8">Central Question</h2>
        <div className="bg-delft-blue text-white p-8 rounded-lg max-w-4xl mx-auto">
          <p className="text-xl">
            How can we leverage computational modeling and experimental techniques
            to better understand and predict biomechanical behavior in health and disease?
          </p>
        </div>
      </section>
    </div>
  )
} 