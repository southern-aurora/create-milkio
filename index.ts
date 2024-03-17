import { createMilkioApp, defineApiTestHandler, defineHttpHandler, configMilkio } from "milkio";

export const milkio = await createMilkioApp();

if (configMilkio.milkioRunMode === "DEFAULT") {
  // start http server
  const httpHandler = defineHttpHandler(milkio);
  // if you are using bun
  Bun.serve({
    port: configMilkio.port,
    fetch(request) {
      return httpHandler({ request });
    },
  });
}

if (configMilkio.milkioRunMode === "API_TEST") {
  // decide whether to enter api test mode based on environment
  await defineApiTestHandler(milkio, configMilkio.milkioTest);
}

if (configMilkio.milkioRunMode === "MIGRATE") {
  // (optional) migrate the database structure to the production environment
  // ..
}
