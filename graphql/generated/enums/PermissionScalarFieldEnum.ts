import * as TypeGraphQL from "type-graphql";

export enum PermissionScalarFieldEnum {
  id = "id",
  channelId = "channelId",
  allowed = "allowed",
  denied = "denied",
  userId = "userId"
}
TypeGraphQL.registerEnumType(PermissionScalarFieldEnum, {
  name: "PermissionScalarFieldEnum",
  description: undefined,
});
