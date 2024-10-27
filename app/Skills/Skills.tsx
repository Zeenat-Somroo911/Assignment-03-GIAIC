export default function Skills() {
    return (
      <section id="skills" className="py-12 bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 rounded-lg shadow-lg">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-md">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill) => (
              <div key={skill.title} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-950">{skill.title}</h3>
                <p className="text-gray-700 text-lg">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  const skillsData = [
    {
      title: "HTML & CSS",
      description: "Building responsive and structured web pages.",
    },
    {
      title: "JavaScript",
      description: "Creating dynamic and interactive web applications.",
    },
    {
      title: "TypeScript",
      description: "Enhancing JavaScript with type safety and better tooling.",
    },
    {
      title: "Next.js",
      description: "Developing server-side rendered web apps with ease.",
    },
    {
      title: "Tailwind CSS",
      description: "Building modern UIs quickly with utility-first styling.",
    },
  ];
  