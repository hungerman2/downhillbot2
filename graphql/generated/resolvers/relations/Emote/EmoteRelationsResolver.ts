import * as TypeGraphQL from "type-graphql";
import { Emote } from "../../../models/Emote";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Emote)
export class EmoteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() emote: Emote, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).emote.findUnique({
      where: {
        id: emote.id,
      },
    }).owner({});
  }
}
