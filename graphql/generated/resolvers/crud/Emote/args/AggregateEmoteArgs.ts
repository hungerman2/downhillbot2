import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteOrderByWithRelationInput } from "../../../inputs/EmoteOrderByWithRelationInput";
import { EmoteWhereInput } from "../../../inputs/EmoteWhereInput";
import { EmoteWhereUniqueInput } from "../../../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEmoteArgs {
  @TypeGraphQL.Field(_type => EmoteWhereInput, {
    nullable: true
  })
  where?: EmoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmoteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EmoteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EmoteWhereUniqueInput, {
    nullable: true
  })
  cursor?: EmoteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
