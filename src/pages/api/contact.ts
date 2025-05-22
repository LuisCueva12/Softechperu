import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "SoftechPeru <onboarding@resend.dev>",
            to: ["cuevasuarezluisyampier@gmail.com"],
            subject: `Nuevo contacto de ${name}`,
            html: `
                <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; padding: 24px; max-width: 600px; margin: 0 auto; background-color: #f0f4f8; color: #333;">
                <div style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06); padding: 32px;">
                <h2 style="color: #0e7490; margin-bottom: 16px;">📩 Nuevo mensaje de contacto</h2>
                <p style="font-size: 16px; color: #555; margin-bottom: 8px;"><strong>Nombre:</strong> ${name}</p>
                <p style="font-size: 16px; color: #555; margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0e7490; text-decoration: none;">${email}</a></p>
                <p style="font-size: 16px; color: #555; margin-bottom: 8px;"><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
                <div style="margin-top: 24px;">
                <p style="font-size: 16px; color: #555;"><strong>Mensaje:</strong></p>
                <div style="background-color: #f9fafb; padding: 16px; border-left: 4px solid #0e7490; border-radius: 6px; font-size: 15px; white-space: pre-wrap; color: #444;">
                ${message}
                </div>
                </div>
                <hr style="margin: 32px 0; border: none; border-top: 1px solid #e2e8f0;">
                <footer style="font-size: 13px; color: #888; text-align: center;">
                Este mensaje fue enviado desde el formulario de contacto de <strong>SoftechPeru</strong>.
                </footer>
                </div>
                </div>
            `,
        });

        if (error) {
            return res.status(400).json({ error });
        }

        return res.status(200).json({ success: true, data });
    } catch (error: any) {
        console.error("Error al enviar el correo:", error);
        return res.status(500).json({
            error: "Error al enviar el mensaje",
            details: error.message,
        });
    }
}
