import "reflect-metadata"
import { Client, Collection, Intents } from "discord.js";
import { buildSchema, Query } from "type-graphql";
import { resolvers } from "../graphql/generated"
import 'dotenv/config'
import express from 'express'
import { ApolloServer } from "apollo-server"
import { PrismaClient } from '@prisma/client'
import { context } from "./context"
import { handleReady, handleGuildMemberUpdate, handleInteractionCreate, handleGuildMemberAdd, handleChannelUpdate } from "./discord/event_handlers"

const PORT = process.env.PORT

async function main() {
    const TOKEN = process.env.DISCORD_TOKEN

    const schema = await buildSchema({
        resolvers,
        validate: false
    })

    const server = new ApolloServer({
        schema,
        context: context,
    })

    const { url } = await server.listen(PORT)
    console.log(`apollo server is running`)

    const client = new Client({
        intents: [Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS
        ], partials: ['MESSAGE', 'REACTION', 'USER', 'GUILD_MEMBER']
    });

    client.once('ready', handleReady)
    client.on('guildMemberUpdate', handleGuildMemberUpdate)
    client.on('interactionCreate', handleInteractionCreate)
    client.on('guildMemberAdd', handleGuildMemberAdd)
    client.on('channelUpdate', handleChannelUpdate)

    client.login(TOKEN);
}

main()