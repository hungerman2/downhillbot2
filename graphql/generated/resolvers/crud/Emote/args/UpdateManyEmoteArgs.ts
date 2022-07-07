import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteUpdateManyMutationInput } from "../../../inputs/EmoteUpdateManyMutationInput";
import { EmoteWhereInput } from "../../../inputs/EmoteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEmoteArgs {
  @TypeGraphQL.Field(_type => EmoteUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmoteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EmoteWhereInput, {
    nullable: true
  })
  where?: EmoteWhereInput | undefined;
}
