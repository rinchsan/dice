import { Trigger } from "deno-slack-api/types.ts";
import RollWorkflow from "../workflows/roll.ts";

const trigger: Trigger<typeof RollWorkflow.definition> = {
  type: "event",
  name: "Roll a dice",
  description: "Roll a dice",
  workflow: "#/workflows/roll_workflow",
  inputs: {
    text: {
      value: "{{data.text}}",
    },
  },
  event: {
    event_type: "slack#/events/app_mentioned",
    channel_ids: [""], // Fill in channel ids to roll
  },
};

export default trigger;
