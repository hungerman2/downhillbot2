import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Role: crudResolvers.RoleCrudResolver,
  Permission: crudResolvers.PermissionCrudResolver,
  Emote: crudResolvers.EmoteCrudResolver,
  Poll: crudResolvers.PollCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Role: {
    role: actionResolvers.FindUniqueRoleResolver,
    findFirstRole: actionResolvers.FindFirstRoleResolver,
    roles: actionResolvers.FindManyRoleResolver,
    createRole: actionResolvers.CreateRoleResolver,
    createManyRole: actionResolvers.CreateManyRoleResolver,
    deleteRole: actionResolvers.DeleteRoleResolver,
    updateRole: actionResolvers.UpdateRoleResolver,
    deleteManyRole: actionResolvers.DeleteManyRoleResolver,
    updateManyRole: actionResolvers.UpdateManyRoleResolver,
    upsertRole: actionResolvers.UpsertRoleResolver,
    aggregateRole: actionResolvers.AggregateRoleResolver,
    groupByRole: actionResolvers.GroupByRoleResolver
  },
  Permission: {
    permission: actionResolvers.FindUniquePermissionResolver,
    findFirstPermission: actionResolvers.FindFirstPermissionResolver,
    permissions: actionResolvers.FindManyPermissionResolver,
    createPermission: actionResolvers.CreatePermissionResolver,
    createManyPermission: actionResolvers.CreateManyPermissionResolver,
    deletePermission: actionResolvers.DeletePermissionResolver,
    updatePermission: actionResolvers.UpdatePermissionResolver,
    deleteManyPermission: actionResolvers.DeleteManyPermissionResolver,
    updateManyPermission: actionResolvers.UpdateManyPermissionResolver,
    upsertPermission: actionResolvers.UpsertPermissionResolver,
    aggregatePermission: actionResolvers.AggregatePermissionResolver,
    groupByPermission: actionResolvers.GroupByPermissionResolver
  },
  Emote: {
    emote: actionResolvers.FindUniqueEmoteResolver,
    findFirstEmote: actionResolvers.FindFirstEmoteResolver,
    emotes: actionResolvers.FindManyEmoteResolver,
    createEmote: actionResolvers.CreateEmoteResolver,
    createManyEmote: actionResolvers.CreateManyEmoteResolver,
    deleteEmote: actionResolvers.DeleteEmoteResolver,
    updateEmote: actionResolvers.UpdateEmoteResolver,
    deleteManyEmote: actionResolvers.DeleteManyEmoteResolver,
    updateManyEmote: actionResolvers.UpdateManyEmoteResolver,
    upsertEmote: actionResolvers.UpsertEmoteResolver,
    aggregateEmote: actionResolvers.AggregateEmoteResolver,
    groupByEmote: actionResolvers.GroupByEmoteResolver
  },
  Poll: {
    poll: actionResolvers.FindUniquePollResolver,
    findFirstPoll: actionResolvers.FindFirstPollResolver,
    polls: actionResolvers.FindManyPollResolver,
    createPoll: actionResolvers.CreatePollResolver,
    createManyPoll: actionResolvers.CreateManyPollResolver,
    deletePoll: actionResolvers.DeletePollResolver,
    updatePoll: actionResolvers.UpdatePollResolver,
    deleteManyPoll: actionResolvers.DeleteManyPollResolver,
    updateManyPoll: actionResolvers.UpdateManyPollResolver,
    upsertPoll: actionResolvers.UpsertPollResolver,
    aggregatePoll: actionResolvers.AggregatePollResolver,
    groupByPoll: actionResolvers.GroupByPollResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Role: ["role", "findFirstRole", "roles", "createRole", "createManyRole", "deleteRole", "updateRole", "deleteManyRole", "updateManyRole", "upsertRole", "aggregateRole", "groupByRole"],
  Permission: ["permission", "findFirstPermission", "permissions", "createPermission", "createManyPermission", "deletePermission", "updatePermission", "deleteManyPermission", "updateManyPermission", "upsertPermission", "aggregatePermission", "groupByPermission"],
  Emote: ["emote", "findFirstEmote", "emotes", "createEmote", "createManyEmote", "deleteEmote", "updateEmote", "deleteManyEmote", "updateManyEmote", "upsertEmote", "aggregateEmote", "groupByEmote"],
  Poll: ["poll", "findFirstPoll", "polls", "createPoll", "createManyPoll", "deletePoll", "updatePoll", "deleteManyPoll", "updateManyPoll", "upsertPoll", "aggregatePoll", "groupByPoll"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueRoleArgs: ["where"],
  FindFirstRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRoleArgs: ["data"],
  CreateManyRoleArgs: ["data", "skipDuplicates"],
  DeleteRoleArgs: ["where"],
  UpdateRoleArgs: ["data", "where"],
  DeleteManyRoleArgs: ["where"],
  UpdateManyRoleArgs: ["data", "where"],
  UpsertRoleArgs: ["where", "create", "update"],
  AggregateRoleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRoleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePermissionArgs: ["where"],
  FindFirstPermissionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPermissionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePermissionArgs: ["data"],
  CreateManyPermissionArgs: ["data", "skipDuplicates"],
  DeletePermissionArgs: ["where"],
  UpdatePermissionArgs: ["data", "where"],
  DeleteManyPermissionArgs: ["where"],
  UpdateManyPermissionArgs: ["data", "where"],
  UpsertPermissionArgs: ["where", "create", "update"],
  AggregatePermissionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPermissionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueEmoteArgs: ["where"],
  FindFirstEmoteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEmoteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateEmoteArgs: ["data"],
  CreateManyEmoteArgs: ["data", "skipDuplicates"],
  DeleteEmoteArgs: ["where"],
  UpdateEmoteArgs: ["data", "where"],
  DeleteManyEmoteArgs: ["where"],
  UpdateManyEmoteArgs: ["data", "where"],
  UpsertEmoteArgs: ["where", "create", "update"],
  AggregateEmoteArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByEmoteArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePollArgs: ["where"],
  FindFirstPollArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPollArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePollArgs: ["data"],
  CreateManyPollArgs: ["data", "skipDuplicates"],
  DeletePollArgs: ["where"],
  UpdatePollArgs: ["data", "where"],
  DeleteManyPollArgs: ["where"],
  UpdateManyPollArgs: ["data", "where"],
  UpsertPollArgs: ["where", "create", "update"],
  AggregatePollArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPollArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Role: relationResolvers.RoleRelationsResolver,
  Permission: relationResolvers.PermissionRelationsResolver,
  Emote: relationResolvers.EmoteRelationsResolver,
  Poll: relationResolvers.PollRelationsResolver
};
const relationResolversInfo = {
  User: ["roles", "permissions", "emotes", "polls"],
  Role: ["users"],
  Permission: ["user"],
  Emote: ["owner"],
  Poll: ["author"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "nickname", "isAdmin", "grade"],
  Role: ["id", "name"],
  Permission: ["id", "channelId", "allowed", "denied", "userId"],
  Emote: ["id", "date", "count", "ownerId"],
  Poll: ["id", "authorId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "nickname", "isAdmin", "grade", "_count", "_min", "_max"],
  AggregateRole: ["_count", "_min", "_max"],
  RoleGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregatePermission: ["_count", "_avg", "_sum", "_min", "_max"],
  PermissionGroupBy: ["id", "channelId", "allowed", "denied", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEmote: ["_count", "_avg", "_sum", "_min", "_max"],
  EmoteGroupBy: ["id", "date", "count", "ownerId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePoll: ["_count", "_min", "_max"],
  PollGroupBy: ["id", "authorId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["roles", "permissions", "emotes", "polls"],
  UserCountAggregate: ["id", "nickname", "isAdmin", "grade", "_all"],
  UserMinAggregate: ["id", "nickname", "isAdmin", "grade"],
  UserMaxAggregate: ["id", "nickname", "isAdmin", "grade"],
  RoleCount: ["users"],
  RoleCountAggregate: ["id", "name", "_all"],
  RoleMinAggregate: ["id", "name"],
  RoleMaxAggregate: ["id", "name"],
  PermissionCountAggregate: ["id", "channelId", "allowed", "denied", "userId", "_all"],
  PermissionAvgAggregate: ["id"],
  PermissionSumAggregate: ["id"],
  PermissionMinAggregate: ["id", "channelId", "allowed", "denied", "userId"],
  PermissionMaxAggregate: ["id", "channelId", "allowed", "denied", "userId"],
  EmoteCountAggregate: ["id", "date", "count", "ownerId", "_all"],
  EmoteAvgAggregate: ["count"],
  EmoteSumAggregate: ["count"],
  EmoteMinAggregate: ["id", "date", "count", "ownerId"],
  EmoteMaxAggregate: ["id", "date", "count", "ownerId"],
  PollCountAggregate: ["id", "authorId", "_all"],
  PollMinAggregate: ["id", "authorId"],
  PollMaxAggregate: ["id", "authorId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "nickname", "roles", "permissions", "emotes", "isAdmin", "grade", "polls"],
  UserOrderByWithRelationInput: ["id", "nickname", "roles", "permissions", "emotes", "isAdmin", "grade", "polls"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "nickname", "isAdmin", "grade", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nickname", "isAdmin", "grade"],
  RoleWhereInput: ["AND", "OR", "NOT", "id", "name", "users"],
  RoleOrderByWithRelationInput: ["id", "name", "users"],
  RoleWhereUniqueInput: ["id"],
  RoleOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  RoleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  PermissionWhereInput: ["AND", "OR", "NOT", "id", "channelId", "allowed", "denied", "user", "userId"],
  PermissionOrderByWithRelationInput: ["id", "channelId", "allowed", "denied", "user", "userId"],
  PermissionWhereUniqueInput: ["id", "channelId_userId"],
  PermissionOrderByWithAggregationInput: ["id", "channelId", "allowed", "denied", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  PermissionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "channelId", "allowed", "denied", "userId"],
  EmoteWhereInput: ["AND", "OR", "NOT", "id", "date", "count", "owner", "ownerId"],
  EmoteOrderByWithRelationInput: ["id", "date", "count", "owner", "ownerId"],
  EmoteWhereUniqueInput: ["id"],
  EmoteOrderByWithAggregationInput: ["id", "date", "count", "ownerId", "_count", "_avg", "_max", "_min", "_sum"],
  EmoteScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "date", "count", "ownerId"],
  PollWhereInput: ["AND", "OR", "NOT", "id", "author", "authorId"],
  PollOrderByWithRelationInput: ["id", "author", "authorId"],
  PollWhereUniqueInput: ["id"],
  PollOrderByWithAggregationInput: ["id", "authorId", "_count", "_max", "_min"],
  PollScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId"],
  UserCreateInput: ["id", "nickname", "roles", "permissions", "emotes", "isAdmin", "grade", "polls"],
  UserUpdateInput: ["id", "nickname", "roles", "permissions", "emotes", "isAdmin", "grade", "polls"],
  UserCreateManyInput: ["id", "nickname", "isAdmin", "grade"],
  UserUpdateManyMutationInput: ["id", "nickname", "isAdmin", "grade"],
  RoleCreateInput: ["id", "name", "users"],
  RoleUpdateInput: ["id", "name", "users"],
  RoleCreateManyInput: ["id", "name"],
  RoleUpdateManyMutationInput: ["id", "name"],
  PermissionCreateInput: ["channelId", "allowed", "denied", "user"],
  PermissionUpdateInput: ["channelId", "allowed", "denied", "user"],
  PermissionCreateManyInput: ["id", "channelId", "allowed", "denied", "userId"],
  PermissionUpdateManyMutationInput: ["channelId", "allowed", "denied"],
  EmoteCreateInput: ["id", "date", "count", "owner"],
  EmoteUpdateInput: ["id", "date", "count", "owner"],
  EmoteCreateManyInput: ["id", "date", "count", "ownerId"],
  EmoteUpdateManyMutationInput: ["id", "date", "count"],
  PollCreateInput: ["id", "author"],
  PollUpdateInput: ["id", "author"],
  PollCreateManyInput: ["id", "authorId"],
  PollUpdateManyMutationInput: ["id"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  RoleListRelationFilter: ["every", "some", "none"],
  PermissionListRelationFilter: ["every", "some", "none"],
  EmoteListRelationFilter: ["every", "some", "none"],
  BoolFilter: ["equals", "not"],
  EnumGradeFilter: ["equals", "in", "notIn", "not"],
  PollListRelationFilter: ["every", "some", "none"],
  RoleOrderByRelationAggregateInput: ["_count"],
  PermissionOrderByRelationAggregateInput: ["_count"],
  EmoteOrderByRelationAggregateInput: ["_count"],
  PollOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "nickname", "isAdmin", "grade"],
  UserMaxOrderByAggregateInput: ["id", "nickname", "isAdmin", "grade"],
  UserMinOrderByAggregateInput: ["id", "nickname", "isAdmin", "grade"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumGradeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  RoleCountOrderByAggregateInput: ["id", "name"],
  RoleMaxOrderByAggregateInput: ["id", "name"],
  RoleMinOrderByAggregateInput: ["id", "name"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  PermissionChannelIdUserIdCompoundUniqueInput: ["channelId", "userId"],
  PermissionCountOrderByAggregateInput: ["id", "channelId", "allowed", "denied", "userId"],
  PermissionAvgOrderByAggregateInput: ["id"],
  PermissionMaxOrderByAggregateInput: ["id", "channelId", "allowed", "denied", "userId"],
  PermissionMinOrderByAggregateInput: ["id", "channelId", "allowed", "denied", "userId"],
  PermissionSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EmoteCountOrderByAggregateInput: ["id", "date", "count", "ownerId"],
  EmoteAvgOrderByAggregateInput: ["count"],
  EmoteMaxOrderByAggregateInput: ["id", "date", "count", "ownerId"],
  EmoteMinOrderByAggregateInput: ["id", "date", "count", "ownerId"],
  EmoteSumOrderByAggregateInput: ["count"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PollCountOrderByAggregateInput: ["id", "authorId"],
  PollMaxOrderByAggregateInput: ["id", "authorId"],
  PollMinOrderByAggregateInput: ["id", "authorId"],
  RoleCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  PermissionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  EmoteCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  PollCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  RoleUpdateManyWithoutUsersInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PermissionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EmoteUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BoolFieldUpdateOperationsInput: ["set"],
  EnumGradeFieldUpdateOperationsInput: ["set"],
  PollUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedManyWithoutRolesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateManyWithoutRolesInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutPermissionsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutPermissionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutEmotesInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutEmotesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutPollsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutPollsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumGradeFilter: ["equals", "in", "notIn", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumGradeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  RoleCreateWithoutUsersInput: ["id", "name"],
  RoleCreateOrConnectWithoutUsersInput: ["where", "create"],
  PermissionCreateWithoutUserInput: ["channelId", "allowed", "denied"],
  PermissionCreateOrConnectWithoutUserInput: ["where", "create"],
  PermissionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  EmoteCreateWithoutOwnerInput: ["id", "date", "count"],
  EmoteCreateOrConnectWithoutOwnerInput: ["where", "create"],
  EmoteCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  PollCreateWithoutAuthorInput: ["id"],
  PollCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PollCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  RoleUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  RoleUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  RoleUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  RoleScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  PermissionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PermissionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PermissionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PermissionScalarWhereInput: ["AND", "OR", "NOT", "id", "channelId", "allowed", "denied", "userId"],
  EmoteUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  EmoteUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  EmoteUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  EmoteScalarWhereInput: ["AND", "OR", "NOT", "id", "date", "count", "ownerId"],
  PollUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PollUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PollUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PollScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId"],
  UserCreateWithoutRolesInput: ["id", "nickname", "permissions", "emotes", "isAdmin", "grade", "polls"],
  UserCreateOrConnectWithoutRolesInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutRolesInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutRolesInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutRolesInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "nickname", "isAdmin", "grade"],
  UserCreateWithoutPermissionsInput: ["id", "nickname", "roles", "emotes", "isAdmin", "grade", "polls"],
  UserCreateOrConnectWithoutPermissionsInput: ["where", "create"],
  UserUpsertWithoutPermissionsInput: ["update", "create"],
  UserUpdateWithoutPermissionsInput: ["id", "nickname", "roles", "emotes", "isAdmin", "grade", "polls"],
  UserCreateWithoutEmotesInput: ["id", "nickname", "roles", "permissions", "isAdmin", "grade", "polls"],
  UserCreateOrConnectWithoutEmotesInput: ["where", "create"],
  UserUpsertWithoutEmotesInput: ["update", "create"],
  UserUpdateWithoutEmotesInput: ["id", "nickname", "roles", "permissions", "isAdmin", "grade", "polls"],
  UserCreateWithoutPollsInput: ["id", "nickname", "roles", "permissions", "emotes", "isAdmin", "grade"],
  UserCreateOrConnectWithoutPollsInput: ["where", "create"],
  UserUpsertWithoutPollsInput: ["update", "create"],
  UserUpdateWithoutPollsInput: ["id", "nickname", "roles", "permissions", "emotes", "isAdmin", "grade"],
  PermissionCreateManyUserInput: ["id", "channelId", "allowed", "denied"],
  EmoteCreateManyOwnerInput: ["id", "date", "count"],
  PollCreateManyAuthorInput: ["id"],
  RoleUpdateWithoutUsersInput: ["id", "name"],
  PermissionUpdateWithoutUserInput: ["channelId", "allowed", "denied"],
  EmoteUpdateWithoutOwnerInput: ["id", "date", "count"],
  PollUpdateWithoutAuthorInput: ["id"],
  UserUpdateWithoutRolesInput: ["id", "nickname", "permissions", "emotes", "isAdmin", "grade", "polls"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

