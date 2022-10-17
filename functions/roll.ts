import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const RollFunctionDefinition = DefineFunction({
  callback_id: "roll_function",
  title: "Roll a dice",
  description: "Roll a dice",
  source_file: "functions/roll.ts",
  input_parameters: {
    properties: {
      text: {
        type: Schema.types.string,
      },
    },
    required: ["text"],
  },
  output_parameters: {
    properties: {},
    required: [],
  },
});

export default SlackFunction(
  RollFunctionDefinition,
  async ({ inputs, env, client }) => {
    if (!inputs.text.includes("roll")) {
      return { outputs: {} };
    }

    const r = Math.random();
    const dice_number = Math.ceil(6 * r);

    await client.chat.postMessage({
      channel: env["channel-id"],
      text: dice_number.toString(),
    });

    return { outputs: {} };
  },
);
