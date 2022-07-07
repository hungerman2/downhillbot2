import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionAvgOrderByAggregateInput } from "../inputs/PermissionAvgOrderByAggregateInput";
import { PermissionCountOrderByAggregateInput } from "../inputs/PermissionCountOrderByAggregateInput";
import { PermissionMaxOrderByAggregateInput } from "../inputs/PermissionMaxOrderByAggregateInput";
import { PermissionMinOrderByAggregateInput } from "../inputs/PermissionMinOrderByAggregateInput";
import { PermissionSumOrderByAggregateInput } from "../inputs/PermissionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PermissionOrderByWithAggregationInput", {
  isAbstract: true
})
export class PermissionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  channelId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allowed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  denied?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PermissionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PermissionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PermissionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PermissionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PermissionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PermissionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PermissionSumOrderByAggregateInput | undefined;
}
