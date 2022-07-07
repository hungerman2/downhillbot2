import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteOrderByWithRelationInput } from "../../../inputs/EmoteOrderByWithRelationInput";
import { EmoteWhereInput } from "../../../inputs/EmoteWhereInput";
import { EmoteWhereUniqueInput } from "../../../inputs/EmoteWhereUniqueInput";
import { EmoteScalarFieldEnum } from "../../../../enums/EmoteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserEmotesArgs {
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

  @TypeGraphQL.Field(_type => [EmoteScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "date" | "count" | "ownerId"> | undefined;
}
