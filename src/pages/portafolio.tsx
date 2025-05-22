import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  category: 'mobile' | 'web' | 'design';
  tags: string[];
  description: string;
  year: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "App de Realidad Aumentada",
    category: "mobile",
    tags: ["ARKit", "Swift", "Unity"],
    description: "Experiencia de compra con RA para visualización de productos en entorno real.",
    year: "2023",
    image: "/images/adventur.png",
    featured: true
  },
  {
    id: 3,
    title: "Plataforma E-commerce",
    category: "web",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    description: "Solución de comercio electrónico con integración de pagos y gestión de inventario.",
    year: "2024",
    image: "/images/ecommerce.png"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const categories = ['all', 'mobile', 'web', 'design'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen text-gray-100 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 text-center z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6">
          <span className="relative inline-block">Proyectos</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
          Descubre nuestra colección de proyectos innovadores que combinan creatividad, tecnología y funcionalidad.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12 sm:py-16 px-4 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative overflow-hidden rounded-xl border border-gray-800/50 cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 bg-gray-900 ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-full">
                    Destacado
                  </div>
                )}
                <div className="absolute bottom-3 left-3 text-xs sm:text-sm font-medium text-white bg-gray-900/60 px-2 py-1 rounded">
                  {project.year}
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs sm:text-sm text-teal-300 bg-teal-500/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                <button className="mt-3 text-teal-400 text-sm font-medium flex items-center hover:underline">
                  Ver más
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl shadow-teal-500/20">
            <div className="relative h-48 sm:h-60 md:h-72 w-full">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover rounded-t-xl"
                sizes="100vw"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 bg-gray-900/80 p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 text-sm md:text-base mb-6">{selectedProject.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm text-gray-400">Categoría</h4>
                  <p className="text-white capitalize">{selectedProject.category}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Año</h4>
                  <p className="text-white">{selectedProject.year}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-teal-500/10 text-teal-300 text-xs sm:text-sm px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-800 pt-6 flex justify-end">
                <button className="px-5 py-2.5 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-all">
                  Contactar para proyecto similar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
