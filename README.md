# dice

Roll a dice on Next-gen Slack platform

## Install

1. Fill in Slack Channel IDs where you want to roll a dice in a trigger file.
1. Deploy and create triggers.
   ```sh
   slack deploy
   slack trigger create --trigger-def triggers/roll.ts
   ```
1. Set environment variables.
   ```sh
   slack env add channel-id [CHANNEL_ID_TO_ROLL_A_DICE]
   ```
