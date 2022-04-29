const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('api')
        .setDescription('Replies with API URL'),
    async execute(interaction) {
        await interaction.reply('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces');

    },

}