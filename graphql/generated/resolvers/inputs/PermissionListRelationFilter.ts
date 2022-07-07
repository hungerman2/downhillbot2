import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionWhereInput } from "../inputs/PermissionWhereInput";

@TypeGraphQL.InputType("PermissionListRelationFilter", {
  isAbstract: true
})
export class PermissionListRelationFilter {
  @TypeGraphQL.Field(_type => PermissionWhereInput, {
    nullable: true
  })
  every?: PermissionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PermissionWhereInput, {
    nullable: true
  })
  some?: PermissionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PermissionWhereInput, {
    nullable: true
  })
  none?: PermissionWhereInput | undefined;
}
