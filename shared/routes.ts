import { z } from 'zod';
import { insertWaitlistEntrySchema, waitlistEntries } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  conflict: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  waitlist: {
    create: {
      method: 'POST' as const,
      path: '/api/waitlist',
      input: insertWaitlistEntrySchema,
      responses: {
        201: z.custom<typeof waitlistEntries.$inferSelect>(),
        400: errorSchemas.validation,
        409: errorSchemas.conflict,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type CreateWaitlistEntryInput = z.infer<typeof api.waitlist.create.input>;
export type WaitlistEntryResponse = z.infer<typeof api.waitlist.create.responses[201]>;
