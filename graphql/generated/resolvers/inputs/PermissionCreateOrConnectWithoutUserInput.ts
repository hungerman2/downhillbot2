import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutUserInput } from "../inputs/PermissionCreateWithoutUserInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class PermissionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionCreateWithoutUserInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutUserInput;
}
