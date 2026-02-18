import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { EmailConfig } from "@/lib/teklifler";

const CONFIG_PATH = path.join(process.cwd(), "data", "email-config.json");

function ensureDir() {
  const dir = path.dirname(CONFIG_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getEnvEmailConfig(): EmailConfig | null {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return null;
  }

  const smtpPort = Number(process.env.SMTP_PORT) || 587;

  return {
    smtpHost,
    smtpPort,
    smtpUser,
    smtpPass,
    fromEmail: process.env.FROM_EMAIL || "",
    fromName: process.env.FROM_NAME || "Runteg",
    notifyEmail: process.env.NOTIFY_EMAIL || "runtegiletisim@gmail.com",
  };
}

export function getServerEmailConfig(): EmailConfig | null {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
      return JSON.parse(raw) as EmailConfig;
    }
  } catch {}

  // On platforms like Vercel, filesystem may be read-only or ephemeral.
  // In that case, fall back to environment variables.
  return getEnvEmailConfig();
}

export async function GET() {
  const config = getServerEmailConfig();
  if (!config) {
    return NextResponse.json({ config: null });
  }
  // Don't expose password in full — return masked version for display
  return NextResponse.json({
    config: {
      ...config,
      smtpPass: config.smtpPass ? "••••••••" : "",
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { config } = body;

    if (!config) {
      return NextResponse.json({ error: "Config gerekli" }, { status: 400 });
    }

    // On Vercel, prefer configuration from environment variables and avoid writing to disk
    if (process.env.VERCEL) {
      return NextResponse.json({ success: true, note: "Config env değişkenlerinden okunuyor" });
    }

    ensureDir();

    // If password is masked, keep existing password
    if (config.smtpPass === "••••••••") {
      const existing = getServerEmailConfig();
      if (existing) {
        config.smtpPass = existing.smtpPass;
      }
    }

    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Bilinmeyen hata";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
