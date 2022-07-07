import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutEmotesInput } from "../inputs/UserCreateWithoutEmotesInput";
import { UserUpdateWithoutEmotesInput } from "../inputs/UserUpdateWithoutEmotesInput";

@TypeGraphQL.InputType("UserUpsertWithoutEmotesInput", {
  isAbstract: true
})
export class UserUpsertWithoutEmotesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutEmotesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutEmotesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutEmotesInput, {
    nullable: false
  })
  create!: UserCreateWithoutEmotesInput;
}
