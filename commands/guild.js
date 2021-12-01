const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('guild')
		.setDescription('Replies with guild and number of members'),
	async execute(interaction) {
		await interaction.reply(`server-name: ${interaction.guild.name}
        \nTotal members: ${interaction.guild.memberCount}`);
	},
};