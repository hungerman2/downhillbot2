import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRolesInput } from "../inputs/UserCreateWithoutRolesInput";
import { UserUpdateWithoutRolesInput } from "../inputs/UserUpdateWithoutRolesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutRolesInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutRolesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRolesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRolesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRolesInput, {
    nullable: false
  })
  create!: UserCreateWithoutRolesInput;
}
