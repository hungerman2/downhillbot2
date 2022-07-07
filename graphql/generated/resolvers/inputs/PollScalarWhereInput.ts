import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PollScalarWhereInput", {
  isAbstract: true
})
export class PollScalarWhereInput {
  @TypeGraphQL.Field(_type => [PollScalarWhereInput], {
    nullable: true
  })
  AND?: PollScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollScalarWhereInput], {
    nullable: true
  })
  OR?: PollScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollScalarWhereInput], {
    nullable: true
  })
  NOT?: PollScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter | undefined;
}
