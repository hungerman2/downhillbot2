import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionScalarWhereInput } from "../inputs/PermissionScalarWhereInput";
import { PermissionUpdateManyMutationInput } from "../inputs/PermissionUpdateManyMutationInput";

@TypeGraphQL.InputType("PermissionUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class PermissionUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => PermissionScalarWhereInput, {
    nullable: false
  })
  where!: PermissionScalarWhereInput;

  @TypeGraphQL.Field(_type => PermissionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PermissionUpdateManyMutationInput;
}
