import dotenv from "dotenv";
dotenv.config();

export const config = {
  baseURL: process.env.BASE_URL || "https://studio.autonomyai.io",
  TEST_EMAIL: process.env.TEST_EMAIL || "undefined",
  TEST_PASSWORD: process.env.TEST_PASSWORD || "undefined"
};