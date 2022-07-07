import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteUpdateWithoutOwnerInput } from "../inputs/EmoteUpdateWithoutOwnerInput";
import { EmoteWhereUniqueInput } from "../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.InputType("EmoteUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class EmoteUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => EmoteWhereUniqueInput, {
    nullable: false
  })
  where!: EmoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmoteUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: EmoteUpdateWithoutOwnerInput;
}
