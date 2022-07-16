import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import {
	checkAuthOnEmote,
	findImageInMessage,
	registerEmote as regEmote,
} from '../../../methods';

const strings = {
	name: '-이모티콘-등록',
	description: '이모티콘 등록',
	noAttachment:
		'이미지가 없습니다. 링크가 아니라 파일을 올려주세요.\n봇은 최근 100개의 메시지에서만 이미지를 검색합니다.',
	optionName: '이름',
};

export const registerEmoteSlash = {
	name: strings.name,
	data: new SlashCommandBuilder()
		.setName(strings.name)
		.setDescription(strings.description)
		.addStringOption((option) =>
			option
				.setName(strings.optionName)
				.setDescription('.')
				.setRequired(true)
		),

	async execute(interaction: CommandInteraction) {
		if (!(await checkAuthOnEmote(interaction))) return;
		const attachment = await findImageInMessage(interaction);
		if (!attachment) {
			interaction.reply({
				content: strings.noAttachment,
				ephemeral: true,
			});
			return;
		}
		const emoteName = interaction.options.get(strings.optionName).value;
		regEmote(interaction, attachment.url, emoteName);
	},
};
