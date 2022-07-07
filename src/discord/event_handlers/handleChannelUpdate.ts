import { DMChannel, GuildChannel, PermissionOverwrites, Permissions } from "discord.js";
import { context } from "../../context";

export const handleChannelUpdate = async (oldChannel: DMChannel | GuildChannel, newChannel: DMChannel | GuildChannel) => {
    if (oldChannel instanceof DMChannel) return
    if (newChannel instanceof DMChannel) return

    const oldPermission = oldChannel.permissionOverwrites.cache
    const newPermission = newChannel.permissionOverwrites.cache

    // someone is deleted in permission list
    if (oldPermission.size != newPermission.size) {
        const deletedMembers = oldPermission.filter((value, key) => { return value.type === 'member' && !newPermission.has(key) })
        deletedMembers.forEach(async (value, key) => {
            await updateUserPermission(newChannel.id, value)
        })
    }

    // someone's permission on channel is updated 
    else {
        const updatedMembers = newPermission.filter((value, key) => {
            const oldValue = oldPermission.get(key)
            return value.type === 'member' && (!oldValue.allow.equals(value.allow) || !oldValue.deny.equals(value.deny))
        })
        updatedMembers.forEach(async (value, key) => {
            await updateUserPermission(newChannel.id, value)
        })
    }
}

const updateUserPermission = async (channelId:string, permissionOverwrites: PermissionOverwrites) => {
    const prisma = context.prisma
    const userId = permissionOverwrites.id
    const allowed = permissionOverwrites.allow.valueOf().toString()
    const denied = permissionOverwrites.deny.valueOf().toString()

    await prisma.permission.upsert({
        where:{channelId_userId:{channelId,userId}},
        update:{
            allowed, denied,
        },
        create:{
            channelId, allowed, denied, userId,
        }
    })
}