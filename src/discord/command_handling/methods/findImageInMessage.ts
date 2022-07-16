import {
	Collection,
	CommandInteraction,
	MessageAttachment,
	MessageContextMenuInteraction,
} from 'discord.js';

export const findImageInMessage = async (
	interaction: MessageContextMenuInteraction | CommandInteraction
): Promise<MessageAttachment | void> => {
	let attachment;
	if (interaction instanceof MessageContextMenuInteraction) {
		const attachments = interaction.targetMessage.attachments as Collection<
			string,
			MessageAttachment
		>;
		attachment = attachments.find((attachment) =>
			attachment.contentType.startsWith('image')
		);
	}
	if (interaction instanceof CommandInteraction) {
		const messageManager = interaction.channel.messages;
		const messages = await messageManager.fetch({ limit: 100 });
		const message = messages.find(
			(message) =>
				message.author.id === interaction.user.id &&
				message.attachments.some((attachment) =>
					attachment.contentType.startsWith('image')
				)
		);
		if (!message) return;
		attachment = message.attachments.find((attachment) =>
			attachment.contentType.startsWith('image')
		);
	}
	return attachment;
};
