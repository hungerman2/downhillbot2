import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateManyUserInputEnvelope } from "../inputs/PermissionCreateManyUserInputEnvelope";
import { PermissionCreateOrConnectWithoutUserInput } from "../inputs/PermissionCreateOrConnectWithoutUserInput";
import { PermissionCreateWithoutUserInput } from "../inputs/PermissionCreateWithoutUserInput";
import { PermissionScalarWhereInput } from "../inputs/PermissionScalarWhereInput";
import { PermissionUpdateManyWithWhereWithoutUserInput } from "../inputs/PermissionUpdateManyWithWhereWithoutUserInput";
import { PermissionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PermissionUpdateWithWhereUniqueWithoutUserInput";
import { PermissionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PermissionUpsertWithWhereUniqueWithoutUserInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class PermissionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PermissionCreateWithoutUserInput], {
    nullable: true
  })
  create?: PermissionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PermissionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PermissionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  set?: PermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  delete?: PermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  connect?: PermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PermissionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PermissionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PermissionScalarWhereInput[] | undefined;
}
