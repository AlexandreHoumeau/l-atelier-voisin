"use server";
import { render } from '@react-email/components';
import ConfirmationEmail from '../email/ConfirmationEmail';
const nodemailer = require("nodemailer");

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
        throw new Error("Missing fields");
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: `"Site Contact" <${process.env.SMTP_USER}>`,
        to: "contact@atelier-voisin.fr",
        replyTo: email.toString(),
        subject: `Nouveau message de ${name}`,
        text: message.toString(),
        html: `
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message}</p>
        `,
    });

    const emailHtml = await render(
        <ConfirmationEmail name={ name.toString() } />
    );

    await transporter.sendMail({
        from: `"Atelier Voisin" <contact@atelier-voisin.fr>`,
        to: email,
        subject: `Merci pour votre message !`,
        html: emailHtml,
    });

}
