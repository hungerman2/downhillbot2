import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateManyAuthorInput } from "../inputs/PollCreateManyAuthorInput";

@TypeGraphQL.InputType("PollCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class PollCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [PollCreateManyAuthorInput], {
    nullable: false
  })
  data!: PollCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
