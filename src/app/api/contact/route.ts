import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, mobile, subject, message } = await request.json();

        console.log("Details:", { name, email, mobile, subject });
        console.log("Env Password present:", !!process.env.GMAIL_APP_PASSWORD);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'richardarowolo308@gmail.com',
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: 'richardarowolo308@gmail.com',
            replyTo: email,
            subject: `Portfolio Inquiry: ${subject}`,
            text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}
        `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
