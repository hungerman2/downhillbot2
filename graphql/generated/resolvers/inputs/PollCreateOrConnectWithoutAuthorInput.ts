import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateWithoutAuthorInput } from "../inputs/PollCreateWithoutAuthorInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class PollCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: false
  })
  where!: PollWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PollCreateWithoutAuthorInput;
}
