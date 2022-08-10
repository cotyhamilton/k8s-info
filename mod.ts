import { serve } from "https://deno.land/std@0.151.0/http/server.ts";

const port = 8080;

const handler = (): Response => {
    const body = JSON.stringify({
        NodeName: Deno.env.get("NODE_NAME") || "Error: node name unavailable",
        PodName: Deno.env.get("POD_NAME") || "Error: pod name unavailable",
        PodNameSpace: Deno.env.get("POD_NAMESPACE") || "Error: pod namespace unavailable",
        PodIP: Deno.env.get("POD_IP") || "Error: pod ip unavailable",
        PodServiceAccount: Deno.env.get("POD_SERVICE_ACCOUNT") || "Error: pod service account unavailable"
    }, null, 2);
    return new Response(body, { status: 200 });
};

console.log("HTTP webserver running");
await serve(handler, { port });