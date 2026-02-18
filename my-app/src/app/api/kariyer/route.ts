import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getServerEmailConfig } from "@/app/api/email-config/route";

type KariyerFormData = {
  name: string;
  email: string;
  university: string;
  department: string;
  year: string;
  team: string;
  experience: string;
  portfolio: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { form: KariyerFormData };
    const { form } = body;

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

    const htmlContent = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a14; color: #e0e0e0; border-radius: 12px; overflow: hidden; border: 1px solid #1a1a2e;">
        <div style="background: linear-gradient(135deg, #ec4899, #a855f7); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 22px; color: #fff;">🎓 Yeni Kariyer Başvurusu</h1>
          <p style="margin: 4px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">Runteg Kariyer Formu</p>
        </div>
        <div style="padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; width: 160px; vertical-align: top;">Ad Soyad</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${form.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">E-posta</td>
              <td style="padding: 10px 0; color: #ec4899; font-size: 14px;">
                <a href="mailto:${form.email}" style="color: #ec4899; text-decoration: none;">${form.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">Üniversite</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${form.university}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">Bölüm</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${form.department}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">Sınıf</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${form.year}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">İlgilendiği Ekip</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${form.team}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">Deneyim Seviyesi</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${form.experience || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top;">Portfolio / Linkler</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">
                ${form.portfolio ? `<a href="${form.portfolio}" style="color: #60a5fa; text-decoration: none;">${form.portfolio}</a>` : "-"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a0a0b0; font-size: 13px; vertical-align: top; border-top: 1px solid #1a1a2e;">Mesaj</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px; border-top: 1px solid #1a1a2e;">${form.message || "Belirtilmemiş"}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.35); border-radius: 8px;">
            <p style="margin: 0; color: #7dd3fc; font-size: 13px;">📎 Not: Kariyer formundaki CV şu an sistemde saklanmıyor; aday gerekirse e-posta üzerinden CV gönderebilir.</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${emailConfig.fromName || "Runteg"}" <${emailConfig.fromEmail || emailConfig.smtpUser}>`,
      to: emailConfig.notifyEmail || "runtegiletisim@gmail.com",
      subject: `🎓 Yeni Kariyer Başvurusu: ${form.name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Kariyer email error:", error);
    const message = error instanceof Error ? error.message : "Bilinmeyen hata";
    return NextResponse.json(
      { error: `E-posta gönderilemedi: ${message}` },
      { status: 500 }
    );
  }
}

