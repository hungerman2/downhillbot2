import { ContextMenuCommandBuilder } from '@discordjs/builders';
import { Grade } from '@prisma/client';
import { ApplicationCommandType } from 'discord-api-types/v9';
import { Message, MessageContextMenuInteraction } from 'discord.js';
import { context } from '../../../../../../context';
import { Const } from '../../../../../const';

const strings = {
	name: '-이모티콘-삭제',
	noEmote: '메시지 내에 이모티콘이 없습니다.',
	notOwner: '이모티콘을 등록한 사람 또는 운영진만 삭제가능합니다.',
	waitMoreDays: '%d일 뒤 삭제가능합니다.',
	unknown: 'discord api 통신 중 에러',
};

export const deleteEmoteContext = {
	name: strings.name,
	data: new ContextMenuCommandBuilder()
		.setName(strings.name)
		.setType(ApplicationCommandType.Message),

	async execute(interaction: MessageContextMenuInteraction) {
		let message = interaction.targetMessage as Message<boolean>;
		if (message.partial) message = await message.fetch();

		const emotes = findEmotes(message.content);
		if (emotes.length === 0) {
			interaction.reply(strings.noEmote);
			return;
		}

		const adminFlag = await isAdmin(interaction.user.id);
		const removed = [];
		const failed = [];
		const emoteManager = interaction.guild.emojis;
		const grade = await getUserGrade(interaction.user.id);
		if (grade === Grade.NONE) {
			return;
		}

		for (const { name, id } of emotes) {
			const emote = await getEmoteFromId(id);
			if (emote?.ownerId !== interaction.user.id && !adminFlag) {
				failed.push({ name, reason: strings.notOwner });
				continue;
			}
			const remainDays =
				Const.EMOTE_PERIOD[grade] -
				getDaysBetweenDates(new Date(), new Date(emote.date ?? null));
			if (remainDays > 0 && !adminFlag) {
				failed.push({
					name,
					reason: strings.waitMoreDays.replace(
						'%d',
						remainDays.toString()
					),
				});
				continue;
			}

			await emoteManager
				.delete(id)
				.then(() => {
					removed.push({ name });
				})
				.catch((e) => {
					failed.push({
						name,
						reason: strings.unknown,
					});
					console.log(e);
				});
		}

		interaction.reply({
			content: `${emotes.length}개 중 ${
				removed.length
			}개를 삭제하였습니다\n성공 : ${removed
				.map((it) => it.name)
				.join(', ')}\n실패\n${failed
				.map(({ name, reason }) => `${name} : ${reason}`)
				.join('\n')}`,
		});
	},
};

const getUserGrade = async (userId: string) => {
	const prisma = context.prisma;
	const res = await prisma.user.findUnique({
		where: { id: userId },
		select: { grade: true },
	});
	return res.grade;
};

const getDaysBetweenDates = (date1: Date, date2: Date) => {
	return Math.floor((+date1 - +date2) / (1000 * 3600 * 24));
};

const isAdmin = async (userId: string) => {
	const prisma = context.prisma;
	const res = await prisma.user.findUnique({
		select: { isAdmin: true },
		where: {
			id: userId,
		},
	});
	return res ? res.isAdmin : false;
};

const findEmotes = (str: string) => {
	const emoteRegex = /<:\w+:(\d{18}>)?/g;
	const res = str.match(emoteRegex).map((emote) => {
		const arr = emote.split(':');
		arr.shift();
		return { name: arr[0], id: arr[1].replace('>', '') };
	});
	return res;
};

const getEmoteFromId = async (id: string) => {
	const prisma = context.prisma;
	const res = await prisma.emote.findUnique({
		where: { id },
		select: { id: true, ownerId: true, date: true },
	});
	return res;
};
