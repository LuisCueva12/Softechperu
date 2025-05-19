import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function Blog() {
    const articles = [
        {
            id: 1,
            title: "Transformación Digital 2024: Lo que viene",
            excerpt: "Analizamos las tendencias que dominarán el próximo año en América Latina",
            category: "TENDENCIAS",
            date: "15 NOV 2023",
            readTime: "5 min",
            image: "/images/blog/transformacion-digital.jpg",
            alt: "Transformación digital en empresas"
        },
        {
            id: 2,
            title: "React vs Vue: Comparativa 2023",
            excerpt: "Benchmarks actualizados y casos de uso para elegir el mejor framework",
            category: "COMPARATIVAS",
            date: "8 NOV 2023",
            readTime: "7 min",
            image: "/images/blog/react.jpg",
            alt: "Comparación frameworks JavaScript"
        },
        {
            id: 3,
            title: "Guía Completa de Seguridad Cloud",
            excerpt: "Protege tus datos en la nube con estas estrategias comprobadas",
            category: "GUÍA PRÁCTICA",
            date: "1 NOV 2023",
            readTime: "9 min",
            image: "/images/blog/cloud.jpg  ",
            alt: "Seguridad en computación en la nube"
        },
        {
            id: 4,
            title: "Cómo optimizar tu sitio web con Next.js",
            excerpt: "Aprende las mejores prácticas para mejorar el rendimiento de tus aplicaciones Next.js",
            category: "DESARROLLO",
            date: "28 OCT 2023",
            readTime: "6 min",
            image: "/images/blog/nextjs.jpg",
            alt: "Optimización en Next.js"
        },
        {
            id: 5,
            title: "Tailwind CSS vs CSS tradicional",
            excerpt: "Comparativa detallada entre Tailwind CSS y el enfoque tradicional de CSS",
            category: "FRONTEND",
            date: "21 OCT 2023",
            readTime: "8 min",
            image: "/images/blog/tailwind.jpg",
            alt: "Comparación Tailwind CSS"
        },
        {
            id: 6,
            title: "Autenticación segura con NextAuth.js",
            excerpt: "Implementa un sistema de autenticación robusto en tu aplicación Next.js",
            category: "SEGURIDAD",
            date: "14 OCT 2023",
            readTime: "10 min",
            image: "/images/blog/auth.jpg",
            alt: "Autenticación con NextAuth"
        }
    ];

    return (
        <main className="bg-[#030712] min-h-screen text-gray-100">
            <Header />

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]"></div>
                <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[90px]"></div>
            </div>

            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Nuestro </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Descubre artículos sobre desarrollo web, diseño, optimización y las últimas tendencias tecnológicas.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="relative pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="group relative bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/10 flex flex-col h-full"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <span className="absolute top-4 left-4 px-2 py-1 text-xs font-medium text-white bg-gray-900/80 rounded-full backdrop-blur-sm">
                                    {article.category}
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between text-xs text-gray-500 mb-3">
                                    <span>{article.date}</span>
                                    <span>{article.readTime} de lectura</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 mb-4 flex-grow">{article.excerpt}</p>
                                <button className="text-cyan-400 text-sm font-medium flex items-center group-hover:underline self-start mt-auto">
                                    Leer artículo
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center">
                    <nav className="flex items-center space-x-2">
                        <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors">
                            Anterior
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white hover:opacity-90 transition-opacity">
                            1
                        </button>
                        <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors">
                            2
                        </button>
                        <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors">
                            3
                        </button>
                        <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors">
                            Siguiente
                        </button>
                    </nav>
                </div>
            </section>
            <Footer />
        </main>
    );
}