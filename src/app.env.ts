import * as dotenv from "dotenv";

dotenv.config();

const env = {
  JWT_SECRET: process.env.JWT_HASH_SECRET as string,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN as string,
  POSTGRES_USER: process.env.POSTGRES_USER as string,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD as string,
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE as string,
};

export default Object.freeze(env);
