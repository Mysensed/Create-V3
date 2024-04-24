import { RateLimiter } from "limiter"

export const limiter = new RateLimiter({ 
    tokensPerInterval: 150,
    interval: "min",
    fireImmediately: true,
});
