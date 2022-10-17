import { Manifest } from "deno-slack-sdk/mod.ts";
import RollWorkflow from "./workflows/roll.ts";

export default Manifest({
  name: "dice",
  description: "Roll a dice",
  icon: "assets/icon.png",
  workflows: [RollWorkflow],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "app_mentions:read",
  ],
});
