import { useState } from 'react';

export default function PCDashboard() {
    const [activeApp, setActiveApp] = useState('dashboard');
    const [powerOn, setPowerOn] = useState(true);
    const [notifications, setNotifications] = useState(3);
    const [darkMode, setDarkMode] = useState(true);

    // Datos de ejemplo
    const stats = {
        visitors: { value: 1243, change: +12.4 },
        sales: { value: 287, change: +5.2 },
        projects: { value: 14, change: -2.1 }
    };

    const recentProjects = [
        { name: "Rediseño E-commerce", progress: 85, team: ["DS", "MF", "TL"] },
        { name: "App Móvil", progress: 42, team: ["MF", "RC"] },
        { name: "Sistema ERP", progress: 23, team: ["TL", "JV", "DS"] }
    ];

    const teamMembers = [
        { name: "Daniel S.", role: "Frontend", avatar: "DS", online: true },
        { name: "María F.", role: "Diseñadora", avatar: "MF", online: true },
        { name: "Tomás L.", role: "Backend", avatar: "TL", online: false },
        { name: "Juan V.", role: "DevOps", avatar: "JV", online: true }
    ];

    const renderAppContent = () => {
        switch (activeApp) {
            case 'dashboard':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {Object.entries(stats).map(([key, data]) => (
                            <div key={key} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-gray-400 text-sm capitalize">{key}</p>
                                        <p className="text-2xl font-bold text-white mt-1">{data.value}</p>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs ${data.change > 0 ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                                        {data.change > 0 ? '↑' : '↓'} {Math.abs(data.change)}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'projects':
                return (
                    <div className="space-y-4">
                        {recentProjects.map((project, index) => (
                            <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-medium text-white">{project.name}</h4>
                                    <div className="flex -space-x-2">
                                        {project.team.map((member, i) => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center text-xs text-white">
                                                {member}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>Progreso</span>
                                    <span>{project.progress}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'team':
                return (
                    <div className="grid grid-cols-2 gap-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                <div className="flex items-center space-x-3">
                                    <div className={`relative w-10 h-10 rounded-full flex items-center justify-center ${member.online ? 'bg-cyan-600' : 'bg-gray-600'}`}>
                                        <span className="text-white">{member.avatar}</span>
                                        {member.online && (
                                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></span>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">{member.name}</h4>
                                        <p className="text-xs text-gray-400">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'store':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/30 transition-colors">
                                <div className="bg-gray-700 rounded-lg h-32 mb-3 flex items-center justify-center text-gray-500">
                                    Producto {item}
                                </div>
                                <h4 className="font-medium text-white mb-1">Producto Premium {item}</h4>
                                <p className="text-xs text-gray-400 mb-2">Descripción breve del producto</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-cyan-400 font-medium">${(item * 99).toFixed(2)}</span>
                                    <button className="text-xs bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded text-white transition-colors">
                                        Añadir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return <div>Selecciona una aplicación</div>;
        }
    };

    return (
        <section className="relative bg-[#030712] py-16 overflow-hidden">
            {/* Efectos de fondo */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]"></div>
                <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[90px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-4">
                        INTERFAZ INMERSIVA
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Panel de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Control</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explora nuestro sistema operativo interactivo
                    </p>
                </div>

                {/* Computadora completa */}
                <div className="bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                    {/* Barra superior */}
                    <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center">
                        <div className="flex space-x-2">
                            <button
                                className={`w-3 h-3 rounded-full ${powerOn ? 'bg-red-500' : 'bg-gray-600'}`}
                                onClick={() => setPowerOn(false)}
                                title="Apagar"
                            ></button>
                            <button
                                className={`w-3 h-3 rounded-full ${powerOn ? 'bg-yellow-500' : 'bg-gray-600'}`}
                                title="Minimizar"
                            ></button>
                            <button
                                className={`w-3 h-3 rounded-full ${powerOn ? 'bg-green-500' : 'bg-gray-600'}`}
                                onClick={() => setPowerOn(true)}
                                title="Encender"
                            ></button>
                        </div>

                        <div className="ml-4 text-xs text-gray-400 flex-1 text-center">
                            {powerOn ? `Sistema Operativo TechOS • ${activeApp.charAt(0).toUpperCase() + activeApp.slice(1)}` : 'Sistema Apagado'}
                        </div>

                        <div className="flex items-center space-x-3">
                            <button
                                className="relative text-gray-400 hover:text-white"
                                onClick={() => setNotifications(0)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                {notifications > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                        {notifications}
                                    </span>
                                )}
                            </button>
                            <button
                                className="text-gray-400 hover:text-white"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                {darkMode ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {powerOn ? (
                        <div className="flex flex-col md:flex-row min-h-[500px]">
                            {/* Sidebar */}
                            <div className="w-full md:w-56 border-r border-gray-800 bg-gray-900/30 p-2">
                                <nav className="space-y-1">
                                    {[
                                        { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
                                        { id: 'projects', label: 'Proyectos', icon: 'folder' },
                                        { id: 'team', label: 'Equipo', icon: 'users' },
                                        { id: 'store', label: 'Tienda', icon: 'shopping-cart' }
                                    ].map((app) => (
                                        <button
                                            key={app.id}
                                            onClick={() => setActiveApp(app.id)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center transition-colors ${activeApp === app.id ? 'bg-cyan-500/10 text-cyan-400' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}
                                        >
                                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {app.icon === 'grid' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />}
                                                {app.icon === 'folder' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />}
                                                {app.icon === 'users' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                                                {app.icon === 'shopping-cart' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />}
                                            </svg>
                                            {app.label}
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-6 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <h4 className="text-xs text-gray-400 mb-2">Espacio de almacenamiento</h4>
                                    <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full w-3/4"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span>75% usado</span>
                                        <span>150GB/200GB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Área de contenido principal */}
                            <div className="flex-1 p-6 overflow-auto">
                                <div className="mb-6 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            {activeApp.charAt(0).toUpperCase() + activeApp.slice(1)}
                                        </h3>
                                        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-1"></div>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Buscar..."
                                            className="bg-gray-800/50 border border-gray-700 rounded-md px-3 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 w-48"
                                        />
                                        <svg className="w-4 h-4 text-gray-500 absolute right-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {renderAppContent()}
                            </div>
                        </div>
                    ) : (
                        <div className="h-[500px] flex items-center justify-center bg-gray-900/50">
                            <div className="text-center p-6">
                                <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                                <h3 className="text-xl text-gray-400 mb-2">Sistema Apagado</h3>
                                <p className="text-gray-600 mb-4">Presiona el botón verde para iniciar</p>
                                <button
                                    onClick={() => setPowerOn(true)}
                                    className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md hover:opacity-90 transition-opacity flex items-center mx-auto"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Iniciar Sistema
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Barra de estado inferior */}
                    <div className="bg-gray-900 px-4 py-2 border-t border-gray-800 flex items-center text-xs text-gray-400">
                        <div className="flex items-center space-x-4">
                            <span className="hidden sm:inline">TechOS v2.5.1</span>
                            <span className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                                Conectado
                            </span>
                            <span>CPU: 24%</span>
                        </div>
                        <div className="ml-auto flex items-center">
                            <span className="hidden md:inline mr-4">Última actualización: Hoy 15:24</span>
                            <span>{new Date().toLocaleTimeString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}