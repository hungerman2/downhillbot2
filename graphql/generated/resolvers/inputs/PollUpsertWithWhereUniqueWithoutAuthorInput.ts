import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateWithoutAuthorInput } from "../inputs/PollCreateWithoutAuthorInput";
import { PollUpdateWithoutAuthorInput } from "../inputs/PollUpdateWithoutAuthorInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class PollUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: false
  })
  where!: PollWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: PollUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => PollCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PollCreateWithoutAuthorInput;
}
