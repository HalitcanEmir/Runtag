import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONFIG_PATH = path.join(process.cwd(), "data", "email-config.json");

function ensureDir() {
  const dir = path.dirname(CONFIG_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getServerEmailConfig() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
      return JSON.parse(raw);
    }
  } catch {}
  return null;
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
