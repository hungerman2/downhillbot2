import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRolesInput } from "../inputs/UserCreateOrConnectWithoutRolesInput";
import { UserCreateWithoutRolesInput } from "../inputs/UserCreateWithoutRolesInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutRolesInput } from "../inputs/UserUpdateManyWithWhereWithoutRolesInput";
import { UserUpdateWithWhereUniqueWithoutRolesInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRolesInput";
import { UserUpsertWithWhereUniqueWithoutRolesInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRolesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutRolesInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutRolesInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRolesInput], {
    nullable: true
  })
  create?: UserCreateWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRolesInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRolesInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRolesInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutRolesInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
