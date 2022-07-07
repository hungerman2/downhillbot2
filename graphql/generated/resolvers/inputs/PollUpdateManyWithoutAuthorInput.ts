import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateManyAuthorInputEnvelope } from "../inputs/PollCreateManyAuthorInputEnvelope";
import { PollCreateOrConnectWithoutAuthorInput } from "../inputs/PollCreateOrConnectWithoutAuthorInput";
import { PollCreateWithoutAuthorInput } from "../inputs/PollCreateWithoutAuthorInput";
import { PollScalarWhereInput } from "../inputs/PollScalarWhereInput";
import { PollUpdateManyWithWhereWithoutAuthorInput } from "../inputs/PollUpdateManyWithWhereWithoutAuthorInput";
import { PollUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/PollUpdateWithWhereUniqueWithoutAuthorInput";
import { PollUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/PollUpsertWithWhereUniqueWithoutAuthorInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class PollUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [PollCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PollCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: PollCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: PollUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => PollCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: PollCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PollWhereUniqueInput], {
    nullable: true
  })
  set?: PollWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PollWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollWhereUniqueInput], {
    nullable: true
  })
  delete?: PollWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollWhereUniqueInput], {
    nullable: true
  })
  connect?: PollWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: PollUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: PollUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PollScalarWhereInput[] | undefined;
}
