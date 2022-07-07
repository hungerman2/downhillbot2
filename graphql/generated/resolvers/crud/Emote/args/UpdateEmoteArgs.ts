import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteUpdateInput } from "../../../inputs/EmoteUpdateInput";
import { EmoteWhereUniqueInput } from "../../../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateEmoteArgs {
  @TypeGraphQL.Field(_type => EmoteUpdateInput, {
    nullable: false
  })
  data!: EmoteUpdateInput;

  @TypeGraphQL.Field(_type => EmoteWhereUniqueInput, {
    nullable: false
  })
  where!: EmoteWhereUniqueInput;
}
