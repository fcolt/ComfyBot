import { ChatInputCommandInteraction, EmbedBuilder, PermissionsString } from 'discord.js';

import { TextToImageModel } from '../../enums/index.js';
import { Language } from '../../models/enum-helpers/language.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/lang.js';
import { InteractionUtils } from '../../utils/interaction-utils.js';
import { Command, CommandDeferType } from '../command.js';
import { Logger } from '../../services/logger.js';

export class TextToImageCommand implements Command {
  public names = [Lang.getRef('chatCommands.text-to-image', Language.Default)];
  public deferType = CommandDeferType.PUBLIC;
  public requireClientPerms: PermissionsString[] = [];

  public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
    let args = {
      prompt: intr.options.getString(
        Lang.getRef('arguments.prompt', Language.Default)
      ),
      model: intr.options.getString(
        Lang.getRef('arguments.model', Language.Default)
      ) as TextToImageModel
    };
  }
}
