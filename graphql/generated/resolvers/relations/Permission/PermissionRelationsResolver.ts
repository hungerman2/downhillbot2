import * as TypeGraphQL from "type-graphql";
import { Permission } from "../../../models/Permission";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Permission)
export class PermissionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() permission: Permission, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).permission.findUnique({
      where: {
        id: permission.id,
      },
    }).user({});
  }
}
