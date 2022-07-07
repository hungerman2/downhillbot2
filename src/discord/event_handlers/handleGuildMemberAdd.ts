import { BitField, GuildChannel, GuildMember, PermissionOverwrites, Permissions, PermissionString } from "discord.js";
import { context } from "../../context";

export const handleGuildMemberAdd = async (member: GuildMember) => {
    if (member.partial) {
        await member.fetch()
    }
    if (member.user.bot) return

    const user = await getUserById(member.id)
    if (!user) return

    member.setNickname(user.nickname)

    const roleManager = await member.guild.roles
    // user.roles = [ {id: }, ... ]
    const roles = user.roles.map(it => roleManager.resolve(it.id)).filter(it=>it?.editable)

    // everyone has @everyone role 
    if (roles.length > 1)
        await member.roles.add(roles)

    const channelManager = member.guild.channels
    user.permissions.forEach(async permission => {
        const combined = await combinePermissions(permission.allowed, permission.denied)
        const channel = channelManager.cache.get(permission.channelId) as GuildChannel
        await channel.permissionOverwrites.edit(member.id, combined)
    })
}

// select a user's id, related role's id and channels
const getUserById = async (memberId: string) => {
    const prisma = context.prisma
    const user = await prisma.user.findUnique({
        where: {
            id: memberId
        },
        select: {
            nickname: true,
            roles: {
                select: {
                    id: true
                }
            },
            permissions: true,
        }
    })
    return user
}

const combinePermissions = async (allow: Permissions | string, deny: Permissions | string) => {
    if (typeof allow === 'string') allow = new Permissions(BigInt(allow))
    if (typeof deny === 'string') deny = new Permissions(BigInt(deny))

    const ret = {}
    allow.toArray().forEach(value => ret[value] = true)
    deny.toArray().forEach(value => ret[value] = false)

    return ret
}