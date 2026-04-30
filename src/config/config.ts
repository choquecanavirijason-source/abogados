import { z } from "zod";

const configSchema = z.looseObject({
  NEXT_PUBLIC_API_URL: z.url().default("http://localhost:4002"),
  NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3002"),
});

const { data, error, success } = configSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

if (error || !success) {
  console.error(`Config error: ${error.message}`);
  if (typeof window === "undefined") {
    throw new Error(`Config error: ${error.message}`);
  }
}

export const config = { 
  apiUrl: data?.NEXT_PUBLIC_API_URL,
  appUrl: data?.NEXT_PUBLIC_APP_URL,
}