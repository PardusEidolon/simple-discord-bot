const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with servername!'),
	async execute(interaction) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\n${interaction.user.username}\nYour id: ${interaction.user.id}`);
	},
};