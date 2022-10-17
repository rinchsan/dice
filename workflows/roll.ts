import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { RollFunctionDefinition } from "../functions/roll.ts";

const RollWorkflow = DefineWorkflow({
  callback_id: "roll_workflow",
  title: "Roll a dice",
  description: "Roll a dice",
  input_parameters: {
    properties: {
      text: {
        type: Schema.types.string,
      },
    },
    required: ["text"],
  },
});

RollWorkflow.addStep(RollFunctionDefinition, {
  text: RollWorkflow.inputs.text,
});

export default RollWorkflow;
