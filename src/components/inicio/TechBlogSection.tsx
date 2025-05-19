import Image from 'next/image';

export default function TechBlogSection() {
    // const [email, setEmail] = useState('');
    // const [isSubscribed, setIsSubscribed] = useState(false);

    /*
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
    };
    */

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
            image: "/images/blog/cloud.png",
            alt: "Seguridad en computación en la nube"
        }
    ];

    return (
        <section className="relative bg-[#030712] py-0 w-full min-h-screen">
            {/* Efectos de fondo */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]"></div>
                <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[90px]"></div>
            </div>

            <div className="relative w-full h-full flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8 box-border">
                {/* Encabezado */}
                <div className="text-center mb-10 w-full">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-4">
                        BLOG TECNOLÓGICO
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Últimas Noticias <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">y Artículos</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Mantente actualizado con nuestras guías, análisis y comparativas del mundo tech
                    </p>
                </div>

                {/* Grid de artículos */}
                <div className="w-full max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 px-4">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="group relative bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-400/10 flex flex-col h-full"
                        >
                            <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
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
            </div>
        </section>
    );
}
