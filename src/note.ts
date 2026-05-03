import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  // Add this line for the "Tags" task
  tags: z.array(z.string()).optional(),
});