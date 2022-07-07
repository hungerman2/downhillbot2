import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteOrderByWithAggregationInput } from "../../../inputs/EmoteOrderByWithAggregationInput";
import { EmoteScalarWhereWithAggregatesInput } from "../../../inputs/EmoteScalarWhereWithAggregatesInput";
import { EmoteWhereInput } from "../../../inputs/EmoteWhereInput";
import { EmoteScalarFieldEnum } from "../../../../enums/EmoteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEmoteArgs {
  @TypeGraphQL.Field(_type => EmoteWhereInput, {
    nullable: true
  })
  where?: EmoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmoteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EmoteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmoteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "date" | "count" | "ownerId">;

  @TypeGraphQL.Field(_type => EmoteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EmoteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
