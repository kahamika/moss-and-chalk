import { Session } from "./types";

const STORAGE_KEY = "moss-and-chalk-sessions";

export function getSessions(): Session[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data) as Session[];
  } catch {
    return [];
  }
}

export function saveSessions(sessions: Session[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

export function addSession(session: Session) {
  const sessions = getSessions();

  sessions.push(session);

  saveSessions(sessions);
}