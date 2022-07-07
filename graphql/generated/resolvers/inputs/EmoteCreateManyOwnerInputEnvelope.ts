import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteCreateManyOwnerInput } from "../inputs/EmoteCreateManyOwnerInput";

@TypeGraphQL.InputType("EmoteCreateManyOwnerInputEnvelope", {
  isAbstract: true
})
export class EmoteCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [EmoteCreateManyOwnerInput], {
    nullable: false
  })
  data!: EmoteCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
