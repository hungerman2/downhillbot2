import * as TypeGraphQL from "type-graphql";

export enum Grade {
  NONE = "NONE",
  NORMAL = "NORMAL",
  ELITE = "ELITE",
  PRO = "PRO"
}
TypeGraphQL.registerEnumType(Grade, {
  name: "Grade",
  description: undefined,
});
