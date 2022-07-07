import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPollsInput } from "../inputs/UserCreateWithoutPollsInput";
import { UserUpdateWithoutPollsInput } from "../inputs/UserUpdateWithoutPollsInput";

@TypeGraphQL.InputType("UserUpsertWithoutPollsInput", {
  isAbstract: true
})
export class UserUpsertWithoutPollsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPollsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPollsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPollsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPollsInput;
}
