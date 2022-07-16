// there is no way to get values from 'select menu' in modal
// to do this, 'select menu' event handler has to be implemented apart from modal

// import { ContextMenuCommandBuilder } from '@discordjs/builders';
// import { ApplicationCommandType } from 'discord-api-types/v9';
// import {
// 	Interaction,
// 	MessageActionRow,
// 	MessageSelectMenu,
// 	Modal,
// 	ModalActionRowComponent,
// 	ModalSubmitInteraction,
// 	UserContextMenuInteraction,
// } from 'discord.js';
// import { context } from '../../../../../../context';

// const strings = {
// 	name: '-이모티콘-삭제',
// 	noEmotes: '등록한 이모티콘이 없습니다.',
// 	modalId: 'deleteEmote',
// 	menuId: 'emoteList',
// };

// // { userid : {...} }
// const data = {};

// export const deleteEmote = {
// 	name: strings.name,
// 	data: new ContextMenuCommandBuilder()
// 		.setName(strings.name)
// 		.setType(ApplicationCommandType.User),

// 	async execute(interaction: UserContextMenuInteraction) {
// 		const emotes = await getEmotes(interaction.targetUser.id);
// 		if (emotes.length === 0) {
// 			interaction.reply({ content: strings.noEmotes, ephemeral: true });
// 			return;
// 		}

// 		const emoteManager = interaction.guild.emojis;
// 		const guildEmojis = emotes.map((it) => emoteManager.resolve(it.id));
// 		data[interaction.user.id] = { guildEmojis };

// 		const modal = new Modal()
// 			.setCustomId(strings.modalId)
// 			.setTitle(strings.name);
// 		const actionRow = new MessageActionRow<ModalActionRowComponent>();
// 		const menu = new MessageSelectMenu()
// 			.setCustomId(strings.menuId)
// 			.addOptions(
// 				guildEmojis.map((emoji) => {
// 					return {
// 						label: emoji.name,
// 						value: emoji.id,
// 					};
// 				})
// 			);
// 		actionRow.addComponents(menu);
// 		modal.addComponents(actionRow);

// 		await interaction.showModal(modal).catch(console.log);
// 	},

// 	modals: {
// 		deleteEmote: (interaction) => {
// 			deleteEmoteModal(interaction);
// 		},
// 	},
// };

// const deleteEmoteModal = async (interaction: ModalSubmitInteraction) => {
// 	const guildEmojiManager = interaction.guild.emojis;
// 	console.log(interaction.fields.getField(strings.menuId));
// };

// const getEmotes = async (ownerId: string) => {
// 	const prisma = context.prisma;

// 	const emotes = await prisma.emote.findMany({
// 		where: {
// 			ownerId,
// 		},
// 	});

// 	return emotes;
// };
