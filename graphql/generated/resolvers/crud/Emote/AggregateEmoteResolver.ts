import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEmoteArgs } from "./args/AggregateEmoteArgs";
import { Emote } from "../../../models/Emote";
import { AggregateEmote } from "../../outputs/AggregateEmote";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Emote)
export class AggregateEmoteResolver {
  @TypeGraphQL.Query(_returns => AggregateEmote, {
    nullable: false
  })
  async aggregateEmote(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEmoteArgs): Promise<AggregateEmote> {
    return getPrismaFromContext(ctx).emote.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
