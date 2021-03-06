import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutRolesInput } from "../inputs/UserCreateNestedManyWithoutRolesInput";

@TypeGraphQL.InputType("RoleCreateInput", {
  isAbstract: true
})
export class RoleCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRolesInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutRolesInput | undefined;
}
