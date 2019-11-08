import { serve } from "https://deno.land/std@v0.22.0/http/server.ts";
import { greet } from "./utils.ts"

const body = new TextEncoder().encode(`${greet("Ondrej")}\n`);
const server = serve(":8000");

console.log("http://localhost:8000/");

for await (const req of server) {
  req.respond({ body });
}
