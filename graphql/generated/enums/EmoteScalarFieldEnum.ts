import * as TypeGraphQL from "type-graphql";

export enum EmoteScalarFieldEnum {
  id = "id",
  date = "date",
  count = "count",
  ownerId = "ownerId"
}
TypeGraphQL.registerEnumType(EmoteScalarFieldEnum, {
  name: "EmoteScalarFieldEnum",
  description: undefined,
});
