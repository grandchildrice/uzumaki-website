export const Env = {
  BaseUrl: process.env.BASE_URL || "http://localhost:3000",
  NotionToken: process.env.NOTION_TOKEN,
} as const;
