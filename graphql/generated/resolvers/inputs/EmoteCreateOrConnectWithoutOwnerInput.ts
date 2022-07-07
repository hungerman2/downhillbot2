import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteCreateWithoutOwnerInput } from "../inputs/EmoteCreateWithoutOwnerInput";
import { EmoteWhereUniqueInput } from "../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.InputType("EmoteCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class EmoteCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => EmoteWhereUniqueInput, {
    nullable: false
  })
  where!: EmoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmoteCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: EmoteCreateWithoutOwnerInput;
}
