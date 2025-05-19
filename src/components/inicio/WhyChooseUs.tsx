import Link from 'next/link';

export default function WhyChooseUs() {
    return (
        <section className="relative py-12 sm:py-20 bg-[#030712] p-0 overflow-hidden">
            {/* Efectos de fondo mejorados */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-[90px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-purple-500/20 blur-[90px] animate-pulse-slow animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full bg-blue-600/20 blur-[80px] animate-pulse-slow animation-delay-3000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-8 sm:mb-16">
                    <div className="inline-flex items-center justify-center mb-4 sm:mb-6 relative">
                        <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-cyan-400/20 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
                        <span className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 md:pb-12">
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                                ¿Por qué somos tu mejor elección?
                            </span>
                            <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                    </h2>

                </div>

                {/* Versión móvil - Grid de 2 columnas */}
                <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
                    {[
                        {
                            title: "Equipo Dinámico",
                            icon: (
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            ),
                            color: "bg-blue-500/10",
                            hover: "hover:bg-blue-500/20"
                        },
                        {
                            title: "Soluciones Custom",
                            icon: (
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            ),
                            color: "bg-purple-500/10",
                            hover: "hover:bg-purple-500/20"
                        },
                        {
                            title: "Precios Justos",
                            icon: (
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ),
                            color: "bg-green-500/10",
                            hover: "hover:bg-green-500/20"
                        },
                        {
                            title: "Innovación",
                            icon: (
                                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            ),
                            color: "bg-cyan-500/10",
                            hover: "hover:bg-cyan-500/20"
                        },
                        {
                            title: "Soporte 24/7",
                            icon: (
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ),
                            color: "bg-yellow-500/10",
                            hover: "hover:bg-yellow-500/20"
                        },
                        {
                            title: "Tecnología",
                            icon: (
                                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            ),
                            color: "bg-pink-500/10",
                            hover: "hover:bg-pink-500/20"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center p-4 h-32 ${item.color} ${item.hover} border border-gray-800 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.03]`}
                        >
                            <div className={`p-3 rounded-full ${item.color} mb-2 transition-all`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xs sm:text-sm font-semibold text-white text-center">{item.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Versión desktop - Disposición circular (oculta en móvil) */}
                <div className="hidden md:block relative h-64 sm:h-80 md:h-96 lg:h-[500px] mb-16 sm:mb-20">
                    {/* Líneas de conexión */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M50,10 L80,50 L50,90 L20,50 Z" stroke="rgba(8, 145, 178, 0.15)" strokeWidth="1" fill="none" />
                    </svg>

                    {/* Tarjetas posicionadas circularmente */}
                    {[
                        {
                            title: "Equipo Dinámico",
                            icon: (
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            ),
                            color: "bg-blue-500/10",
                            hover: "hover:bg-blue-500/20",
                            position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        },
                        {
                            title: "Soluciones Custom",
                            icon: (
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            ),
                            color: "bg-purple-500/10",
                            hover: "hover:bg-purple-500/20",
                            position: "top-1/4 right-0 -translate-y-1/2 translate-x-1/4"
                        },
                        {
                            title: "Precios Justos",
                            icon: (
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ),
                            color: "bg-green-500/10",
                            hover: "hover:bg-green-500/20",
                            position: "bottom-1/4 right-0 translate-y-1/2 translate-x-1/4"
                        },
                        {
                            title: "Innovación",
                            icon: (
                                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            ),
                            color: "bg-cyan-500/10",
                            hover: "hover:bg-cyan-500/20",
                            position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                        },
                        {
                            title: "Soporte 24/7",
                            icon: (
                                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ),
                            color: "bg-yellow-500/10",
                            hover: "hover:bg-yellow-500/20",
                            position: "bottom-1/4 left-0 translate-y-1/2 -translate-x-1/4"
                        },
                        {
                            title: "Tecnología",
                            icon: (
                                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            ),
                            color: "bg-pink-500/10",
                            hover: "hover:bg-pink-500/20",
                            position: "top-1/4 left-0 -translate-y-1/2 -translate-x-1/4"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`absolute ${item.position} w-40 h-40 sm:w-48 sm:h-48 flex flex-col items-center justify-center ${item.color} ${item.hover} border border-gray-800 rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[color:var(--tw-shadow-color)]/20`}
                        >
                            <div className={`p-4 rounded-full ${item.color} mb-3 transition-all`}>
                                {item.icon}
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-white text-center">{item.title}</h3>
                        </div>
                    ))}

                    {/* Elemento central interactivo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl animate-pulse-slow">
                        <Link href="/contacto" className="w-full h-full flex items-center justify-center group">
                            <span className="sr-only">Iniciar proyecto</span>
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 group-hover:rotate-180 transition-transform duration-500">
                                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping-slow"></div>
                                <div className="absolute inset-2 rounded-full border-4 border-white/50"></div>
                                <svg className="absolute inset-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Efecto de conexión entre elementos */}
                <div className="hidden md:block absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent top-1/2"></div>
            </div>

            {/* Efecto de partículas inferiores */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
        </section>
    );
}