import { GetServerSideProps } from "next";

const Sitemap = () => { };

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const siteUrl = "https://softechperu.com";

    const pages = ["/", "/servicios", "/productos", "/nosotros", "/blog", "/contacto"];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
            .map(
                (page) => `
                        <url>
                            <loc>${siteUrl}${page}</loc>
                            <lastmod>${new Date().toISOString()}</lastmod>
                            <changefreq>weekly</changefreq>
                            <priority>0.8</priority>
                        </url>
                    `
            )
            .join("")}
        </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return { props: {} };
};

export default Sitemap;
