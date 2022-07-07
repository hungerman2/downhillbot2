import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PollWhereInput", {
  isAbstract: true
})
export class PollWhereInput {
  @TypeGraphQL.Field(_type => [PollWhereInput], {
    nullable: true
  })
  AND?: PollWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollWhereInput], {
    nullable: true
  })
  OR?: PollWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollWhereInput], {
    nullable: true
  })
  NOT?: PollWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter | undefined;
}
