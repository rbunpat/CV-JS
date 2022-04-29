//store api url in a constant called api_url
//import fetch
const fetch = require('node:fetch');
const api_url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";
//discordjs things
const { SlashCommandBuilder } = require('@discordjs/builders');
//import SlashCommandBuilder from '@discordjs/builders';
//var cmdresult = {}; 
//define function to get data from api
async function getapi(url) {
    
    //get and store the response from api
    const response = await fetch(url);
    
    //convert the stored data to json format
    var data = await response.json();
    //declare a variable to store the data
    var txnDate = data[59]['txn_date'];
    var newcase = data[59]['new_case'];
    var totalcase = data[59]['total_case'];
    var newdeath = data[59]['new_death'];
    var totaldeath = data[59]['total_death'];
    var updateTime = data[59]['update_date'];
    //console.log('Announce Date =', cmdresult.txnDate);
    /*console.log(newcase);
    console.log(totalcase);
    console.log(newdeath);
    console.log(totaldeath);
    console.log(updateTime);*/

}

module.exports = {
    data:new SlashCommandBuilder()
        .setName('covid')
        .setDescription('Replies with Suratthani Covid-19 Information'),
    async execute(interaction) {
        getapi(api_url);
        await interaction.reply(getapi.totalcase);

    },

}
//calling the get data function
getapi(api_url);
//consolelog the txnDate
//console.log(cmdresult.txnDate);