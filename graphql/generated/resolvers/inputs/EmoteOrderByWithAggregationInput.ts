import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteAvgOrderByAggregateInput } from "../inputs/EmoteAvgOrderByAggregateInput";
import { EmoteCountOrderByAggregateInput } from "../inputs/EmoteCountOrderByAggregateInput";
import { EmoteMaxOrderByAggregateInput } from "../inputs/EmoteMaxOrderByAggregateInput";
import { EmoteMinOrderByAggregateInput } from "../inputs/EmoteMinOrderByAggregateInput";
import { EmoteSumOrderByAggregateInput } from "../inputs/EmoteSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmoteOrderByWithAggregationInput", {
  isAbstract: true
})
export class EmoteOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmoteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EmoteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmoteAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EmoteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmoteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EmoteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmoteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EmoteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmoteSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EmoteSumOrderByAggregateInput | undefined;
}
