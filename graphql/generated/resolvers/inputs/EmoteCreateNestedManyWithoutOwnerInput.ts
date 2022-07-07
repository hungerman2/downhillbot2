import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteCreateManyOwnerInputEnvelope } from "../inputs/EmoteCreateManyOwnerInputEnvelope";
import { EmoteCreateOrConnectWithoutOwnerInput } from "../inputs/EmoteCreateOrConnectWithoutOwnerInput";
import { EmoteCreateWithoutOwnerInput } from "../inputs/EmoteCreateWithoutOwnerInput";
import { EmoteWhereUniqueInput } from "../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.InputType("EmoteCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class EmoteCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [EmoteCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: EmoteCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: EmoteCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => EmoteCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: EmoteCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmoteWhereUniqueInput], {
    nullable: true
  })
  connect?: EmoteWhereUniqueInput[] | undefined;
}
