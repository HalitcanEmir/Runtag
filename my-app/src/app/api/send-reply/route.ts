import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getServerEmailConfig } from "@/app/api/email-config/route";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, subject, htmlBody } = body;

    const emailConfig = getServerEmailConfig();
    if (!emailConfig || !emailConfig.smtpHost || !emailConfig.smtpUser) {
      return NextResponse.json(
        { error: "E-posta ayarları yapılandırılmamış." },
        { status: 400 }
      );
    }

    if (!to || !subject || !htmlBody) {
      return NextResponse.json(
        { error: "Alıcı, konu ve içerik zorunludur." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: emailConfig.smtpHost,
      port: emailConfig.smtpPort || 587,
      secure: emailConfig.smtpPort === 465,
      auth: {
        user: emailConfig.smtpUser,
        pass: emailConfig.smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${emailConfig.fromName || "Runteg"}" <${emailConfig.fromEmail || emailConfig.smtpUser}>`,
      to,
      subject,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Reply email error:", error);
    const message = error instanceof Error ? error.message : "Bilinmeyen hata";
    return NextResponse.json(
      { error: `E-posta gönderilemedi: ${message}` },
      { status: 500 }
    );
  }
}
