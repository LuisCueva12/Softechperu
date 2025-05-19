import { useState, useEffect, useMemo } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Servicios from '@/components/inicio/Servicios';
import WhyChooseUs from '@/components/inicio/WhyChooseUs';
import Tecnologias from '@/components/inicio/Tecnologias';
import Image from "next/image";
import Link from "next/link";
import TechBlogSection from '@/components/inicio/TechBlogSection';
import FAQSection from '@/components/inicio/FAQSection';

export default function Inicio() {
    const [displayText, setDisplayText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const heroTexts = useMemo(() => [
        "con diseño moderno",
        "con código eficiente",
        "con soporte continuo"
    ], []);

    const devices = [
        "/images/dispositivos/mobile-app.png",
        "/images/dispositivos/web-dashboard.png",
        "/images/dispositivos/tablet-ui.png"
    ];

    useEffect(() => {
        if (isTyping) {
            if (displayText.length < heroTexts[currentTextIndex].length) {
                const typingTimer = setTimeout(() => {
                    setDisplayText(heroTexts[currentTextIndex].substring(0, displayText.length + 1));
                }, 100);
                return () => clearTimeout(typingTimer);
            } else {
                const pauseTimer = setTimeout(() => {
                    setIsTyping(false);
                }, 2000);
                return () => clearTimeout(pauseTimer);
            }
        } else {
            if (displayText.length > 0) {
                const deletingTimer = setTimeout(() => {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                }, 30);
                return () => clearTimeout(deletingTimer);
            } else {
                setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
                setIsTyping(true);
            }
        }
    }, [displayText, currentTextIndex, isTyping, heroTexts]);

    useEffect(() => {
        const deviceInterval = setInterval(() => {
            setCurrentDeviceIndex((prev) => (prev + 1) % devices.length);
        }, 4500);

        return () => {
            clearInterval(deviceInterval);
        };
    }, [devices.length]);

    return (
        <main className="bg-[#030712]">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[85vh] flex items-center">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-15">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-[90px] animate-pulse-slow"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-blue-600/20 blur-[90px] animate-pulse-slow"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left space-y-3 z-10">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                            <span className="block mb-2">Potenciamos tu negocio</span>
                            <span className="block h-16 sm:h-20 relative">
                                <span
                                    className="absolute top-0 left-0 right-0"
                                    style={{ color: '#07D887' }}
                                >
                                    {displayText}
                                    <span className="animate-blink">|</span>
                                </span>
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            En <strong className="text-cyan-400">SoftechPeru</strong>, desarrollamos soluciones digitales a medida, desde aplicaciones web y móviles hasta plataformas empresariales, optimizando cada proyecto para mejorar la eficiencia y presencia en línea de tu negocio.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg"
                            >
                                <span>Iniciar proyecto</span>
                                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>

                            <Link
                                href="/servicios"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-600 bg-gray-900/50 px-6 py-3 text-base font-medium text-gray-300 transition-all hover:border-cyan-400 hover:text-white"
                            >
                                <span>Ver servicios</span>
                                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Trust Elements */}
                        <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-gray-400 text-xs sm:text-sm">
                            <div className="flex items-center gap-2 bg-gray-900/30 px-3 py-1.5 rounded-full">
                                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Desarrollo a medida</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-900/30 px-3 py-1.5 rounded-full">
                                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span>Tecnología avanzada</span>
                            </div>
                        </div>
                    </div>

                    {/* Device Gallery with Smooth Transition */}
                    <div className="relative h-64 sm:h-80 lg:h-[400px]">
                        {devices.map((device, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentDeviceIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <Image
                                    src={device}
                                    alt={`App en ${device.includes('mobile') ? 'móvil' : device.includes('tablet') ? 'tablet' : 'web'}`}
                                    fill
                                    className="object-contain object-center"
                                    priority
                                    quality={90}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Bottom Decorative Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
            </section>

            <Servicios/>
            <WhyChooseUs/>
            <TechBlogSection/>
            <FAQSection/>
            <Tecnologias/>
            <Footer />
        </main>
    );
}