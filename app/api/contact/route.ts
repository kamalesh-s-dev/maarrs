import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, company, message } = await req.json();

        // If env missing, stop early
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("❌ Missing EMAIL credentials in env");
            return NextResponse.json(
                { error: "Email config missing" },
                { status: 500 }
            );
        }

        // Create transporter (better than 'service: gmail')
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // ✅ Send mail
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER, // IMPORTANT
            replyTo: email, // user email
            to: "hello@maarrs.com",
            subject: `New Contact Form Message from ${name}`,
            html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        });

        console.log("✅ Email sent:", info.messageId);

        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error("EMAIL ERROR:", error);

        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}