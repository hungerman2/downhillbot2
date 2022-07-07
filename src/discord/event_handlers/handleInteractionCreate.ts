import { Interaction } from "discord.js";
import * as commands from "../command_handling/commands";

// commandMap = { commandName(kr) : commandObject }
const commandMap = (() => {
	const ret = {};
	Object.values(commands).forEach((command) => (ret[command.name] = command));
	return ret;
})();

export const handleInteractionCreate = async (interaction: Interaction) => {
	if (!interaction.isCommand() && !interaction.isMessageContextMenu()) return;

	const commandName = interaction.commandName;

	if (!(commandName in commandMap)) return;

	commandMap[commandName].execute(interaction);
};
