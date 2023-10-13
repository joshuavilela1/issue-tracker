import { z } from 'zod';

// * Create error and look into response/data in console and see errors
export const createIssueSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  description: z.string().min(1, 'Description is required'),
});
