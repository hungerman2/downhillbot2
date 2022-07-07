import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollScalarWhereInput } from "../inputs/PollScalarWhereInput";
import { PollUpdateManyMutationInput } from "../inputs/PollUpdateManyMutationInput";

@TypeGraphQL.InputType("PollUpdateManyWithWhereWithoutAuthorInput", {
  isAbstract: true
})
export class PollUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PollScalarWhereInput, {
    nullable: false
  })
  where!: PollScalarWhereInput;

  @TypeGraphQL.Field(_type => PollUpdateManyMutationInput, {
    nullable: false
  })
  data!: PollUpdateManyMutationInput;
}
