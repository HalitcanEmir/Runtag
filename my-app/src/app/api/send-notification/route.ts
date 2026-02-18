import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getServerEmailConfig } from "@/app/api/email-config/route";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { teklif } = body;

    const emailConfig = getServerEmailConfig();
    if (!emailConfig || !emailConfig.smtpHost || !emailConfig.smtpUser) {
      return NextResponse.json(
        { error: "E-posta ayarları yapılandırılmamış." },
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

    // Send notification email to admin
    const typesList = teklif.selectedTypes.join(", ");

    const htmlContent = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a14; color: #e0e0e0; border-radius: 12px; overflow: hidden; border: 1px solid #1a1a2e;">
        <div style="background: linear-gradient(135deg, #ec4899, #a855f7); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 22px; color: #fff;">🚀 Yeni Teklif Talebi</h1>
          <p style="margin: 4px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">Runteg Admin Panel</p>
        </div>
        <div style="padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; width: 140px; vertical-align: top;">İsim</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${teklif.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">E-posta</td>
              <td style="padding: 10px 0; color: #ec4899; font-size: 14px;"><a href="mailto:${teklif.email}" style="color: #ec4899; text-decoration: none;">${teklif.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">Telefon</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${teklif.phone || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">Şirket</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${teklif.company || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top; border-top: 1px solid #1a1a2e;">Proje Türleri</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px; border-top: 1px solid #1a1a2e;">${typesList}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">Bütçe Aralığı</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${teklif.budget}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">Zaman Çizelgesi</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${teklif.timeline}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top; border-top: 1px solid #1a1a2e;">Proje Açıklaması</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px; border-top: 1px solid #1a1a2e;">${teklif.description || "Belirtilmemiş"}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 8px;">
            <p style="margin: 0; color: #a855f7; font-size: 13px;">📌 Bu teklif admin paneldeki Teklifler sayfasında görüntülenebilir ve yanıtlanabilir.</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${emailConfig.fromName || "Runteg"}" <${emailConfig.fromEmail || emailConfig.smtpUser}>`,
      to: "runtegiletisim@gmail.com",
      subject: `🚀 Yeni Teklif Talebi: ${teklif.name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Email send error:", error);
    const message = error instanceof Error ? error.message : "Bilinmeyen hata";
    return NextResponse.json(
      { error: `E-posta gönderilemedi: ${message}` },
      { status: 500 }
    );
  }
}
