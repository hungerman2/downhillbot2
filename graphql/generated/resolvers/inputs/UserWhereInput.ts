import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { EmoteListRelationFilter } from "../inputs/EmoteListRelationFilter";
import { EnumGradeFilter } from "../inputs/EnumGradeFilter";
import { PermissionListRelationFilter } from "../inputs/PermissionListRelationFilter";
import { PollListRelationFilter } from "../inputs/PollListRelationFilter";
import { RoleListRelationFilter } from "../inputs/RoleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  nickname?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RoleListRelationFilter, {
    nullable: true
  })
  roles?: RoleListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PermissionListRelationFilter, {
    nullable: true
  })
  permissions?: PermissionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EmoteListRelationFilter, {
    nullable: true
  })
  emotes?: EmoteListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isAdmin?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGradeFilter, {
    nullable: true
  })
  grade?: EnumGradeFilter | undefined;

  @TypeGraphQL.Field(_type => PollListRelationFilter, {
    nullable: true
  })
  polls?: PollListRelationFilter | undefined;
}
