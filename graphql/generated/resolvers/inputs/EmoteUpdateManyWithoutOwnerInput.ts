import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteCreateManyOwnerInputEnvelope } from "../inputs/EmoteCreateManyOwnerInputEnvelope";
import { EmoteCreateOrConnectWithoutOwnerInput } from "../inputs/EmoteCreateOrConnectWithoutOwnerInput";
import { EmoteCreateWithoutOwnerInput } from "../inputs/EmoteCreateWithoutOwnerInput";
import { EmoteScalarWhereInput } from "../inputs/EmoteScalarWhereInput";
import { EmoteUpdateManyWithWhereWithoutOwnerInput } from "../inputs/EmoteUpdateManyWithWhereWithoutOwnerInput";
import { EmoteUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/EmoteUpdateWithWhereUniqueWithoutOwnerInput";
import { EmoteUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/EmoteUpsertWithWhereUniqueWithoutOwnerInput";
import { EmoteWhereUniqueInput } from "../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.InputType("EmoteUpdateManyWithoutOwnerInput", {
  isAbstract: true
})
export class EmoteUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [EmoteCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: EmoteCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: EmoteCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: EmoteUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => EmoteCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: EmoteCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmoteWhereUniqueInput], {
    nullable: true
  })
  set?: EmoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EmoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteWhereUniqueInput], {
    nullable: true
  })
  delete?: EmoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteWhereUniqueInput], {
    nullable: true
  })
  connect?: EmoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: EmoteUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: EmoteUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EmoteScalarWhereInput[] | undefined;
}
