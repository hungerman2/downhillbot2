import { ContextMenuCommandBuilder } from '@discordjs/builders';
import { Grade } from '@prisma/client';
import { randomInt } from 'crypto';
import { ApplicationCommandType } from 'discord-api-types/v9';
import {
	MessageActionRow,
	MessageContextMenuInteraction,
	GuildMember,
	Collection,
	MessageAttachment,
	Message,
	ReplyMessageOptions,
	MessageButton,
	ButtonInteraction,
	MessageOptions,
} from 'discord.js';
import { MessageButtonStyles } from 'discord.js/typings/enums';
import { context } from '../../../../context';
import { Const } from '../../../const';

const strings = {
	name: '-이모티콘-등록',
	noAttachment: '이미지가 없습니다. 링크가 아니라 파일을 올려주세요.',
	tempName: 'faiosnfoai',
	notPassed: '테스트 통과자만 사용할 수 있습니다.',
	exceedLimit: '등록 개수를 초과하였습니다.',
	request: '등록하시겠습니까?',
};

export const registerEmote = {
	name: strings.name,
	data: new ContextMenuCommandBuilder()
		.setName(strings.name)
		.setType(ApplicationCommandType.Message),

	async execute(interaction: MessageContextMenuInteraction) {
		const member = interaction.member as GuildMember;

		const attachments = interaction.targetMessage.attachments as Collection<
			string,
			MessageAttachment
		>;

		const attachment = attachments.find((value, key) =>
			value.contentType.startsWith('image')
		);
		if (!attachment) {
			await interaction.reply(strings.noAttachment);
			return;
		}

		// const emojiManager = interaction.guild.emojis;
		// const emoji = await emojiManager.create(
		// 	attachment.url,
		// 	strings.tempName
		// );

		const reqestMessageOption: MessageOptions = {
			content: strings.request,
		};

		const actionRow = new MessageActionRow();
		const yesButton = new MessageButton()
			.setLabel('Yes')
			.setStyle('PRIMARY')
			.setCustomId(`Custom${randomInt(0, 100)}`);
		actionRow.addComponents(yesButton);
		reqestMessageOption.components = [actionRow];
	},
};

const getMemberGrade = async (member: GuildMember) => {
	const prisma = context.prisma;
	const grade = (
		await prisma.user.findUnique({
			where: { id: member.id },
			select: { grade: true },
		})
	).grade;
	return grade;
};

const getEmoteCount = async (member: GuildMember) => {
	const prisma = context.prisma;
	const count = await prisma.emote.count({
		where: { ownerId: member.id },
	});
	return count;
};

const getEmoteCountPerGrade = (grade: Grade) => {
	if (grade === Grade.NORMAL) return Const.EMOTE_LIMIT_NORMAL;
	if (grade === Grade.ELITE) return Const.EMOTE_LIMIT_ELITE;
	if (grade === Grade.PRO) return Const.EMOTE_LIMIT_PRO;
	return 0;
};
