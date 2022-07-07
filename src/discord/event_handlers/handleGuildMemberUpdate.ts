import { Prisma } from "@prisma/client";
import { GuildMember } from "discord.js";
import { Grade, User, UserCreateInput } from "../../../graphql/generated";
import { context } from "../../context";

export const handleGuildMemberUpdate = async (oldMember: GuildMember, newMember: GuildMember) => {
    if(newMember.partial){
        newMember = await newMember.fetch()
    }
    if(newMember.user.bot) return
    await upsertUser(newMember)
}

const upsertUser = async (member: GuildMember) => {
    const prisma = context.prisma

    const tmpUser = {
        id: member.id,
        nickname: member.displayName
    }

    await prisma.user.upsert({
        where: {
            id: member.id,
        },
        update: {
            ...tmpUser,
            roles: {
                set: [],
            }
        },
        create: {
            ...tmpUser,
            isAdmin: false,
            grade: Grade.NONE,
        }
    })

    await prisma.user.update({
        where: { id: member.id },
        data: {
            roles: {
                connectOrCreate:
                    member.roles.cache.map(role => {
                        return {
                            where: { id: role.id },
                            create: { id: role.id, name: role.name},
                        }
                    })

            }
        }
    })

}