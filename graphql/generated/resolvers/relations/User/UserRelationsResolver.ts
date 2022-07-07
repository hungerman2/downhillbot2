import * as TypeGraphQL from "type-graphql";
import { Emote } from "../../../models/Emote";
import { Permission } from "../../../models/Permission";
import { Poll } from "../../../models/Poll";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { UserEmotesArgs } from "./args/UserEmotesArgs";
import { UserPermissionsArgs } from "./args/UserPermissionsArgs";
import { UserPollsArgs } from "./args/UserPollsArgs";
import { UserRolesArgs } from "./args/UserRolesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Role], {
    nullable: false
  })
  async roles(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRolesArgs): Promise<Role[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).roles(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Permission], {
    nullable: false
  })
  async permissions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPermissionsArgs): Promise<Permission[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).permissions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Emote], {
    nullable: false
  })
  async emotes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserEmotesArgs): Promise<Emote[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).emotes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Poll], {
    nullable: false
  })
  async polls(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPollsArgs): Promise<Poll[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).polls(args);
  }
}
