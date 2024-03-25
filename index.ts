import { configMilkio } from "./src/config/milkio"
import { createMilkioApp, defineHttpHandler, envToNumber, executeApiTests } from "milkio"
import { env, exit } from "node:process"

export const milkio = await createMilkioApp()

switch (configMilkio.runMode) {
  default: {
    // start http server
    const httpHandler = defineHttpHandler(milkio)
    // if you are using Bun
    Bun.serve({
      port: envToNumber(env.PORT, 9000),
      fetch(request) {
        return httpHandler({ request })
      }
    })
    break
  }
  case "API_TEST": {
    // decide whether to enter api test mode based on environment
    await executeApiTests(milkio, configMilkio.apiTestPath)
    exit(0)
  }
}
