// localStorage-based analytics tracking

const VISITS_KEY = "runteg_daily_visits";
const SESSIONS_KEY = "runteg_active_sessions";
const SESSION_ID_KEY = "runteg_session_id";
const TOTAL_VISITS_KEY = "runteg_total_visits";

export type DailyVisit = {
  date: string; // YYYY-MM-DD
  count: number;
};

export type ActiveSession = {
  id: string;
  lastPing: number; // timestamp
};

// ---- Helpers ----

function today(): string {
  return new Date().toISOString().split("T")[0];
}

function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// ---- Daily Visits ----

export function getDailyVisits(): DailyVisit[] {
  try {
    const stored = localStorage.getItem(VISITS_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function saveDailyVisits(visits: DailyVisit[]) {
  localStorage.setItem(VISITS_KEY, JSON.stringify(visits));
}

export function recordVisit() {
  const visits = getDailyVisits();
  const dateStr = today();
  const existing = visits.find((v) => v.date === dateStr);
  if (existing) {
    existing.count += 1;
  } else {
    visits.push({ date: dateStr, count: 1 });
  }
  // Keep last 90 days
  const trimmed = visits.slice(-90);
  saveDailyVisits(trimmed);

  // Also increment total
  const total = getTotalVisits();
  localStorage.setItem(TOTAL_VISITS_KEY, String(total + 1));
}

export function getTodayVisits(): number {
  const visits = getDailyVisits();
  const dateStr = today();
  return visits.find((v) => v.date === dateStr)?.count ?? 0;
}

export function getTotalVisits(): number {
  try {
    return parseInt(localStorage.getItem(TOTAL_VISITS_KEY) || "0", 10);
  } catch {
    return 0;
  }
}

export function getLast30DaysVisits(): DailyVisit[] {
  const visits = getDailyVisits();
  const result: DailyVisit[] = [];
  const now = new Date();

  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const existing = visits.find((v) => v.date === dateStr);
    result.push({ date: dateStr, count: existing?.count ?? 0 });
  }
  return result;
}

// ---- Active Sessions ----

function getSessions(): ActiveSession[] {
  try {
    const stored = localStorage.getItem(SESSIONS_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function saveSessions(sessions: ActiveSession[]) {
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
}

export function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = generateSessionId();
    sessionStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}

export function pingSession() {
  const id = getSessionId();
  const sessions = getSessions();
  const now = Date.now();

  const existing = sessions.find((s) => s.id === id);
  if (existing) {
    existing.lastPing = now;
  } else {
    sessions.push({ id, lastPing: now });
  }

  // Remove sessions older than 30 seconds
  const active = sessions.filter((s) => now - s.lastPing < 30_000);
  saveSessions(active);
}

export function getActiveSessionCount(): number {
  const sessions = getSessions();
  const now = Date.now();
  return sessions.filter((s) => now - s.lastPing < 30_000).length;
}

// ---- Registered Users (simple counter) ----

const USERS_KEY = "runteg_registered_users";

export function getRegisteredUserCount(): number {
  try {
    return parseInt(localStorage.getItem(USERS_KEY) || "0", 10);
  } catch {
    return 0;
  }
}

export function setRegisteredUserCount(count: number) {
  localStorage.setItem(USERS_KEY, String(count));
}
