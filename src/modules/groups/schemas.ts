import { z } from "zod";

/** Body of POST/PATCH /api/groups/{sessionId}/links */
export const linkSchema = z.object({
    name: z.string().min(1).max(100),
    slug: z.string().optional(),
    groupJids: z.array(z.string().regex(/@g\.us$/)).default([]),
    maxMembers: z.number().int().min(2).max(1024).optional(),
    strategy: z.enum(["fill", "balance"]).optional(),
    autoCreate: z.boolean().optional(),
    autoCreateName: z.string().max(100).optional(),
    autoCreateTags: z.array(z.string()).optional(),
    fallbackUrl: z.string().url().nullable().optional(),
    active: z.boolean().optional(),
});
