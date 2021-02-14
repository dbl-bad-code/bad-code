const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js'); 


const prefix = '$PO '; 


async function get_country_by_skytext(text) {
    let countries = [result1[0].current]  // list all your countries
    let result = await get_data(countries);
    return result.filter(entry => entry.current.skytext === text)
 }



bot.on('message', message => {

    
    let msg = message.content.toUpperCase(); 
    let sender = message.author; 
    let cont = message.content.slice(prefix.length).split(" "); 
    
    if (msg.startsWith(prefix + 'WEATHER')) { 
        
        if ( message.channel.type === 'dm') {
            return message.reply('I can\'t execute that command inside DMs!');
        }


        weather.find({search: 'Germany', degreeType: 'C'}, function(err, result1) { 
            if (err) message.channel.send(err)
        

            weather.find({search: 'California', degreeType: 'C'}, function(err, result2) { 
                if (err) message.channel.send(err);
                
                weather.find({search: 'Union Square', degreeType: 'C'}, function(err, result3) { 
                    if (err) message.channel.send(err);

                    weather.find({search: 'New York', degreeType: 'C'}, function(err, result4) { 
                        if (err) message.channel.send(err);

                        weather.find({search: 'Sydney', degreeType: 'C'}, function(err, result5) { 
                            if (err) message.channel.send(err);

                            weather.find({search: 'Santa Monica pier', degreeType: 'C'}, function(err, result6) { 
                                if (err) message.channel.send(err);

                                weather.find({search: 'Disneyland, Anaheim', degreeType: 'C'}, function(err, result7) { 
                                    if (err) message.channel.send(err);

                                    weather.find({search: 'Paris', degreeType: 'C'}, function(err, result8) { 
                                        if (err) message.channel.send(err);

                                        weather.find({search: 'Big Ben, London', degreeType: 'C'}, function(err, result9) { 
                                            if (err) message.channel.send(err);

                                            weather.find({search: 'Times Square', degreeType: 'C'}, function(err, result10) { 
                                                if (err) message.channel.send(err);


                                                weather.find({search: 'Chicago Lake Front', degreeType: 'C'}, function(err, result11) { 
                                                    if (err) message.channel.send(err);

                                                    weather.find({search: 'Japan', degreeType: 'C'}, function(err, result12) { 
                                                        if (err) message.channel.send(err);

                                                        weather.find({search: 'Mall of Scandanavia, Sweden', degreeType: 'C'}, function(err, result13) { 
                                                            if (err) message.channel.send(err)

                                                            weather.find({search: 'Victory Memorial Park, Minneapolis', degreeType: 'C'}, function(err, result14) { 
                                                                if (err) message.channel.send(err)

                                                                weather.find({search: 'Germany Mall', degreeType: 'C'}, function(err, result15) { 
                                                                    if (err) message.channel.send(err)

                                                                    weather.find({search: 'San Francisco Pier', degreeType: 'C'}, function(err, result16) { 
                                                                        if (err) message.channel.send(err)

                                                                        weather.find({search: 'Chicago Lake Front', degreeType: 'C'}, function(err, result17) { 
                                                                            if (err) message.channel.send(err)

                                                                            weather.find({search: 'Liberty Park', degreeType: 'C'}, function(err, result18) { 
                                                                                if (err) message.channel.send(err)

                                                                                weather.find({search: 'Tokyo Disneyland', degreeType: 'C'}, function(err, result19) { 
                                                                                    if (err) message.channel.send(err)

                                                                                    weather.find({search: 'Long Beach', degreeType: 'C'}, function(err, result20) { 
                                                                                        if (err) message.channel.send(err)

                                                                                        weather.find({search: '(Park) National Mall, Washington DC', degreeType: 'C'}, function(err, result21) { 
                                                                                            if (err) message.channel.send(err)

                                                                                            weather.find({search: 'Copenhagen, Denmark Mall', degreeType: 'C'}, function(err, result22) { 
                                                                                                if (err) message.channel.send(err)

                                                                                                weather.find({search: 'Den Haag, Netherland', degreeType: 'C'}, function(err, result23) { 
                                                                                                    if (err) message.channel.send(err)

                                                                                                    weather.find({search: 'Korea, 37.5113,127.0980', degreeType: 'C'}, function(err, result24) { 
                                                                                                        if (err) message.channel.send(err)
                                                                                        
                                                                                                        weather.find({search: 'Bidadari, Indonesia', degreeType: 'C'}, function(err, result25) { 
                                                                                                            if (err) message.channel.send(err)






            if (result1 === undefined || result1.length === 0)
            return message.channel.send("**Invalid** location")
            
           
            var current1 = result1[0].current; 
            var location = result1[0].location; 
            var current2 = result2[0].current; 
            var location = result2[0].location; 
            var current3 = result3[0].current;
            var current4 = result4[0].current;
            var current5 = result5[0].current;
            var current6 = result6[0].current;
            var current7 = result7[0].current;
            var current8 = result8[0].current;
            var current9 = result9[0].current;
            var current10 = result10[0].current;
            var current11 = result11[0].current;
            var current12 = result12[0].current;
            var current13 = result13[0].current;
            var current14 = result14[0].current;
            var current15 = result15[0].current;
            var current16 = result16[0].current;
            var current17 = result17[0].current;
            var current18 = result18[0].current;
            var current19 = result19[0].current;
            var current20 = result20[0].current;
            var current21 = result21[0].current;
            var current22 = result22[0].current;
            var current23 = result23[0].current;
            var current24 = result24[0].current;
            var current25 = result25[0].current;




            const embed = new Discord.MessageEmbed()
                .setDescription(`Boosted types:\n*Snow = Ice, Steel\nSunny = Grass, Ground, Fire\nClear = Grass, Ground, Fire\nWindy = Dragon, Flying, Psychic\nParty Cloudy = Normal, Rock\nCloudy = Fairy, Fighting, Poison\nFog = Dark, Ghost\nRain = Water, Electric, Bug*`) 
                .setTitle('Countries/cities ranked by weather type;') 
                .addField(`**${current1.observationpoint}:**`, `${current1.skytext}`)
                .addField(`**${current2.observationpoint}:**`, `${current2.skytext}`)
                .addField(`**${current3.observationpoint}:**`, `${current3.skytext}`)
                .addField(`**${current4.observationpoint}:**`, `${current4.skytext}`)
                .addField(`**${current5.observationpoint}:**`, `${current5.skytext}`)
                .addField(`**${current6.observationpoint}:**`, `${current6.skytext}`)
                .addField(`**${current7.observationpoint}:**`, `${current7.skytext}`)
                .addField(`**${current8.observationpoint}:**`, `${current8.skytext}`)
                .addField(`**${current9.observationpoint}:**`, `${current9.skytext}`)
                .addField(`**${current10.observationpoint}:**`, `${current10.skytext}`)
                .addField(`**${current11.observationpoint}:**`, `${current11.skytext}`)
                .addField(`**${current12.observationpoint}:**`, `${current12.skytext}`)
                .addField(`**${current13.observationpoint}:**`, `${current13.skytext}`)
                .addField(`**${current14.observationpoint}:**`, `${current14.skytext}`)
                .addField(`**${current15.observationpoint}:**`, `${current15.skytext}`)
                .addField(`**${current16.observationpoint}:**`, `${current16.skytext}`)
                .addField(`**${current17.observationpoint}:**`, `${current17.skytext}`)
                .addField(`**${current18.observationpoint}:**`, `${current18.skytext}`)
                .addField(`**${current19.observationpoint}:**`, `${current19.skytext}`)
                .addField(`**${current20.observationpoint}:**`, `${current20.skytext}`)
                .addField(`**${current21.observationpoint}:**`, `${current21.skytext}`)
                .addField(`**${current22.observationpoint}:**`, `${current22.skytext}`)
                .addField(`**${current23.observationpoint}:**`, `${current23.skytext}`)
                .addField(`**${current24.observationpoint}:**`, `${current24.skytext}`)
                .addField(`**${current25.observationpoint}:**`, `${current25.skytext}`)
                .setThumbnail('https://media.giphy.com/media/CKsIi206Ntz4k/giphy.gif')
                .setColor('#FF0000') 
                
               
                 message.channel.send({embed});


                 bot.on('message', message => {

                    if(message.content.startsWith(prefix + 'Sunny')) {

                        get_country_by_skytext('Sunny');

                        


                

                                                                                                        
                 }});
                                                                                                        })

                                                                                                    })
                                                                                                })

                                                                                            })
                                                                                        })
                                                                                    })

                                                                                })
                                                                            })

                                                                        })
                                                                    })
                                                                })
                                                            })

                                                        })

                                                    })

                                                })

                                            })
                                        })
                                    })
                                    })

                            })
                
                        })
                });
       
                });

    });
})

 }})


bot.on('ready', () => {

    
    console.log('Bot started.');

});