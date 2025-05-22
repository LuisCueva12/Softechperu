import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Formulario <no-reply@tudominio.com>',
            to: 'cuevasuarezluisyampier@gmail.com',
            subject: 'Nuevo mensaje de contacto',
            html: `
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
                <p><strong>Mensaje:</strong><br>${message}</p>
            `,
        });

        return res.status(200).json({ success: true, data });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
    }
}
