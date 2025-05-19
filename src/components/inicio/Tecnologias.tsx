import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function CarruselHerramientas() {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [isHovered] = useState(false);

    const technologies = [
        { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
        { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "WordPress", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
        { name: "WooCommerce", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg" },
        { name: "Elementor", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Elementor_-_02.png" },
        { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" },
        { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
        { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { name: "Astro", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Astro.svg" },
        { name: "Nuxt.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" },
        { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" }
    ];

    const duplicatedTech = [...technologies, ...technologies, ...technologies];

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let animationId: number;
        let position = 0;
        const speed = 0.8;

        const animate = () => {
            if (!isHovered) {
                position -= speed;
                if (position <= -carousel.scrollWidth / 3) {
                    position = 0;
                }
                carousel.style.transform = `translateX(${position}px)`;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isHovered]);

    return (
        <section className="relative bg-[#030712] py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
                    <span className="text-blue-400">Tecnologías</span> que Utilizamos
                </h2>
                <div className="relative w-full h-32">
                    <div
                        ref={carouselRef}
                        className="flex absolute left-0 h-full items-center space-x-4 sm:space-x-6 md:space-x-8 px-2 sm:px-4"
                    >
                        {duplicatedTech.map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}`}
                                className="flex-shrink-0 h-16 w-32 sm:h-20 sm:w-40 flex items-center justify-center"
                            >
                                <div className="bg-white p-2 sm:p-4 rounded-lg border flex items-center justify-center h-full w-full">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={55}
                                        height={48}
                                        className="object-contain"
                                        loading="lazy"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
