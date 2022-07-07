import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PermissionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PermissionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  channelId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  allowed?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  denied?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
