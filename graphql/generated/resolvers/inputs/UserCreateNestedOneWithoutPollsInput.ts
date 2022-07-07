import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPollsInput } from "../inputs/UserCreateOrConnectWithoutPollsInput";
import { UserCreateWithoutPollsInput } from "../inputs/UserCreateWithoutPollsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPollsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutPollsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPollsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPollsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPollsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPollsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
