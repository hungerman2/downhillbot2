import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EmoteScalarWhereInput", {
  isAbstract: true
})
export class EmoteScalarWhereInput {
  @TypeGraphQL.Field(_type => [EmoteScalarWhereInput], {
    nullable: true
  })
  AND?: EmoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteScalarWhereInput], {
    nullable: true
  })
  OR?: EmoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteScalarWhereInput], {
    nullable: true
  })
  NOT?: EmoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  count?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;
}
