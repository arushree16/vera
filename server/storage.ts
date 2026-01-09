import { waitlistEntries, type InsertWaitlistEntry, type WaitlistEntry } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createWaitlistEntry(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const [entry] = await db
      .insert(waitlistEntries)
      .values(insertEntry)
      .returning();
    return entry;
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    const [entry] = await db
      .select()
      .from(waitlistEntries)
      .where(eq(waitlistEntries.email, email));
    return entry;
  }
}

export const storage = new DatabaseStorage();
