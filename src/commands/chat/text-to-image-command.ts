import { ComfyUIClient } from 'comfy-ui-client';
import {
  ChatInputCommandInteraction,
  EmbedBuilder,
  InteractionReplyOptions,
  PermissionsString,
} from 'discord.js';
import { createRequire } from 'node:module';

import { TextToImageModel } from '../../enums/index.js';
import { Language } from '../../models/enum-helpers/language.js';
import { Lang } from '../../services/lang.js';
import { InteractionUtils } from '../../utils/interaction-utils.js';
import { Command, CommandDeferType } from '../command.js';

const require = createRequire(import.meta.url);
let SDXLTurboConfig = require('../../../config/comfyUIWorkflows/sdxl_turbo_tti.json');

export class TextToImageCommand implements Command {
  public names = [Lang.getRef('chatCommands.text-to-image', Language.Default)];
  public deferType = CommandDeferType.PUBLIC;
  public requireClientPerms: PermissionsString[] = [];

  constructor(private comfyClient: ComfyUIClient) {}

  public async execute(intr: ChatInputCommandInteraction): Promise<void> {
    let args = {
      prompt: intr.options.getString(Lang.getRef('arguments.prompt', Language.Default)),
      model: intr.options.getString(
        Lang.getRef('arguments.model', Language.Default)
      ) as TextToImageModel,
    };

    let prompt = {};

    switch (args.model) {
      case TextToImageModel.SDXL_TURBO:
        prompt = structuredClone(SDXLTurboConfig);
        prompt['6'].inputs.text = args.prompt;
        break;
      default:
        prompt = structuredClone(SDXLTurboConfig);
        prompt['6'].inputs.text = args.prompt;
        break;
    }

    await this.comfyClient.connect();

    const imageResponse = await this.comfyClient.getImages(prompt);
    const files = [];

    for (const nodeId of Object.keys(imageResponse)) {
      for (const img of imageResponse[nodeId]) {
        const arrayBuffer = await img.blob.arrayBuffer();
        files.push({ attachment: Buffer.from(arrayBuffer) });
      }
    }

    await InteractionUtils.send(intr, {
      embeds: [
        new EmbedBuilder({
          author: {
            name: intr.user.displayName,
          },
          title: args.prompt,
          description: `Generated with ${args.model ?? 'Stable Diffusion XL Turbo'}`
        }),
      ],
      files: files,
    } as InteractionReplyOptions);

    await this.comfyClient.disconnect();
  }
}
