import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteScalarWhereInput } from "../inputs/EmoteScalarWhereInput";
import { EmoteUpdateManyMutationInput } from "../inputs/EmoteUpdateManyMutationInput";

@TypeGraphQL.InputType("EmoteUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true
})
export class EmoteUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => EmoteScalarWhereInput, {
    nullable: false
  })
  where!: EmoteScalarWhereInput;

  @TypeGraphQL.Field(_type => EmoteUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmoteUpdateManyMutationInput;
}
