import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePermissionArgs } from "./args/AggregatePermissionArgs";
import { Permission } from "../../../models/Permission";
import { AggregatePermission } from "../../outputs/AggregatePermission";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Permission)
export class AggregatePermissionResolver {
  @TypeGraphQL.Query(_returns => AggregatePermission, {
    nullable: false
  })
  async aggregatePermission(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePermissionArgs): Promise<AggregatePermission> {
    return getPrismaFromContext(ctx).permission.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
