import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionOrderByWithAggregationInput } from "../../../inputs/PermissionOrderByWithAggregationInput";
import { PermissionScalarWhereWithAggregatesInput } from "../../../inputs/PermissionScalarWhereWithAggregatesInput";
import { PermissionWhereInput } from "../../../inputs/PermissionWhereInput";
import { PermissionScalarFieldEnum } from "../../../../enums/PermissionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPermissionArgs {
  @TypeGraphQL.Field(_type => PermissionWhereInput, {
    nullable: true
  })
  where?: PermissionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PermissionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PermissionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "channelId" | "allowed" | "denied" | "userId">;

  @TypeGraphQL.Field(_type => PermissionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PermissionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
