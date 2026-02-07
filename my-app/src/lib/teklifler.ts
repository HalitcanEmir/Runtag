// Teklif (quote request) data store - localStorage based

const TEKLIFLER_KEY = "runteg_teklifler";
const EMAIL_CONFIG_KEY = "runteg_email_config";

export type TeklifStatus = "yeni" | "inceleniyor" | "cevaplandi" | "reddedildi";

export type Teklif = {
  id: string;
  createdAt: string;
  status: TeklifStatus;
  // Form data
  selectedTypes: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  description: string;
  // Admin notes
  adminNote?: string;
  repliedAt?: string;
};

export type EmailConfig = {
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPass: string;
  fromEmail: string;
  fromName: string;
  notifyEmail: string; // admin email to receive notifications
};

// ---- Teklifler CRUD ----

export function getTeklifler(): Teklif[] {
  try {
    const stored = localStorage.getItem(TEKLIFLER_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function saveTeklifler(list: Teklif[]) {
  localStorage.setItem(TEKLIFLER_KEY, JSON.stringify(list));
}

export function addTeklif(data: Omit<Teklif, "id" | "createdAt" | "status">): Teklif {
  const teklif: Teklif = {
    ...data,
    id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    createdAt: new Date().toISOString(),
    status: "yeni",
  };
  const list = getTeklifler();
  list.unshift(teklif);
  saveTeklifler(list);
  return teklif;
}

export function updateTeklifStatus(id: string, status: TeklifStatus) {
  const list = getTeklifler();
  const item = list.find((t) => t.id === id);
  if (item) {
    item.status = status;
    saveTeklifler(list);
  }
}

export function updateTeklifNote(id: string, note: string) {
  const list = getTeklifler();
  const item = list.find((t) => t.id === id);
  if (item) {
    item.adminNote = note;
    saveTeklifler(list);
  }
}

export function markTeklifReplied(id: string) {
  const list = getTeklifler();
  const item = list.find((t) => t.id === id);
  if (item) {
    item.status = "cevaplandi";
    item.repliedAt = new Date().toISOString();
    saveTeklifler(list);
  }
}

export function deleteTeklif(id: string) {
  const list = getTeklifler().filter((t) => t.id !== id);
  saveTeklifler(list);
}

export function getNewTeklifCount(): number {
  return getTeklifler().filter((t) => t.status === "yeni").length;
}

// ---- Email Config ----

export function getEmailConfig(): EmailConfig | null {
  try {
    const stored = localStorage.getItem(EMAIL_CONFIG_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}

export function saveEmailConfig(config: EmailConfig) {
  localStorage.setItem(EMAIL_CONFIG_KEY, JSON.stringify(config));
}
