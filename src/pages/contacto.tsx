import { useState, FormEvent, ChangeEvent } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function Contacto() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
    };

    return (
        <main className="bg-[#030712]">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[40vh] flex items-center">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-15">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-[90px] animate-pulse-slow"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-blue-600/20 blur-[90px] animate-pulse-slow"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 text-center z-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Contáctanos
                    </h1>
                    <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        ¿Tienes un proyecto en mente? Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="relative py-16 sm:py-24">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-500/20 blur-[90px]"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-600/20 blur-[90px]"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Contact Form */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                            placeholder="tu@email.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                            Teléfono (opcional)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                            placeholder="+51 XXX XXX XXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        placeholder="Cuéntanos sobre tu proyecto..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
                                <h3 className="text-xl font-bold text-white mb-6">Información de contacto</h3>

                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-cyan-500/10 rounded-lg">
                                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-400">Teléfono</h4>
                                            <p className="text-white">+51 123 456 789</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-cyan-500/10 rounded-lg">
                                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-400">Email</h4>
                                            <p className="text-white">contacto@softechperu.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-cyan-500/10 rounded-lg">
                                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-400">Dirección</h4>
                                            <p className="text-white">Av. Ejemplo 123, Lima, Perú</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
                                <h3 className="text-xl font-bold text-white mb-6">Horario de atención</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Lunes - Viernes</span>
                                        <span className="text-white">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Sábado</span>
                                        <span className="text-white">9:00 AM - 1:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Domingo</span>
                                        <span className="text-white">Cerrado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}