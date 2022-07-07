import { SlashCommandBuilder } from '@discordjs/builders';
import { Grade } from '@prisma/client';
import { context } from '../../../../context';

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
		interaction.reply(res);
	},
};

const getAllUserNicknameByGrade = async () => {
	const grades = [Grade.NORMAL, Grade.ELITE, Grade.PRO];
	const ret: any[] = [];
	for (const grade of grades) {
		ret.push(await getUserNicknameByGrade(grade));
	}
	return ret;
};

const getUserNicknameByGrade = async (grade: Grade) => {
	const prisma = context.prisma;
	const ret = await prisma.user.findMany({
		select: {
			nickname: true,
		},
		where: {
			grade,
		},
	});
	return ret;
};
