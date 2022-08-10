FROM denoland/deno:alpine

EXPOSE 8080
WORKDIR /app
USER deno
COPY mod.ts ./
RUN deno cache mod.ts

CMD ["run", "--allow-env=NODE_NAME,POD_NAME,POD_NAMESPACE,POD_IP,POD_SERVICE_ACCOUNT", "--allow-net", "mod.ts"]