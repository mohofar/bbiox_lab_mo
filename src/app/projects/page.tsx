const projects = [
  {
    title: 'Bone Growth Modeling',
    description: 'Computational modeling of bone growth and development in pediatric patients.',
    tags: ['Bone Growth', 'Computational Modeling'],
    icon: '🦴',
  },
  {
    title: 'Osteoarthritis Analysis',
    description: 'Advanced imaging and analysis techniques for osteoarthritis progression.',
    tags: ['OA Modeling', 'Medical Imaging'],
    icon: '🦵',
  },
  {
    title: 'Pediatric Imaging',
    description: 'Development of specialized imaging protocols for pediatric patients.',
    tags: ['Pediatric Imaging', 'Medical Imaging'],
    icon: '👶',
  },
]

export default function Projects() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-delft-blue mb-12 text-center">Research Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow flex flex-col items-center">
            <div className="text-5xl mb-4">{project.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4 text-center">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-delft-blue bg-opacity-10 text-delft-blue rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 