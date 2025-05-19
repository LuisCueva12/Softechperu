import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#030712] text-gray-300 border-t border-gray-800">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
                    {/* Logo y descripción */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center">
                            <div className="relative">
                                <Image
                                    src="/logo.png"
                                    alt="SoftachPeru - Soluciones Digitales"
                                    width={200}
                                    height={80}
                                    className="h-12 w-auto"
                                />
                            </div>
                        </Link>
                        <p className="mt-4 text-gray-400">
                            Soluciones digitales innovadoras para impulsar el éxito de tu negocio en la era digital.
                        </p>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-white">Suscríbete a nuestro equipo</h3>
                            <form className="mt-3 flex">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="flex-1 rounded-l-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                />
                                <button
                                    type="submit"
                                    className="rounded-r-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-medium text-white transition hover:from-cyan-600 hover:to-blue-700"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h3 className="text-lg font-medium text-white">Servicios</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/servicios" className="transition hover:text-cyan-400 hover:underline">
                                    Desarrollo Web
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios" className="transition hover:text-cyan-400 hover:underline">
                                    Aplicaciones Móviles
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios" className="transition hover:text-cyan-400 hover:underline">
                                    Consultoría TI
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios" className="transition hover:text-cyan-400 hover:underline">
                                    Marketing Digital
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-lg font-medium text-white">Empresa</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/nosotros" className="transition hover:text-cyan-400 hover:underline">
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/equipo" className="transition hover:text-cyan-400 hover:underline">
                                    Nuestro Equipo
                                </Link>
                            </li>
                            <li>
                                <Link href="/portafolio" className="transition hover:text-cyan-400 hover:underline">
                                    Portafolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="transition hover:text-cyan-400 hover:underline">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="text-lg font-medium text-white">Contacto</h3>
                        <address className="mt-4 not-italic space-y-2">
                            <p>Av. Tecnología 123</p>
                            <p>Lima, Perú</p>
                            <p>
                                <Link href="tel:+51987654321" className="transition hover:text-cyan-400 hover:underline">
                                    +51 987 654 321
                                </Link>
                            </p>
                            <p>
                                <Link href="mailto:info@softachperu.com" className="transition hover:text-cyan-400 hover:underline">
                                    info@softachperu.com
                                </Link>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Redes sociales y derechos */}
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="flex space-x-6">
                            <Link href="#" className="text-gray-400 transition hover:text-cyan-400">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-gray-400 transition hover:text-cyan-400">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-gray-400 transition hover:text-cyan-400">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </Link>
                        </div>

                        <div className="mt-6 md:mt-0">
                            <p className="text-center text-sm text-gray-500 md:text-right">
                                &copy; {new Date().getFullYear()} SoftachPeru. Todos los derechos reservados.
                            </p>
                            <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:justify-end">
                                <Link href="/terminos" className="text-gray-500 transition hover:text-cyan-400 hover:underline">
                                    Términos de servicio
                                </Link>
                                <Link href="/privacidad" className="text-gray-500 transition hover:text-cyan-400 hover:underline">
                                    Política de privacidad
                                </Link>
                                <Link href="/cookies" className="text-gray-500 transition hover:text-cyan-400 hover:underline">
                                    Política de cookies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}