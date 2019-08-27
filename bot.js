const Discord = require('discord.js');
var prefix ="-";
const db = require('quick.db');
const client = new Discord.Client();
const giphy = require('giphy-api')();
const googl = require('goo.gl'); 
const translate = require('google-translate-api'); 
const fs = require("fs");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");
const { Client, Util } = require('discord.js');
const UserBlocked = new Set();
const jimp = require('jimp');
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map();
const zalgo = require('zalgolize');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat');
 const pretty = require('pretty-ms') 
,ti={}
,spee={};

client.on('message',zaid => {
   if(zaid.content === prefix + "closeroom") {
   if(!zaid.channel.guild) return zaid.channel.send('**This command is only done on servers**');
   if(!zaid.member.hasPermission('MANAGE_MESSAGES')) return zaid.channel.send('**:x: - No Permissions ! **');
    zaid.channel.overwritePermissions(zaid.guild.id, {
    SEND_MESSAGES: false
    }).then(() => {
    zaid.channel.send("**:white_check_mark: | Channel Closed :lock:**")
});
   }
   if(zaid.content === prefix + "openroom") {
   if(!zaid.channel.guild) return zaid.channel.send('**This command is only done on servers**');
   if(!zaid.member.hasPermission('MANAGE_MESSAGES')) return zaid.channel.send(**:x: - No Permissions ! **');
    zaid.channel.overwritePermissions(zaid.guild.id, {
    SEND_MESSAGES: true
    }).then(() => {
    zaid.channel.send("**:white_check_mark: | Channel Opened :unlock:**")
 });
 }      
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
