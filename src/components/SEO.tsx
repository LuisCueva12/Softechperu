import Head from "next/head";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
    const siteUrl = "https://softechperu.com";
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const defaultImage = image || `${siteUrl}/default-image.jpg`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords || "software, hardware, tecnología, softech, desarrollo a medida, software contables, paginas webs, aulas virtuales"} />
            <meta name="author" content="SoftechPeru" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={defaultImage} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content="SoftechPeru" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={defaultImage} />

            {/* Schema.org (Rich Snippets) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "SoftechPeru",
                    "url": siteUrl,
                    "logo": `${siteUrl}/logo.png`,
                    "description": description,
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+51 966 963 210",
                        "contactType": "customer service",
                        "areaServed": "PE",
                        "availableLanguage": ["Spanish", "English"]
                    },
                    "sameAs": [
                        "https://web.facebook.com/people/Softechperu/61572860245964/",
                        "https://twitter.com/softechperu",
                        "https://www.linkedin.com/company/softechperu"
                    ]
                })}
            </script>
        </Head>
    );
};
export default SEO;
