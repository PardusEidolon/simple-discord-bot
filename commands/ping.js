const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yeet')
		.setDescription('Replies with yeet!'),
	async execute(interaction) {
		await interaction.reply('yeet!');
	},
};