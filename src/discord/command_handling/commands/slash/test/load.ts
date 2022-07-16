import { SlashCommandBuilder } from '@discordjs/builders';
import { Grade } from '@prisma/client';
import { context } from '../../../../../context';

const strings = {
	name: '-테스트-합격자-조회',
	description: '테스트 합격자 조회',
};

export const loadPasser = {
	name: strings.name,
	data: new SlashCommandBuilder()
		.setName(strings.name)
		.setDescription(strings.description),
	async execute(interaction) {
		const res = await getAllUserNicknameByGrade();
		console.log(res);
		interaction.reply(',');
	},
};

const getAllUserNicknameByGrade = async () => {
	const grades = [Grade.NORMAL, Grade.ELITE, Grade.PRO];
	let ret = {};
	for (const grade of grades) {
		ret = { ...ret, ...(await getUserNicknameByGrade(grade)) };
	}
	return ret;
};

const getUserNicknameByGrade = async (grade: Grade) => {
	const prisma = context.prisma;
	let ret = {};
	const nicknames = await prisma.user.findMany({
		select: {
			nickname: true,
		},
		where: {
			grade,
		},
	});
	ret[grade] = nicknames.map((value) => value.nickname);
	return ret;
};
