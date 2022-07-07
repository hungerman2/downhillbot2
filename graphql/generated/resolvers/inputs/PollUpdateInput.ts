import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPollsInput } from "../inputs/UserUpdateOneRequiredWithoutPollsInput";

@TypeGraphQL.InputType("PollUpdateInput", {
  isAbstract: true
})
export class PollUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPollsInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutPollsInput | undefined;
}
