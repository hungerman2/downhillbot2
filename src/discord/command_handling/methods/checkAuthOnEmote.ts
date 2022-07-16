import { Grade } from '@prisma/client';
import { GuildMember } from 'discord.js';
import { context } from '../../../context';
import { Const } from '../../const';

const strings = {
	notPassed: '테스트 통과자만 사용할 수 있습니다.',
	exceedLimit: '등록 개수를 초과하였습니다.',
};

export const checkAuthOnEmote = async (interaction) => {
	const member = interaction.member as GuildMember;

	const grade = await getMemberGrade(member);
	if (grade === Grade.NONE) {
		await interaction.reply({
			content: strings.notPassed,
			ephemeral: true,
		});
		return false;
	}

	if ((await getEmoteCount(member)) >= getEmoteCountPerGrade(grade)) {
		await interaction.reply({
			content: strings.exceedLimit,
			ephemeral: true,
		});
		return false;
	}
	return true;
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
	return Const.EMOTE_LIMIT[grade] ?? 0;
};
