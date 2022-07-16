import { DiscordAPIError } from 'discord.js';

const strings = {
	tempEmoteName: 'testemote',
	nameError:
		'이름 형식이 잘못되었습니다.\n영어 소문자, 숫자, _(언더바) 만 사용해주세요.',
	fileSizeError: '256kb 이하의 이미지 파일만 사용가능합니다.',
};

export const showEmoteSample = async (interaction, attachmentURL) => {
	await interaction.deferReply({ ephemeral: true });

	const emoteManager = interaction.guild.emojis;
	const emote = await emoteManager
		.create(attachmentURL, strings.tempEmoteName)
		.catch((e: DiscordAPIError) => {
			if (e.code === 50035) {
				interaction.editReply({ content: strings.nameError });
				return;
			}
			if (e.code === 50045) {
				interaction.editReply({ content: strings.fileSizeError });
				return;
			}
			console.log(e);
		});
	await interaction.editReply({
		content: emote.toString(),
		ephemeral: true,
	});
	await emoteManager.delete(emote);
};
