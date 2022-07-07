import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteCreateWithoutOwnerInput } from "../inputs/EmoteCreateWithoutOwnerInput";
import { EmoteUpdateWithoutOwnerInput } from "../inputs/EmoteUpdateWithoutOwnerInput";
import { EmoteWhereUniqueInput } from "../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.InputType("EmoteUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class EmoteUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => EmoteWhereUniqueInput, {
    nullable: false
  })
  where!: EmoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmoteUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: EmoteUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => EmoteCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: EmoteCreateWithoutOwnerInput;
}
