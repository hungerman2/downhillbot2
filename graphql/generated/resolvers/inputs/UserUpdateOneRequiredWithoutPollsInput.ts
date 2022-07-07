import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPollsInput } from "../inputs/UserCreateOrConnectWithoutPollsInput";
import { UserCreateWithoutPollsInput } from "../inputs/UserCreateWithoutPollsInput";
import { UserUpdateWithoutPollsInput } from "../inputs/UserUpdateWithoutPollsInput";
import { UserUpsertWithoutPollsInput } from "../inputs/UserUpsertWithoutPollsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPollsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPollsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPollsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPollsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPollsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPollsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPollsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPollsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPollsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPollsInput | undefined;
}
