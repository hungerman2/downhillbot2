import { ContextMenuCommandBuilder } from '@discordjs/builders';
import { ApplicationCommandType } from 'discord-api-types/v9';
import {
	MessageContextMenuInteraction,
	Collection,
	MessageAttachment,
} from 'discord.js';
import { findImageInMessage } from '../../../../methods';
import { showEmoteSample } from '../../../../methods/showEmoteSample';

const strings = {
	name: '-이모티콘-등록-테스트',
	noAttachment: '이미지가 없습니다. 링크가 아니라 파일을 올려주세요.',
};

export const registerEmote = {
	name: strings.name,
	data: new ContextMenuCommandBuilder()
		.setName(strings.name)
		.setType(ApplicationCommandType.Message),

	async execute(interaction: MessageContextMenuInteraction) {
		const attachment = await findImageInMessage(interaction);

		if (!attachment) {
			await interaction.reply(strings.noAttachment);
			return;
		}

		showEmoteSample(interaction, attachment.url);
	},
};
