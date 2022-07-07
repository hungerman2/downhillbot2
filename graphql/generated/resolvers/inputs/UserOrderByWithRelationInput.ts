import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteOrderByRelationAggregateInput } from "../inputs/EmoteOrderByRelationAggregateInput";
import { PermissionOrderByRelationAggregateInput } from "../inputs/PermissionOrderByRelationAggregateInput";
import { PollOrderByRelationAggregateInput } from "../inputs/PollOrderByRelationAggregateInput";
import { RoleOrderByRelationAggregateInput } from "../inputs/RoleOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nickname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RoleOrderByRelationAggregateInput, {
    nullable: true
  })
  roles?: RoleOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionOrderByRelationAggregateInput, {
    nullable: true
  })
  permissions?: PermissionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmoteOrderByRelationAggregateInput, {
    nullable: true
  })
  emotes?: EmoteOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isAdmin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  grade?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollOrderByRelationAggregateInput, {
    nullable: true
  })
  polls?: PollOrderByRelationAggregateInput | undefined;
}
