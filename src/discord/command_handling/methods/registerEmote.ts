import { DiscordAPIError, GuildEmoji, MessageAttachment } from 'discord.js';
import { context } from '../../../context';

const strings = {
	success: '등록되었습니다.',
	nameError:
		'이름 형식이 잘못되었습니다.\n영어 소문자, 숫자, _(언더바) 만 사용해주세요.',
	fileSizeError: '256kb 이하의 이미지 파일만 사용가능합니다.',
};

export const registerEmote = async (interaction, attachmentURL, emoteName) => {
	await interaction.deferReply({ ephemeral: true });

	const emoteManager = interaction.guild.emojis;
	emoteManager
		.create(attachmentURL, emoteName)
		.then((emoji: GuildEmoji) => {
			interaction.editReply({ content: strings.success });

			const prisma = context.prisma;
			prisma.emote
				.create({
					data: {
						id: emoji.id,
						ownerId: interaction.user.id,
					},
				})
				.then();
		})
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
};
