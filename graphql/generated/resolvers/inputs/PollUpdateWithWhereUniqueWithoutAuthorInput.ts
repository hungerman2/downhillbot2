import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollUpdateWithoutAuthorInput } from "../inputs/PollUpdateWithoutAuthorInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class PollUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: false
  })
  where!: PollWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: PollUpdateWithoutAuthorInput;
}
