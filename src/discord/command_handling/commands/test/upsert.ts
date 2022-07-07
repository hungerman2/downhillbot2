import { SlashCommandBuilder } from '@discordjs/builders';
import { Grade } from '@prisma/client';
import { context } from '../../../../context';

const strings = {
	name: '-테스트-합격자-등록',
	description: '테스트 합격자 등록',
	passer: '합격자',
	grade: '종류',
};

export const upsertPasser = {
	name: strings.name,
	data: new SlashCommandBuilder()
		.setName(strings.name)
		.setDescription(strings.description)
		.addUserOption((option) =>
			option.setName(strings.passer).setDescription('.').setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName(strings.grade)
				.setDescription('.')
				.setRequired(true)
				.addChoices(
					{ name: Grade.NORMAL, value: Grade.NORMAL },
					{ name: Grade.ELITE, value: Grade.ELITE },
					{ name: Grade.PRO, value: Grade.PRO }
				)
		),
	async execute(interaction) {
		const prisma = context.prisma;
		const options = interaction.options;
		const member = options.get(strings.passer).member;
		const grade = options.get(strings.grade).value;

		prisma.user
			.update({
				where: { id: member.id },
				data: { grade },
			})
			.then(() => {
				interaction.reply('등록되었습니다.');
			})
			.catch(console.log);
	},
};
