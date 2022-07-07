import * as TypeGraphQL from "type-graphql";
import { Poll } from "../../../models/Poll";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Poll)
export class PollRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() poll: Poll, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).poll.findUnique({
      where: {
        id: poll.id,
      },
    }).author({});
  }
}
