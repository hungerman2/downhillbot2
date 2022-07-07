import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EmoteScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EmoteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EmoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EmoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EmoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EmoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  count?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  ownerId?: StringWithAggregatesFilter | undefined;
}
