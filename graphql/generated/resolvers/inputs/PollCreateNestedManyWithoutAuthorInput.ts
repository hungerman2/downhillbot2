import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateManyAuthorInputEnvelope } from "../inputs/PollCreateManyAuthorInputEnvelope";
import { PollCreateOrConnectWithoutAuthorInput } from "../inputs/PollCreateOrConnectWithoutAuthorInput";
import { PollCreateWithoutAuthorInput } from "../inputs/PollCreateWithoutAuthorInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class PollCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [PollCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PollCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: PollCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => PollCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: PollCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PollWhereUniqueInput], {
    nullable: true
  })
  connect?: PollWhereUniqueInput[] | undefined;
}
