import { ContextMenuCommandBuilder } from '@discordjs/builders';
import { ApplicationCommandType } from 'discord-api-types/v9';
import {
	GuildMember,
	MessageActionRow,
	MessageContextMenuInteraction,
	Modal,
	ModalActionRowComponent,
	ModalSubmitInteraction,
	TextInputComponent,
} from 'discord.js';
import {
	checkAuthOnEmote,
	findImageInMessage,
	registerEmote as regEmote,
} from '../../../../methods';

const strings = {
	name: '-이모티콘-등록',
	noAttachment: '이미지가 없습니다. 링크가 아니라 파일을 올려주세요.',
	tempName: 'faiosnfoai',
	emoteName: '이모티콘 이름을 입력해주세요',
	modalId: 'registerEmote',
	nameInputId: 'emoteName',
};

const data = {};

export const registerEmoteContext = {
	name: strings.name,
	data: new ContextMenuCommandBuilder()
		.setName(strings.name)
		.setType(ApplicationCommandType.Message),

	async execute(interaction: MessageContextMenuInteraction) {
		const member = interaction.member as GuildMember;

		if (!(await checkAuthOnEmote(interaction))) return;

		const attachment = await findImageInMessage(interaction);
		if (!attachment) {
			interaction.reply({
				content: strings.noAttachment,
				ephemeral: true,
			});
			return;
		}

		data[member.id] = { attachment: attachment };

		const modal = new Modal()
			.setCustomId(strings.modalId)
			.setTitle(strings.name);
		const actionRow = new MessageActionRow<ModalActionRowComponent>();
		const textInput = new TextInputComponent()
			.setCustomId(strings.nameInputId)
			.setLabel(strings.emoteName)
			.setStyle('SHORT')
			.setRequired(true);
		actionRow.addComponents(textInput);
		modal.addComponents(actionRow);

		await interaction.showModal(modal).catch(console.log);
	},

	modals: {
		registerEmote: (interaction) => {
			registerEmoteModal(interaction);
		},
	},
};

const registerEmoteModal = async (interaction: ModalSubmitInteraction) => {
	const attachment = data[interaction.user.id].attachment;
	const emoteName = interaction.fields.getTextInputValue(strings.nameInputId);

	regEmote(interaction, attachment.url, emoteName);
};
