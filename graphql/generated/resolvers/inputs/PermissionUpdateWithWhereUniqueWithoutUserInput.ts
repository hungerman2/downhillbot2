import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionUpdateWithoutUserInput } from "../inputs/PermissionUpdateWithoutUserInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PermissionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PermissionUpdateWithoutUserInput;
}
