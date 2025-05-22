import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ModernHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Servicios', path: '/servicios' },
        { name: 'Portafolio', path: '/portafolio' },
        { name: 'Contacto', path: '/contacto'},
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#030712]/95 shadow-lg backdrop-blur-md' : 'bg-[#030712]'}`}>
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo con efecto de iluminación */}
                    <Link href="/" className="group flex items-center" aria-label="Inicio">
                        <div className="relative">
                            <Image
                                src="/logo.png"
                                alt="SoftachPeru - Soluciones Digitales"
                                width={200}
                                height={80}
                                priority
                                className="h-14 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </Link>

                    {/* Navegación con efectos hover modernos */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative px-1 py-2 text-base font-medium transition-all duration-300 group ${router.pathname === item.path
                                    ? 'text-white'
                                    : 'text-blue-100 hover:text-white'
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${router.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                <span className="absolute -bottom-1 left-1/2 h-1 w-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-bounce" />
                            </Link>
                        ))}

                        {/* Botón Login en lugar de Contacto */}
                        <Link
                            href="/login"
                            className="ml-4 relative overflow-hidden px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-base group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                        >
                            <span className="relative z-10 flex items-center">
                                <span className="mr-2">Login</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="absolute -inset-2 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow transition-opacity duration-500" />
                        </Link>
                    </nav>

                    {/* Menú móvil */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 -mr-2 text-blue-200 hover:text-cyan-300 focus:outline-none transition-colors"
                        aria-expanded={mobileMenuOpen}
                        aria-label="Menú de navegación"
                    >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Panel móvil con fondo oscuro */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#030712] backdrop-blur-md border-t border-gray-700/50">
                    <div className="px-4 pt-3 pb-5 space-y-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 group ${router.pathname === item.path
                                        ? 'bg-gray-800 text-white'
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center">
                                    {item.name}
                                    <svg
                                        className={`ml-2 h-4 w-4 text-cyan-300 transition-transform duration-300 ${router.pathname === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                            } transform group-hover:translate-x-1`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div
                                    className={`h-0.5 mt-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${router.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </Link>
                        ))}
                        <Link
                            href="/login"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block mt-3 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-base font-medium text-center shadow-md hover:shadow-cyan-500/30 transition-all"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
