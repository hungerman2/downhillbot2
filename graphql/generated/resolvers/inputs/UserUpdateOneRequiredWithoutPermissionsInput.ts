import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPermissionsInput } from "../inputs/UserCreateOrConnectWithoutPermissionsInput";
import { UserCreateWithoutPermissionsInput } from "../inputs/UserCreateWithoutPermissionsInput";
import { UserUpdateWithoutPermissionsInput } from "../inputs/UserUpdateWithoutPermissionsInput";
import { UserUpsertWithoutPermissionsInput } from "../inputs/UserUpsertWithoutPermissionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPermissionsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPermissionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPermissionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPermissionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPermissionsInput | undefined;
}
