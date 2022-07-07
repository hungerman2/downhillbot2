import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PermissionWhereInput", {
  isAbstract: true
})
export class PermissionWhereInput {
  @TypeGraphQL.Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  AND?: PermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  OR?: PermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  NOT?: PermissionWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
