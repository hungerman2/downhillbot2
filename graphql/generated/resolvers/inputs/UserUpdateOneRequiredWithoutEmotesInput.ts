import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutEmotesInput } from "../inputs/UserCreateOrConnectWithoutEmotesInput";
import { UserCreateWithoutEmotesInput } from "../inputs/UserCreateWithoutEmotesInput";
import { UserUpdateWithoutEmotesInput } from "../inputs/UserUpdateWithoutEmotesInput";
import { UserUpsertWithoutEmotesInput } from "../inputs/UserUpsertWithoutEmotesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutEmotesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutEmotesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutEmotesInput, {
    nullable: true
  })
  create?: UserCreateWithoutEmotesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutEmotesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutEmotesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutEmotesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutEmotesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutEmotesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutEmotesInput | undefined;
}
