import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PermissionScalarWhereInput", {
  isAbstract: true
})
export class PermissionScalarWhereInput {
  @TypeGraphQL.Field(_type => [PermissionScalarWhereInput], {
    nullable: true
  })
  AND?: PermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereInput], {
    nullable: true
  })
  OR?: PermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereInput], {
    nullable: true
  })
  NOT?: PermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  channelId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  allowed?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  denied?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
