import { defineCollection, reference, z } from "astro:content";

// Define a collection of newsletter posts
const cases = defineCollection({
// Define the schema 
    schema: ({ image }) => 
    z.object({
        title: z.string(),
        teaser: z.string().optional(),
        cover_image: image().optional(),
        thumbnail: image().optional(),
        cover_image_alt: z.string().optional(),
        ref: reference('categories').optional(),
        categories: z.array(reference('categories')).optional(),
        // blocks: z.array(z.object()).optional()
    }).passthrough(),
});

// Export
export const collections = {cases};