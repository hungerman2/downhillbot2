import { SlashCommandBuilder } from '@discordjs/builders';
import { checkAuthOnEmote, findImageInMessage } from '../../../methods';
import { showEmoteSample } from '../../../methods/showEmoteSample';

const strings = {
	name: '-이모티콘-등록-테스트',
	description: '-이모티콘-등록-테스트',
	noAttachment:
		'이미지가 없습니다. 링크가 아니라 파일을 올려주세요.\n봇은 최근 100개의 메시지에서만 이미지를 검색합니다.',
};

export const testEmote = {
	name: strings.name,
	data: new SlashCommandBuilder()
		.setName(strings.name)
		.setDescription(strings.description),
	async execute(interaction) {
		if (!(await checkAuthOnEmote(interaction))) return;
		const attachment = await findImageInMessage(interaction);
		if (!attachment) {
			interaction.reply({
				content: strings.noAttachment,
				ephemeral: true,
			});
			return;
		}
		showEmoteSample(interaction, attachment.url);
	},
};
