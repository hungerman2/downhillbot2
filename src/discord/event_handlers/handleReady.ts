import { Grade } from "@prisma/client";
import { Client, TextChannel } from "discord.js";
import { context } from "../../context";

export const handleReady = async (client: Client) => {
    console.log(`initializing database..`)
    await init(client)
    console.log(`discord.js client ready.`)
}

const init = async (client: Client) => {
    const prisma = context.prisma

    await initRoles(client)
    await initUsers(client)
}

const initRoles = async (client: Client) => {
    const prisma = context.prisma

    const guilds = (await client.guilds.fetch()).values()

    for (const guild of guilds) {
        const roles = (await (await guild.fetch()).roles.fetch()).values()
        for (let role of roles) {
            const count = await prisma.role.count({ where: { id: role.id } })
            if (count > 0) continue
            await prisma.role.create({
                data: {
                    id: role.id,
                    name: role.name,
                }
            })
        }
    }

}

const initUsers = async (client: Client) => {
    const prisma = context.prisma

    const guilds = client.guilds.cache.values()
    for (const guild of guilds) {
        const members = (await guild.members.fetch()).values()
        for (let member of members) {
            const count = await prisma.user.count({ where: { id: member.id } })
            if (count > 0) continue
            if (member.partial) member = await member.fetch()
            if (member.user.bot) continue
            await prisma.user.create({
                data: {
                    id: member.id,
                    grade: Grade.NONE,
                    isAdmin: false,
                    nickname: member.nickname,
                    roles: { connect: member.roles.cache.map(role => { return { id: role.id } }) }
                }
            })
        }
    }
}