import { useState } from 'react';

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "¿Qué incluye su servicio básico para pequeñas empresas?",
            answer: "Nuestro paquete básico incluye: sitio web responsivo (5 páginas), diseño personalizado, integración con redes sociales, formulario de contacto, SEO básico y 1 mes de soporte post-lanzamiento. Perfecto para negocios locales y emprendedores."
        },
        {
            question: "¿Cuánto tiempo toma desarrollar un proyecto pequeño?",
            answer: "El tiempo promedio es de 3-4 semanas para proyectos estándar. Trabajamos con sprints de 1 semana donde recibirás actualizaciones concretas y podrás dar feedback en cada etapa."
        },
        {
            question: "¿Pueden trabajar con presupuestos ajustados?",
            answer: "Sí, ofrecemos planes escalables y opciones de pago flexibles. Para proyectos muy pequeños tenemos plantillas personalizables que reducen costos hasta en un 60% manteniendo calidad profesional."
        },
        {
            question: "¿Qué necesito para comenzar mi proyecto?",
            answer: "Solo necesitas: 1) Brief de tu negocio (te ayudamos a crearlo), 2) Contenido básico (textos e imágenes), 3) Ejemplos de sitios que te gusten. Nos encargamos de todo lo técnico."
        },
        {
            question: "¿Ofrecen mantenimiento después del lanzamiento?",
            answer: "Sí, tenemos planes mensuales desde $50 que incluyen: actualizaciones de seguridad, backups semanales, reportes de desempeño y hasta 2 horas de cambios menores por mes."
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative bg-[#030712] overflow-hidden">
            {/* Efectos de fondo sutiles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]"></div>
                <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[90px]"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado simple y profesional */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Preguntas <span className="text-cyan-400">Comunes</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        Respuestas claras para emprendedores y pequeñas empresas
                    </p>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4"></div>
                </div>

                {/* Lista de FAQs compacta */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-200"
                        >
                            <button
                                className={`w-full px-5 py-4 text-left flex justify-between items-center transition-colors ${activeIndex === index ? 'bg-gray-900/50' : 'hover:bg-gray-900/30'}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-base sm:text-lg font-medium text-white pr-2">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-cyan-400' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`px-5 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'pb-4' : 'max-h-0'}`}
                            >
                                <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA minimalista */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                        <p className="text-gray-400">
                            ¿No encontraste lo que buscabas?
                        </p>
                        <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
                            Contactar a soporte
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}