import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollWhereInput } from "../inputs/PollWhereInput";

@TypeGraphQL.InputType("PollListRelationFilter", {
  isAbstract: true
})
export class PollListRelationFilter {
  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true
  })
  every?: PollWhereInput | undefined;

  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true
  })
  some?: PollWhereInput | undefined;

  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true
  })
  none?: PollWhereInput | undefined;
}
