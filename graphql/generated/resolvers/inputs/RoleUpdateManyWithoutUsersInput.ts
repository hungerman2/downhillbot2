import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateOrConnectWithoutUsersInput } from "../inputs/RoleCreateOrConnectWithoutUsersInput";
import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleScalarWhereInput } from "../inputs/RoleScalarWhereInput";
import { RoleUpdateManyWithWhereWithoutUsersInput } from "../inputs/RoleUpdateManyWithWhereWithoutUsersInput";
import { RoleUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/RoleUpdateWithWhereUniqueWithoutUsersInput";
import { RoleUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/RoleUpsertWithWhereUniqueWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType("RoleUpdateManyWithoutUsersInput", {
  isAbstract: true
})
export class RoleUpdateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [RoleCreateWithoutUsersInput], {
    nullable: true
  })
  create?: RoleCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: RoleCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  set?: RoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  delete?: RoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  connect?: RoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: RoleUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: RoleUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RoleScalarWhereInput[] | undefined;
}
