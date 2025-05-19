import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Servicios() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const openWhatsApp = (serviceTitle = '', isCustomProject = false) => {
        const phoneNumber = '51966963210'; // Reemplaza con tu número real (código país + número)
        const defaultMessage = isCustomProject
            ? 'Hola SoftechPeru, tengo un proyecto personalizado y me gustaría conversar sobre ello.'
            : `Hola SoftechPeru, estoy interesado en el servicio de ${serviceTitle} y quisiera más información.`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    const services = [
        {
            id: 1,
            title: "Transformación Digital",
            description: "Digitalización integral de negocios para competir en la era digital con procesos optimizados y tecnología de vanguardia.",
            icon: (
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            colorClass: "from-cyan-500/10 to-cyan-500/20 text-cyan-400"
        },
        {
            id: 2,
            title: "E-commerce y Pagos Online",
            description: "Creación de tiendas virtuales robustas con sistemas de pago integrados y experiencia de usuario optimizada para conversiones.",
            icon: (
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            colorClass: "from-blue-500/10 to-blue-500/20 text-blue-400"
        },
        {
            id: 3,
            title: "Automatización de Procesos",
            description: "Implementación de sistemas ERP, CRM y Chatbots inteligentes para optimizar operaciones y mejorar la productividad.",
            icon: (
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            colorClass: "from-purple-500/10 to-purple-500/20 text-purple-400"
        },
        {
            id: 4,
            title: "Seguridad Digital",
            description: "Protección de datos, backups automatizados y sistemas de seguridad avanzados para garantizar la integridad de tu información.",
            icon: (
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            colorClass: "from-green-500/10 to-green-500/20 text-green-400"
        },
        {
            id: 5,
            title: "Asesoría y Soporte 24/7",
            description: "Consultoría especializada y acompañamiento continuo para garantizar el éxito de tus proyectos tecnológicos.",
            icon: (
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            colorClass: "from-yellow-500/10 to-yellow-500/20 text-yellow-400"
        }
    ];

    return (
        <section className="relative bg-[#030712] pt-0 pb-12 sm:pb-16 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-[90px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-blue-600/20 blur-[90px] animate-pulse-slow"></div>
                <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full bg-purple-500/20 blur-[80px] animate-pulse-slow animation-delay-2000"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-3 sm:mb-4">
                        NUESTRAS SOLUCIONES
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                        Servicios que <span className="text-cyan-400">transforman</span> tu negocio
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base">
                        Soluciones tecnológicas personalizadas diseñadas para impulsar el crecimiento de tu empresa
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group relative bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={`absolute -right-6 sm:-right-8 -top-6 sm:-top-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${service.colorClass} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                            <div className="relative z-10">
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${service.colorClass} flex items-center justify-center mb-3 sm:mb-4 transition-all`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                                    {service.description}
                                </p>
                                <button
                                    onClick={() => openWhatsApp(service.title)}
                                    className={`flex items-center ${service.colorClass.split(' ')[2]} text-xs font-medium cursor-pointer hover:underline`}
                                >
                                    <span>Saber más</span>
                                    <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Custom Service Option */}
                    <div
                        className={`group relative bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-dashed border-gray-700 hover:border-cyan-400/50 transition-all duration-300 flex flex-col items-center justify-center ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <div className="text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">¿Necesitas algo diferente?</h3>
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                                Desarrollamos soluciones personalizadas adaptadas a tus requerimientos específicos.
                            </p>
                            <button
                                onClick={() => openWhatsApp('', true)}
                                className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm font-medium rounded-md sm:rounded-lg transition-all group-hover:shadow group-hover:shadow-cyan-400/10"
                            >
                                <span>Hablemos de tu proyecto</span>
                                <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* View All Button */}
                <div className={`text-center mt-6 sm:mt-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <Link
                        href="/servicios"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-900 hover:bg-gray-800 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-white transition-all hover:border-cyan-400 hover:text-cyan-400 hover:shadow hover:shadow-cyan-400/10"
                    >
                        <span>Ver todas nuestras soluciones</span>
                        <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}