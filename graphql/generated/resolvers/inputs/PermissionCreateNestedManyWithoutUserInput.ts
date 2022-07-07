import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateManyUserInputEnvelope } from "../inputs/PermissionCreateManyUserInputEnvelope";
import { PermissionCreateOrConnectWithoutUserInput } from "../inputs/PermissionCreateOrConnectWithoutUserInput";
import { PermissionCreateWithoutUserInput } from "../inputs/PermissionCreateWithoutUserInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.InputType("PermissionCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class PermissionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PermissionCreateWithoutUserInput], {
    nullable: true
  })
  create?: PermissionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PermissionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PermissionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PermissionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PermissionWhereUniqueInput], {
    nullable: true
  })
  connect?: PermissionWhereUniqueInput[] | undefined;
}
