import redis from "@/database/redis";
import { Ratelimit } from "@upstash/ratelimit";

const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "1m"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default rateLimit;
