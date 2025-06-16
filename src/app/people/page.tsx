import Image from 'next/image'

const currentMembers = [
  {
    name: 'Dr. Jane Smith',
    role: 'Principal Investigator',
    image: '/images/people/jane.jpg',
    bio: 'Leading the BBioX Research Group with expertise in biomechanics and computational modeling.',
    profile: '#',
  },
  {
    name: 'John Doe',
    role: 'PhD Candidate',
    image: '/images/people/john.jpg',
    bio: 'Researching pediatric bone growth and computational modeling.',
    profile: '#',
  },
]

const alumni = [
  {
    name: 'Alice Brown',
    year: 2023,
    image: '/images/people/alice.jpg',
    profile: '#',
  },
  {
    name: 'Bob Green',
    year: 2022,
    image: '/images/people/bob.jpg',
    profile: '#',
  },
]

export default function People() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-delft-blue mb-12 text-center">Our Team</h1>
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-delft-blue mb-8">Current Members</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow">
              <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden border-4 border-delft-blue">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-delft-blue mb-2">{member.role}</p>
              <p className="text-gray-600 text-center mb-2">{member.bio}</p>
              <a href={member.profile} className="text-sm text-delft-blue hover:underline">Profile</a>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-delft-blue mb-8">Alumni</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {alumni.map((alum) => (
            <div key={alum.name} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-24 h-24 mb-3 relative rounded-full overflow-hidden border-2 border-delft-gray">
                <Image src={alum.image} alt={alum.name} fill className="object-cover" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{alum.name}</h4>
              <span className="inline-block bg-delft-blue text-white text-xs px-3 py-1 rounded-full mb-2">Class of {alum.year}</span>
              <a href={alum.profile} className="text-sm text-delft-blue hover:underline">Profile</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 