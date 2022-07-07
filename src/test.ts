import { CategoryChannel, Client, Guild, GuildChannel, Intents, PermissionOverwriteManager, Permissions, TextChannel } from "discord.js"
import 'dotenv/config'
import express from 'express'

const test = async () =>{
    const TOKEN = process.env.DISCORD_TOKEN

    console.log(TOKEN)

    const client = new Client({
        intents: [Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS
        ], partials: ['MESSAGE', 'REACTION', 'USER', 'GUILD_MEMBER']
    });

    client.login(TOKEN)

    client.once('ready',async (client)=>{
        const guild = client.guilds.cache.at(0)
        const category = guild.channels.cache.at(0) as CategoryChannel
        const channel = category.children.get('851716254212685827') as TextChannel

        // const pManager = channel.permissionOverwrites

        const test ='1234'
        const permissions = new Permissions(test)
        console.log(permissions.toArray())

        // const members = await guild.members.fetch()
        // console.log(channel.name)
        // const mp = channel.permissionsFor('321543961279856640').serialize()
        // console.log(mp)

        // await channel.permissionOverwrites.edit('321543961279856640',mp)

        //await channel.permissionOverwrites.edit('321543961279856640',permissions.serialize())
        //console.log('overwrite')

    })
 }

test()