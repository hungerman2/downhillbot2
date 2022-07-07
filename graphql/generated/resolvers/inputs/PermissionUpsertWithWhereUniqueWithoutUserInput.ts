import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutUserInput } from "../inputs/PermissionCreateWithoutUserInput";
import { PermissionUpdateWithoutUserInput } from "../inputs/PermissionUpdateWithoutUserInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PermissionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PermissionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PermissionCreateWithoutUserInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutUserInput;
}
