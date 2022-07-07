import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("EmoteWhereInput", {
  isAbstract: true
})
export class EmoteWhereInput {
  @TypeGraphQL.Field(_type => [EmoteWhereInput], {
    nullable: true
  })
  AND?: EmoteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteWhereInput], {
    nullable: true
  })
  OR?: EmoteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteWhereInput], {
    nullable: true
  })
  NOT?: EmoteWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;
}
