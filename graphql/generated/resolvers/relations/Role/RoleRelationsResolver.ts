import * as TypeGraphQL from "type-graphql";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { RoleUsersArgs } from "./args/RoleUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class RoleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() role: Role, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RoleUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).role.findUnique({
      where: {
        id: role.id,
      },
    }).users(args);
  }
}
