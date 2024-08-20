import { APIApplicationCommandBasicOption, ApplicationCommandOptionType } from 'discord.js';

import { DevCommandName, HelpOption, InfoOption, TextToImageModel } from '../enums/index.js';
import { Language } from '../models/enum-helpers/index.js';
import { Lang } from '../services/index.js';

export class Args {
  public static readonly DEV_COMMAND: APIApplicationCommandBasicOption = {
    name: Lang.getRef('arguments.command', Language.Default),
    name_localizations: Lang.getRefLocalizationMap('arguments.command'),
    description: Lang.getRef('argDescs.devCommand', Language.Default),
    description_localizations: Lang.getRefLocalizationMap('argDescs.devCommand'),
    type: ApplicationCommandOptionType.String,
    choices: [
      {
        name: Lang.getRef('devCommandNames.info', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('devCommandNames.info'),
        value: DevCommandName.INFO,
      },
    ],
  };
  public static readonly HELP_OPTION: APIApplicationCommandBasicOption = {
    name: Lang.getRef('arguments.option', Language.Default),
    name_localizations: Lang.getRefLocalizationMap('arguments.option'),
    description: Lang.getRef('argDescs.helpOption', Language.Default),
    description_localizations: Lang.getRefLocalizationMap('argDescs.helpOption'),
    type: ApplicationCommandOptionType.String,
    choices: [
      {
        name: Lang.getRef('helpOptionDescs.contactSupport', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('helpOptionDescs.contactSupport'),
        value: HelpOption.CONTACT_SUPPORT,
      },
      {
        name: Lang.getRef('helpOptionDescs.commands', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('helpOptionDescs.commands'),
        value: HelpOption.COMMANDS,
      },
    ],
  };
  public static readonly INFO_OPTION: APIApplicationCommandBasicOption = {
    name: Lang.getRef('arguments.option', Language.Default),
    name_localizations: Lang.getRefLocalizationMap('arguments.option'),
    description: Lang.getRef('argDescs.helpOption', Language.Default),
    description_localizations: Lang.getRefLocalizationMap('argDescs.helpOption'),
    type: ApplicationCommandOptionType.String,
    choices: [
      {
        name: Lang.getRef('infoOptions.about', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('infoOptions.about'),
        value: InfoOption.ABOUT,
      },
      {
        name: Lang.getRef('infoOptions.translate', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('infoOptions.translate'),
        value: InfoOption.TRANSLATE,
      },
    ],
  };
  public static readonly TEXT_TO_IMAGE_MODEL: APIApplicationCommandBasicOption = {
    name: Lang.getRef('arguments.model', Language.Default),
    name_localizations: Lang.getRefLocalizationMap('arguments.model'),
    description: Lang.getRef('argDescs.textToImageModel', Language.Default),
    description_localizations: Lang.getRefLocalizationMap('argDescs.textToImageModel'),
    type: ApplicationCommandOptionType.String,
    choices: [
      {
        name: Lang.getRef('textToImageModels.flux', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('textToImageModels.flux'),
        value: TextToImageModel.FLUX,
      },
      {
        name: Lang.getRef('textToImageModels.flux', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('textToImageModels.sdxl_turbo'),
        value: TextToImageModel.SDXL_TURBO,
      },
    ],
  };
  public static readonly TEXT_TO_IMAGE_PROMPT: APIApplicationCommandBasicOption = {
    name: Lang.getRef('arguments.prompt', Language.Default),
    name_localizations: Lang.getRefLocalizationMap('arguments.prompt'),
    description: Lang.getRef('argDescs.textToImagePrompt', Language.Default),
    description_localizations: Lang.getRefLocalizationMap('argDescs.textToImagePrompt'),
    type: ApplicationCommandOptionType.String,
  };
}
