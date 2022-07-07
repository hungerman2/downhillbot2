import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPermissionsInput } from "../inputs/UserCreateWithoutPermissionsInput";
import { UserUpdateWithoutPermissionsInput } from "../inputs/UserUpdateWithoutPermissionsInput";

@TypeGraphQL.InputType("UserUpsertWithoutPermissionsInput", {
  isAbstract: true
})
export class UserUpsertWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPermissionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPermissionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPermissionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPermissionsInput;
}
