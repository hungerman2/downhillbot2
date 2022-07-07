import { ContextMenuCommandBuilder } from '@discordjs/builders';
import { ApplicationCommandType } from 'discord-api-types/v9';
import {
	MessageContextMenuInteraction,
	Collection,
	MessageAttachment,
} from 'discord.js';

const strings = {
	name: '-이모티콘-등록-테스트',
	noAttachment: '이미지가 없습니다. 링크가 아니라 파일을 올려주세요.',
	tempName: 'faiosnfoai',
};

export const registerEmote = {
	name: strings.name,
	data: new ContextMenuCommandBuilder()
		.setName(strings.name)
		.setType(ApplicationCommandType.Message),

	async execute(interaction: MessageContextMenuInteraction) {
		const attachments = interaction.targetMessage.attachments as Collection<
			string,
			MessageAttachment
		>;

		const attachment = attachments.find((value) =>
			value.contentType.startsWith('image')
		);

		if (!attachment) {
			await interaction.reply(strings.noAttachment);
			return;
		}

		const emojiManager = interaction.guild.emojis;
		const emoji = await emojiManager.create(
			attachment.url,
			strings.tempName
		);
		await interaction.reply({ content: emoji.toString() });
		await emoji.delete();
	},
};
