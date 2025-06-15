import Redis from "ioredis";
import dotenv from "dotenv";
// dotenv.config({path:"C:/Users/sanje/Desktop/PersonalProjects/ecomsite/.env"});
dotenv.config({path:"../../.env"});
// console.log(process.env.database)
// console.log(process.env.REDISS_URL)
export const redis = new Redis(process.env.REDISS_URL);
await redis.set('foot', 'ball');



// import Redis from "ioredis"

// const client = new Redis("rediss://default:AaKtAAIjcDFlOTM2OGJiYjNlN2Q0ZWUzYTkyZTMyZDI5NjM4OTQ1NXAxMA@known-drake-41645.upstash.io:6379");
// await client.set('foo', 'bar');