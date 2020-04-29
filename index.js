//Biblioteca de Discord, todo esta en la documentación
const Discord = require('discord.js');

//Requerimos client
//const {Client, RichEmbed} = require('discord.js');


const client = new Discord.Client();

//Escuchar eventos y tb información de la conexion, del bot
client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}`);
    //Estado del bot
    client.user.setStatus('dnd');

    //Estado actual del bot
    console.log(client.user.presence.status);


    //Informacion de todos los canales disponibles en mi servidor
    //const testChannel =  client.channels.find(channel => channel.name === 'test');
    //console.log(testChannel);

});

//Un usuario envia un mensaje a un canal
client.on('message', async message => {
    //Recibiendo el mensaje
    console.log(message.content);
    if(message.content === 'ping'){
        message.reply('pong');
    }

    if(message.content === 'hello'){
        message.channel.send(`Hello ${message.author}!`);
    }

    if(message.content.includes('!test')){
        
        message.channel.send('Feliz, de que tu lo estes testeando')
        message.delete(); //Eliminar mensaje directamente
    }

    if(message.content === '!Bailatore'){
        message.channel.send('https://github.com/AdrianBailador');
    }

    if(message.content === '!pretty'){
        const embed = new Discord.MessageEmbed().setTitle('Adri').setColor('RED');           
            message.channel.send(embed);
      

    }

    //Borrar mensajes
    if(message.content === '!clear'){
       const fetched = await message.channel.messages.fetch({limit: 100});
       message.channel.bulkDelete(fetched);
       console.log('Messages Deleted');
    }

});


client.login('NzA1MDYyNjE5NTE3NjgxNzQ2.XqmO2A.lTO3c30yE3PWZlgP7jI2DWG7ixY');
