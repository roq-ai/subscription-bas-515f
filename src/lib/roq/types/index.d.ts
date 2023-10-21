/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model message
 *
 */
export type message = $Result.DefaultSelection<Prisma.$messagePayload>;
/**
 * Model subscription
 *
 */
export type subscription = $Result.DefaultSelection<Prisma.$subscriptionPayload>;
/**
 * Model tier
 *
 */
export type tier = $Result.DefaultSelection<Prisma.$tierPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model user_subscription
 *
 */
export type user_subscription = $Result.DefaultSelection<Prisma.$user_subscriptionPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **message** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
   * ```
   */
  get message(): Prisma.messageDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **subscription** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscriptions
   * const subscriptions = await prisma.subscription.findMany()
   * ```
   */
  get subscription(): Prisma.subscriptionDelegate<ExtArgs>;

  /**
   * `prisma.tier`: Exposes CRUD operations for the **tier** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tiers
   * const tiers = await prisma.tier.findMany()
   * ```
   */
  get tier(): Prisma.tierDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.user_subscription`: Exposes CRUD operations for the **user_subscription** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_subscriptions
   * const user_subscriptions = await prisma.user_subscription.findMany()
   * ```
   */
  get user_subscription(): Prisma.user_subscriptionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    message: 'message';
    subscription: 'subscription';
    tier: 'tier';
    user: 'user';
    user_subscription: 'user_subscription';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'message' | 'subscription' | 'tier' | 'user' | 'user_subscription';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      message: {
        payload: Prisma.$messagePayload<ExtArgs>;
        fields: Prisma.messageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.messageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.messageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$messagePayload>;
          };
          findFirst: {
            args: Prisma.messageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.messageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$messagePayload>;
          };
          findMany: {
            args: Prisma.messageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[];
          };
          create: {
            args: Prisma.messageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$messagePayload>;
          };
          createMany: {
            args: Prisma.messageCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.messageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$messagePayload>;
          };
          update: {
            args: Prisma.messageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$messagePayload>;
          };
          deleteMany: {
            args: Prisma.messageDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.messageUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.messageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$messagePayload>;
          };
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMessage>;
          };
          groupBy: {
            args: Prisma.messageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MessageGroupByOutputType>[];
          };
          count: {
            args: Prisma.messageCountArgs<ExtArgs>;
            result: $Utils.Optional<MessageCountAggregateOutputType> | number;
          };
        };
      };
      subscription: {
        payload: Prisma.$subscriptionPayload<ExtArgs>;
        fields: Prisma.subscriptionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.subscriptionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.subscriptionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          findFirst: {
            args: Prisma.subscriptionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.subscriptionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          findMany: {
            args: Prisma.subscriptionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>[];
          };
          create: {
            args: Prisma.subscriptionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          createMany: {
            args: Prisma.subscriptionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.subscriptionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          update: {
            args: Prisma.subscriptionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          deleteMany: {
            args: Prisma.subscriptionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.subscriptionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.subscriptionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscription>;
          };
          groupBy: {
            args: Prisma.subscriptionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionGroupByOutputType>[];
          };
          count: {
            args: Prisma.subscriptionCountArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number;
          };
        };
      };
      tier: {
        payload: Prisma.$tierPayload<ExtArgs>;
        fields: Prisma.tierFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.tierFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tierPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.tierFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tierPayload>;
          };
          findFirst: {
            args: Prisma.tierFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tierPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.tierFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tierPayload>;
          };
          findMany: {
            args: Prisma.tierFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tierPayload>[];
          };
          create: {
            args: Prisma.tierCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tierPayload>;
          };
          createMany: {
            args: Prisma.tierCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.tierDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tierPayload>;
          };
          update: {
            args: Prisma.tierUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tierPayload>;
          };
          deleteMany: {
            args: Prisma.tierDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.tierUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.tierUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tierPayload>;
          };
          aggregate: {
            args: Prisma.TierAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTier>;
          };
          groupBy: {
            args: Prisma.tierGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TierGroupByOutputType>[];
          };
          count: {
            args: Prisma.tierCountArgs<ExtArgs>;
            result: $Utils.Optional<TierCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      user_subscription: {
        payload: Prisma.$user_subscriptionPayload<ExtArgs>;
        fields: Prisma.user_subscriptionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.user_subscriptionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_subscriptionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.user_subscriptionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_subscriptionPayload>;
          };
          findFirst: {
            args: Prisma.user_subscriptionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_subscriptionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.user_subscriptionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_subscriptionPayload>;
          };
          findMany: {
            args: Prisma.user_subscriptionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_subscriptionPayload>[];
          };
          create: {
            args: Prisma.user_subscriptionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_subscriptionPayload>;
          };
          createMany: {
            args: Prisma.user_subscriptionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.user_subscriptionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_subscriptionPayload>;
          };
          update: {
            args: Prisma.user_subscriptionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_subscriptionPayload>;
          };
          deleteMany: {
            args: Prisma.user_subscriptionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.user_subscriptionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.user_subscriptionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_subscriptionPayload>;
          };
          aggregate: {
            args: Prisma.User_subscriptionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_subscription>;
          };
          groupBy: {
            args: Prisma.user_subscriptionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_subscriptionGroupByOutputType>[];
          };
          count: {
            args: Prisma.user_subscriptionCountArgs<ExtArgs>;
            result: $Utils.Optional<User_subscriptionCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyAvgAggregateOutputType = {
    company_size: number | null;
  };

  export type CompanySumAggregateOutputType = {
    company_size: number | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    company_size: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    company_size: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    image: number;
    company_size: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyAvgAggregateInputType = {
    company_size?: true;
  };

  export type CompanySumAggregateInputType = {
    company_size?: true;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    company_size?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    company_size?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    company_size?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CompanyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CompanySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _avg?: CompanyAvgAggregateInputType;
    _sum?: CompanySumAggregateInputType;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    image: string | null;
    company_size: number | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      image?: boolean;
      company_size?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    image?: boolean;
    company_size?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        image: string | null;
        company_size: number | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly image: FieldRef<'company', 'String'>;
    readonly company_size: FieldRef<'company', 'Int'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  export type MessageAvgAggregateOutputType = {
    message_priority: number | null;
  };

  export type MessageSumAggregateOutputType = {
    message_priority: number | null;
  };

  export type MessageMinAggregateOutputType = {
    id: string | null;
    message_status: string | null;
    message_priority: number | null;
    message_content: string | null;
    message_type: string | null;
    message_sender: string | null;
    message_recipient: string | null;
    message_read_status: boolean | null;
    message_delivery_time: Date | null;
    message_attachment: string | null;
    message_reply_status: boolean | null;
    message_category: string | null;
    message_sent_time: Date | null;
    message_response_time: Date | null;
    message_feedback: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MessageMaxAggregateOutputType = {
    id: string | null;
    message_status: string | null;
    message_priority: number | null;
    message_content: string | null;
    message_type: string | null;
    message_sender: string | null;
    message_recipient: string | null;
    message_read_status: boolean | null;
    message_delivery_time: Date | null;
    message_attachment: string | null;
    message_reply_status: boolean | null;
    message_category: string | null;
    message_sent_time: Date | null;
    message_response_time: Date | null;
    message_feedback: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MessageCountAggregateOutputType = {
    id: number;
    message_status: number;
    message_priority: number;
    message_content: number;
    message_type: number;
    message_sender: number;
    message_recipient: number;
    message_read_status: number;
    message_delivery_time: number;
    message_attachment: number;
    message_reply_status: number;
    message_category: number;
    message_sent_time: number;
    message_response_time: number;
    message_feedback: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MessageAvgAggregateInputType = {
    message_priority?: true;
  };

  export type MessageSumAggregateInputType = {
    message_priority?: true;
  };

  export type MessageMinAggregateInputType = {
    id?: true;
    message_status?: true;
    message_priority?: true;
    message_content?: true;
    message_type?: true;
    message_sender?: true;
    message_recipient?: true;
    message_read_status?: true;
    message_delivery_time?: true;
    message_attachment?: true;
    message_reply_status?: true;
    message_category?: true;
    message_sent_time?: true;
    message_response_time?: true;
    message_feedback?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MessageMaxAggregateInputType = {
    id?: true;
    message_status?: true;
    message_priority?: true;
    message_content?: true;
    message_type?: true;
    message_sender?: true;
    message_recipient?: true;
    message_read_status?: true;
    message_delivery_time?: true;
    message_attachment?: true;
    message_reply_status?: true;
    message_category?: true;
    message_sent_time?: true;
    message_response_time?: true;
    message_feedback?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MessageCountAggregateInputType = {
    id?: true;
    message_status?: true;
    message_priority?: true;
    message_content?: true;
    message_type?: true;
    message_sender?: true;
    message_recipient?: true;
    message_read_status?: true;
    message_delivery_time?: true;
    message_attachment?: true;
    message_reply_status?: true;
    message_category?: true;
    message_sent_time?: true;
    message_response_time?: true;
    message_feedback?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message to aggregate.
     */
    where?: messageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: messageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned messages
     **/
    _count?: true | MessageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MessageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MessageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MessageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MessageMaxAggregateInputType;
  };

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>;
  };

  export type messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput;
    orderBy?: messageOrderByWithAggregationInput | messageOrderByWithAggregationInput[];
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum;
    having?: messageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
  };

  export type MessageGroupByOutputType = {
    id: string;
    message_status: string | null;
    message_priority: number | null;
    message_content: string;
    message_type: string | null;
    message_sender: string | null;
    message_recipient: string | null;
    message_read_status: boolean | null;
    message_delivery_time: Date | null;
    message_attachment: string | null;
    message_reply_status: boolean | null;
    message_category: string | null;
    message_sent_time: Date | null;
    message_response_time: Date | null;
    message_feedback: string | null;
    created_at: Date;
    updated_at: Date;
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  type GetMessageGroupByPayload<T extends messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MessageGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
          : GetScalarType<T[P], MessageGroupByOutputType[P]>;
      }
    >
  >;

  export type messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      message_status?: boolean;
      message_priority?: boolean;
      message_content?: boolean;
      message_type?: boolean;
      message_sender?: boolean;
      message_recipient?: boolean;
      message_read_status?: boolean;
      message_delivery_time?: boolean;
      message_attachment?: boolean;
      message_reply_status?: boolean;
      message_category?: boolean;
      message_sent_time?: boolean;
      message_response_time?: boolean;
      message_feedback?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['message']
  >;

  export type messageSelectScalar = {
    id?: boolean;
    message_status?: boolean;
    message_priority?: boolean;
    message_content?: boolean;
    message_type?: boolean;
    message_sender?: boolean;
    message_recipient?: boolean;
    message_read_status?: boolean;
    message_delivery_time?: boolean;
    message_attachment?: boolean;
    message_reply_status?: boolean;
    message_category?: boolean;
    message_sent_time?: boolean;
    message_response_time?: boolean;
    message_feedback?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'message';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        message_status: string | null;
        message_priority: number | null;
        message_content: string;
        message_type: string | null;
        message_sender: string | null;
        message_recipient: string | null;
        message_read_status: boolean | null;
        message_delivery_time: Date | null;
        message_attachment: string | null;
        message_reply_status: boolean | null;
        message_category: string | null;
        message_sent_time: Date | null;
        message_response_time: Date | null;
        message_feedback: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['message']
    >;
    composites: {};
  };

  type messageGetPayload<S extends boolean | null | undefined | messageDefaultArgs> = $Result.GetResult<
    Prisma.$messagePayload,
    S
  >;

  type messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    messageFindManyArgs,
    'select' | 'include'
  > & {
    select?: MessageCountAggregateInputType | true;
  };

  export interface messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['message']; meta: { name: 'message' } };
    /**
     * Find zero or one Message that matches the filter.
     * @param {messageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends messageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, messageFindUniqueArgs<ExtArgs>>,
    ): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {messageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends messageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, messageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__messageClient<
      $Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends messageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, messageFindFirstArgs<ExtArgs>>,
    ): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends messageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, messageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     *
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends messageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, messageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Message.
     * @param {messageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     *
     **/
    create<T extends messageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, messageCreateArgs<ExtArgs>>,
    ): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Messages.
     *     @param {messageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends messageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, messageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Message.
     * @param {messageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     *
     **/
    delete<T extends messageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, messageDeleteArgs<ExtArgs>>,
    ): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Message.
     * @param {messageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends messageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, messageUpdateArgs<ExtArgs>>,
    ): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Messages.
     * @param {messageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends messageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, messageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends messageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, messageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Message.
     * @param {messageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     **/
    upsert<T extends messageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, messageUpsertArgs<ExtArgs>>,
    ): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
     **/
    count<T extends messageCountArgs>(
      args?: Subset<T, messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MessageAggregateArgs>(
      args: Subset<T, MessageAggregateArgs>,
    ): Prisma.PrismaPromise<GetMessageAggregateType<T>>;

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends messageGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messageGroupByArgs['orderBy'] }
        : { orderBy?: messageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, messageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the message model
     */
    readonly fields: messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the message model
   */
  interface messageFieldRefs {
    readonly id: FieldRef<'message', 'String'>;
    readonly message_status: FieldRef<'message', 'String'>;
    readonly message_priority: FieldRef<'message', 'Int'>;
    readonly message_content: FieldRef<'message', 'String'>;
    readonly message_type: FieldRef<'message', 'String'>;
    readonly message_sender: FieldRef<'message', 'String'>;
    readonly message_recipient: FieldRef<'message', 'String'>;
    readonly message_read_status: FieldRef<'message', 'Boolean'>;
    readonly message_delivery_time: FieldRef<'message', 'DateTime'>;
    readonly message_attachment: FieldRef<'message', 'String'>;
    readonly message_reply_status: FieldRef<'message', 'Boolean'>;
    readonly message_category: FieldRef<'message', 'String'>;
    readonly message_sent_time: FieldRef<'message', 'DateTime'>;
    readonly message_response_time: FieldRef<'message', 'DateTime'>;
    readonly message_feedback: FieldRef<'message', 'String'>;
    readonly created_at: FieldRef<'message', 'DateTime'>;
    readonly updated_at: FieldRef<'message', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * message findUnique
   */
  export type messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput;
  };

  /**
   * message findUniqueOrThrow
   */
  export type messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput;
  };

  /**
   * message findFirst
   */
  export type messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * message findFirstOrThrow
   */
  export type messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * message findMany
   */
  export type messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
    /**
     * Filter, which messages to fetch.
     */
    where?: messageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing messages.
     */
    cursor?: messageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` messages.
     */
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * message create
   */
  export type messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
    /**
     * The data needed to create a message.
     */
    data: XOR<messageCreateInput, messageUncheckedCreateInput>;
  };

  /**
   * message createMany
   */
  export type messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * message update
   */
  export type messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
    /**
     * The data needed to update a message.
     */
    data: XOR<messageUpdateInput, messageUncheckedUpdateInput>;
    /**
     * Choose, which message to update.
     */
    where: messageWhereUniqueInput;
  };

  /**
   * message updateMany
   */
  export type messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>;
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput;
  };

  /**
   * message upsert
   */
  export type messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
    /**
     * The filter to search for the message to update in case it exists.
     */
    where: messageWhereUniqueInput;
    /**
     * In case the message found by the `where` argument doesn't exist, create a new message with this data.
     */
    create: XOR<messageCreateInput, messageUncheckedCreateInput>;
    /**
     * In case the message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messageUpdateInput, messageUncheckedUpdateInput>;
  };

  /**
   * message delete
   */
  export type messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
    /**
     * Filter which message to delete.
     */
    where: messageWhereUniqueInput;
  };

  /**
   * message deleteMany
   */
  export type messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messageWhereInput;
  };

  /**
   * message without action
   */
  export type messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null;
  };

  /**
   * Model subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null;
    _avg: SubscriptionAvgAggregateOutputType | null;
    _sum: SubscriptionSumAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  export type SubscriptionAvgAggregateOutputType = {
    subscription_duration: number | null;
    subscription_cost: number | null;
  };

  export type SubscriptionSumAggregateOutputType = {
    subscription_duration: number | null;
    subscription_cost: number | null;
  };

  export type SubscriptionMinAggregateOutputType = {
    id: string | null;
    expiry_date: Date | null;
    subscription_type: string | null;
    subscription_duration: number | null;
    subscription_cost: number | null;
    subscription_status: boolean | null;
    subscription_features: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null;
    expiry_date: Date | null;
    subscription_type: string | null;
    subscription_duration: number | null;
    subscription_cost: number | null;
    subscription_status: boolean | null;
    subscription_features: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SubscriptionCountAggregateOutputType = {
    id: number;
    expiry_date: number;
    subscription_type: number;
    subscription_duration: number;
    subscription_cost: number;
    subscription_status: number;
    subscription_features: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SubscriptionAvgAggregateInputType = {
    subscription_duration?: true;
    subscription_cost?: true;
  };

  export type SubscriptionSumAggregateInputType = {
    subscription_duration?: true;
    subscription_cost?: true;
  };

  export type SubscriptionMinAggregateInputType = {
    id?: true;
    expiry_date?: true;
    subscription_type?: true;
    subscription_duration?: true;
    subscription_cost?: true;
    subscription_status?: true;
    subscription_features?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SubscriptionMaxAggregateInputType = {
    id?: true;
    expiry_date?: true;
    subscription_type?: true;
    subscription_duration?: true;
    subscription_cost?: true;
    subscription_status?: true;
    subscription_features?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SubscriptionCountAggregateInputType = {
    id?: true;
    expiry_date?: true;
    subscription_type?: true;
    subscription_duration?: true;
    subscription_cost?: true;
    subscription_status?: true;
    subscription_features?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscription to aggregate.
     */
    where?: subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned subscriptions
     **/
    _count?: true | SubscriptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubscriptionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubscriptionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>;
  };

  export type subscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionWhereInput;
    orderBy?: subscriptionOrderByWithAggregationInput | subscriptionOrderByWithAggregationInput[];
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum;
    having?: subscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionCountAggregateInputType | true;
    _avg?: SubscriptionAvgAggregateInputType;
    _sum?: SubscriptionSumAggregateInputType;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type SubscriptionGroupByOutputType = {
    id: string;
    expiry_date: Date | null;
    subscription_type: string;
    subscription_duration: number | null;
    subscription_cost: number;
    subscription_status: boolean | null;
    subscription_features: string | null;
    created_at: Date;
    updated_at: Date;
    _count: SubscriptionCountAggregateOutputType | null;
    _avg: SubscriptionAvgAggregateOutputType | null;
    _sum: SubscriptionSumAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  type GetSubscriptionGroupByPayload<T extends subscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SubscriptionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
          : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>;
      }
    >
  >;

  export type subscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        expiry_date?: boolean;
        subscription_type?: boolean;
        subscription_duration?: boolean;
        subscription_cost?: boolean;
        subscription_status?: boolean;
        subscription_features?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['subscription']
    >;

  export type subscriptionSelectScalar = {
    id?: boolean;
    expiry_date?: boolean;
    subscription_type?: boolean;
    subscription_duration?: boolean;
    subscription_cost?: boolean;
    subscription_status?: boolean;
    subscription_features?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $subscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'subscription';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        expiry_date: Date | null;
        subscription_type: string;
        subscription_duration: number | null;
        subscription_cost: number;
        subscription_status: boolean | null;
        subscription_features: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['subscription']
    >;
    composites: {};
  };

  type subscriptionGetPayload<S extends boolean | null | undefined | subscriptionDefaultArgs> = $Result.GetResult<
    Prisma.$subscriptionPayload,
    S
  >;

  type subscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    subscriptionFindManyArgs,
    'select' | 'include'
  > & {
    select?: SubscriptionCountAggregateInputType | true;
  };

  export interface subscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscription']; meta: { name: 'subscription' } };
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {subscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends subscriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionFindUniqueArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<
      $Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Subscription that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {subscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends subscriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<
      $Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends subscriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindFirstArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<
      $Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends subscriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<
      $Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     *
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends subscriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Subscription.
     * @param {subscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     *
     **/
    create<T extends subscriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionCreateArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Subscriptions.
     *     @param {subscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     *     @example
     *     // Create many Subscriptions
     *     const subscription = await prisma.subscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends subscriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Subscription.
     * @param {subscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     *
     **/
    delete<T extends subscriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionDeleteArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Subscription.
     * @param {subscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends subscriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionUpdateArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Subscriptions.
     * @param {subscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends subscriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends subscriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Subscription.
     * @param {subscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     **/
    upsert<T extends subscriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionUpsertArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
     **/
    count<T extends subscriptionCountArgs>(
      args?: Subset<T, subscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriptionAggregateArgs>(
      args: Subset<T, SubscriptionAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>;

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends subscriptionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptionGroupByArgs['orderBy'] }
        : { orderBy?: subscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, subscriptionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the subscription model
     */
    readonly fields: subscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the subscription model
   */
  interface subscriptionFieldRefs {
    readonly id: FieldRef<'subscription', 'String'>;
    readonly expiry_date: FieldRef<'subscription', 'DateTime'>;
    readonly subscription_type: FieldRef<'subscription', 'String'>;
    readonly subscription_duration: FieldRef<'subscription', 'Int'>;
    readonly subscription_cost: FieldRef<'subscription', 'Float'>;
    readonly subscription_status: FieldRef<'subscription', 'Boolean'>;
    readonly subscription_features: FieldRef<'subscription', 'String'>;
    readonly created_at: FieldRef<'subscription', 'DateTime'>;
    readonly updated_at: FieldRef<'subscription', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * subscription findUnique
   */
  export type subscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscription to fetch.
     */
    where: subscriptionWhereUniqueInput;
  };

  /**
   * subscription findUniqueOrThrow
   */
  export type subscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscription to fetch.
     */
    where: subscriptionWhereUniqueInput;
  };

  /**
   * subscription findFirst
   */
  export type subscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscription to fetch.
     */
    where?: subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * subscription findFirstOrThrow
   */
  export type subscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscription to fetch.
     */
    where?: subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * subscription findMany
   */
  export type subscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * subscription create
   */
  export type subscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * The data needed to create a subscription.
     */
    data: XOR<subscriptionCreateInput, subscriptionUncheckedCreateInput>;
  };

  /**
   * subscription createMany
   */
  export type subscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionCreateManyInput | subscriptionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * subscription update
   */
  export type subscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * The data needed to update a subscription.
     */
    data: XOR<subscriptionUpdateInput, subscriptionUncheckedUpdateInput>;
    /**
     * Choose, which subscription to update.
     */
    where: subscriptionWhereUniqueInput;
  };

  /**
   * subscription updateMany
   */
  export type subscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionUpdateManyMutationInput, subscriptionUncheckedUpdateManyInput>;
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionWhereInput;
  };

  /**
   * subscription upsert
   */
  export type subscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * The filter to search for the subscription to update in case it exists.
     */
    where: subscriptionWhereUniqueInput;
    /**
     * In case the subscription found by the `where` argument doesn't exist, create a new subscription with this data.
     */
    create: XOR<subscriptionCreateInput, subscriptionUncheckedCreateInput>;
    /**
     * In case the subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptionUpdateInput, subscriptionUncheckedUpdateInput>;
  };

  /**
   * subscription delete
   */
  export type subscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter which subscription to delete.
     */
    where: subscriptionWhereUniqueInput;
  };

  /**
   * subscription deleteMany
   */
  export type subscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to delete
     */
    where?: subscriptionWhereInput;
  };

  /**
   * subscription without action
   */
  export type subscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
  };

  /**
   * Model tier
   */

  export type AggregateTier = {
    _count: TierCountAggregateOutputType | null;
    _avg: TierAvgAggregateOutputType | null;
    _sum: TierSumAggregateOutputType | null;
    _min: TierMinAggregateOutputType | null;
    _max: TierMaxAggregateOutputType | null;
  };

  export type TierAvgAggregateOutputType = {
    price: number | null;
    tier_level: number | null;
    max_messages: number | null;
    tier_duration: number | null;
    tier_discount: number | null;
    tier_limit_per_user: number | null;
    tier_max_users: number | null;
    tier_trial_period: number | null;
    tier_referral_bonus: number | null;
    tier_partner_discount: number | null;
    tier_reward_points: number | null;
  };

  export type TierSumAggregateOutputType = {
    price: number | null;
    tier_level: number | null;
    max_messages: number | null;
    tier_duration: number | null;
    tier_discount: number | null;
    tier_limit_per_user: number | null;
    tier_max_users: number | null;
    tier_trial_period: number | null;
    tier_referral_bonus: number | null;
    tier_partner_discount: number | null;
    tier_reward_points: number | null;
  };

  export type TierMinAggregateOutputType = {
    id: string | null;
    price: number | null;
    tier_level: number | null;
    description: string | null;
    max_messages: number | null;
    tier_name: string | null;
    tier_duration: number | null;
    tier_status: boolean | null;
    tier_expiration_notification: boolean | null;
    tier_discount: number | null;
    tier_upgrade_option: boolean | null;
    tier_renewal_option: boolean | null;
    tier_auto_upgrade: boolean | null;
    tier_downgrade_option: boolean | null;
    tier_cancellation_option: boolean | null;
    tier_limit_per_user: number | null;
    tier_max_users: number | null;
    tier_additional_features: string | null;
    tier_trial_period: number | null;
    tier_activation_date: Date | null;
    tier_deactivation_date: Date | null;
    tier_customization_option: boolean | null;
    tier_support_option: boolean | null;
    tier_referral_bonus: number | null;
    tier_feedback_option: boolean | null;
    tier_partner_discount: number | null;
    tier_reward_points: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TierMaxAggregateOutputType = {
    id: string | null;
    price: number | null;
    tier_level: number | null;
    description: string | null;
    max_messages: number | null;
    tier_name: string | null;
    tier_duration: number | null;
    tier_status: boolean | null;
    tier_expiration_notification: boolean | null;
    tier_discount: number | null;
    tier_upgrade_option: boolean | null;
    tier_renewal_option: boolean | null;
    tier_auto_upgrade: boolean | null;
    tier_downgrade_option: boolean | null;
    tier_cancellation_option: boolean | null;
    tier_limit_per_user: number | null;
    tier_max_users: number | null;
    tier_additional_features: string | null;
    tier_trial_period: number | null;
    tier_activation_date: Date | null;
    tier_deactivation_date: Date | null;
    tier_customization_option: boolean | null;
    tier_support_option: boolean | null;
    tier_referral_bonus: number | null;
    tier_feedback_option: boolean | null;
    tier_partner_discount: number | null;
    tier_reward_points: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TierCountAggregateOutputType = {
    id: number;
    price: number;
    tier_level: number;
    description: number;
    max_messages: number;
    tier_name: number;
    tier_duration: number;
    tier_status: number;
    tier_expiration_notification: number;
    tier_discount: number;
    tier_upgrade_option: number;
    tier_renewal_option: number;
    tier_auto_upgrade: number;
    tier_downgrade_option: number;
    tier_cancellation_option: number;
    tier_limit_per_user: number;
    tier_max_users: number;
    tier_additional_features: number;
    tier_trial_period: number;
    tier_activation_date: number;
    tier_deactivation_date: number;
    tier_customization_option: number;
    tier_support_option: number;
    tier_referral_bonus: number;
    tier_feedback_option: number;
    tier_partner_discount: number;
    tier_reward_points: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TierAvgAggregateInputType = {
    price?: true;
    tier_level?: true;
    max_messages?: true;
    tier_duration?: true;
    tier_discount?: true;
    tier_limit_per_user?: true;
    tier_max_users?: true;
    tier_trial_period?: true;
    tier_referral_bonus?: true;
    tier_partner_discount?: true;
    tier_reward_points?: true;
  };

  export type TierSumAggregateInputType = {
    price?: true;
    tier_level?: true;
    max_messages?: true;
    tier_duration?: true;
    tier_discount?: true;
    tier_limit_per_user?: true;
    tier_max_users?: true;
    tier_trial_period?: true;
    tier_referral_bonus?: true;
    tier_partner_discount?: true;
    tier_reward_points?: true;
  };

  export type TierMinAggregateInputType = {
    id?: true;
    price?: true;
    tier_level?: true;
    description?: true;
    max_messages?: true;
    tier_name?: true;
    tier_duration?: true;
    tier_status?: true;
    tier_expiration_notification?: true;
    tier_discount?: true;
    tier_upgrade_option?: true;
    tier_renewal_option?: true;
    tier_auto_upgrade?: true;
    tier_downgrade_option?: true;
    tier_cancellation_option?: true;
    tier_limit_per_user?: true;
    tier_max_users?: true;
    tier_additional_features?: true;
    tier_trial_period?: true;
    tier_activation_date?: true;
    tier_deactivation_date?: true;
    tier_customization_option?: true;
    tier_support_option?: true;
    tier_referral_bonus?: true;
    tier_feedback_option?: true;
    tier_partner_discount?: true;
    tier_reward_points?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TierMaxAggregateInputType = {
    id?: true;
    price?: true;
    tier_level?: true;
    description?: true;
    max_messages?: true;
    tier_name?: true;
    tier_duration?: true;
    tier_status?: true;
    tier_expiration_notification?: true;
    tier_discount?: true;
    tier_upgrade_option?: true;
    tier_renewal_option?: true;
    tier_auto_upgrade?: true;
    tier_downgrade_option?: true;
    tier_cancellation_option?: true;
    tier_limit_per_user?: true;
    tier_max_users?: true;
    tier_additional_features?: true;
    tier_trial_period?: true;
    tier_activation_date?: true;
    tier_deactivation_date?: true;
    tier_customization_option?: true;
    tier_support_option?: true;
    tier_referral_bonus?: true;
    tier_feedback_option?: true;
    tier_partner_discount?: true;
    tier_reward_points?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TierCountAggregateInputType = {
    id?: true;
    price?: true;
    tier_level?: true;
    description?: true;
    max_messages?: true;
    tier_name?: true;
    tier_duration?: true;
    tier_status?: true;
    tier_expiration_notification?: true;
    tier_discount?: true;
    tier_upgrade_option?: true;
    tier_renewal_option?: true;
    tier_auto_upgrade?: true;
    tier_downgrade_option?: true;
    tier_cancellation_option?: true;
    tier_limit_per_user?: true;
    tier_max_users?: true;
    tier_additional_features?: true;
    tier_trial_period?: true;
    tier_activation_date?: true;
    tier_deactivation_date?: true;
    tier_customization_option?: true;
    tier_support_option?: true;
    tier_referral_bonus?: true;
    tier_feedback_option?: true;
    tier_partner_discount?: true;
    tier_reward_points?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tier to aggregate.
     */
    where?: tierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tiers to fetch.
     */
    orderBy?: tierOrderByWithRelationInput | tierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: tierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tiers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tiers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tiers
     **/
    _count?: true | TierCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TierAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TierSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TierMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TierMaxAggregateInputType;
  };

  export type GetTierAggregateType<T extends TierAggregateArgs> = {
    [P in keyof T & keyof AggregateTier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTier[P]>
      : GetScalarType<T[P], AggregateTier[P]>;
  };

  export type tierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tierWhereInput;
    orderBy?: tierOrderByWithAggregationInput | tierOrderByWithAggregationInput[];
    by: TierScalarFieldEnum[] | TierScalarFieldEnum;
    having?: tierScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TierCountAggregateInputType | true;
    _avg?: TierAvgAggregateInputType;
    _sum?: TierSumAggregateInputType;
    _min?: TierMinAggregateInputType;
    _max?: TierMaxAggregateInputType;
  };

  export type TierGroupByOutputType = {
    id: string;
    price: number;
    tier_level: number;
    description: string | null;
    max_messages: number | null;
    tier_name: string;
    tier_duration: number | null;
    tier_status: boolean | null;
    tier_expiration_notification: boolean | null;
    tier_discount: number | null;
    tier_upgrade_option: boolean | null;
    tier_renewal_option: boolean | null;
    tier_auto_upgrade: boolean | null;
    tier_downgrade_option: boolean | null;
    tier_cancellation_option: boolean | null;
    tier_limit_per_user: number | null;
    tier_max_users: number | null;
    tier_additional_features: string | null;
    tier_trial_period: number | null;
    tier_activation_date: Date | null;
    tier_deactivation_date: Date | null;
    tier_customization_option: boolean | null;
    tier_support_option: boolean | null;
    tier_referral_bonus: number | null;
    tier_feedback_option: boolean | null;
    tier_partner_discount: number | null;
    tier_reward_points: number | null;
    created_at: Date;
    updated_at: Date;
    _count: TierCountAggregateOutputType | null;
    _avg: TierAvgAggregateOutputType | null;
    _sum: TierSumAggregateOutputType | null;
    _min: TierMinAggregateOutputType | null;
    _max: TierMaxAggregateOutputType | null;
  };

  type GetTierGroupByPayload<T extends tierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TierGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TierGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TierGroupByOutputType[P]>
          : GetScalarType<T[P], TierGroupByOutputType[P]>;
      }
    >
  >;

  export type tierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      price?: boolean;
      tier_level?: boolean;
      description?: boolean;
      max_messages?: boolean;
      tier_name?: boolean;
      tier_duration?: boolean;
      tier_status?: boolean;
      tier_expiration_notification?: boolean;
      tier_discount?: boolean;
      tier_upgrade_option?: boolean;
      tier_renewal_option?: boolean;
      tier_auto_upgrade?: boolean;
      tier_downgrade_option?: boolean;
      tier_cancellation_option?: boolean;
      tier_limit_per_user?: boolean;
      tier_max_users?: boolean;
      tier_additional_features?: boolean;
      tier_trial_period?: boolean;
      tier_activation_date?: boolean;
      tier_deactivation_date?: boolean;
      tier_customization_option?: boolean;
      tier_support_option?: boolean;
      tier_referral_bonus?: boolean;
      tier_feedback_option?: boolean;
      tier_partner_discount?: boolean;
      tier_reward_points?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['tier']
  >;

  export type tierSelectScalar = {
    id?: boolean;
    price?: boolean;
    tier_level?: boolean;
    description?: boolean;
    max_messages?: boolean;
    tier_name?: boolean;
    tier_duration?: boolean;
    tier_status?: boolean;
    tier_expiration_notification?: boolean;
    tier_discount?: boolean;
    tier_upgrade_option?: boolean;
    tier_renewal_option?: boolean;
    tier_auto_upgrade?: boolean;
    tier_downgrade_option?: boolean;
    tier_cancellation_option?: boolean;
    tier_limit_per_user?: boolean;
    tier_max_users?: boolean;
    tier_additional_features?: boolean;
    tier_trial_period?: boolean;
    tier_activation_date?: boolean;
    tier_deactivation_date?: boolean;
    tier_customization_option?: boolean;
    tier_support_option?: boolean;
    tier_referral_bonus?: boolean;
    tier_feedback_option?: boolean;
    tier_partner_discount?: boolean;
    tier_reward_points?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $tierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'tier';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        price: number;
        tier_level: number;
        description: string | null;
        max_messages: number | null;
        tier_name: string;
        tier_duration: number | null;
        tier_status: boolean | null;
        tier_expiration_notification: boolean | null;
        tier_discount: number | null;
        tier_upgrade_option: boolean | null;
        tier_renewal_option: boolean | null;
        tier_auto_upgrade: boolean | null;
        tier_downgrade_option: boolean | null;
        tier_cancellation_option: boolean | null;
        tier_limit_per_user: number | null;
        tier_max_users: number | null;
        tier_additional_features: string | null;
        tier_trial_period: number | null;
        tier_activation_date: Date | null;
        tier_deactivation_date: Date | null;
        tier_customization_option: boolean | null;
        tier_support_option: boolean | null;
        tier_referral_bonus: number | null;
        tier_feedback_option: boolean | null;
        tier_partner_discount: number | null;
        tier_reward_points: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['tier']
    >;
    composites: {};
  };

  type tierGetPayload<S extends boolean | null | undefined | tierDefaultArgs> = $Result.GetResult<
    Prisma.$tierPayload,
    S
  >;

  type tierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    tierFindManyArgs,
    'select' | 'include'
  > & {
    select?: TierCountAggregateInputType | true;
  };

  export interface tierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tier']; meta: { name: 'tier' } };
    /**
     * Find zero or one Tier that matches the filter.
     * @param {tierFindUniqueArgs} args - Arguments to find a Tier
     * @example
     * // Get one Tier
     * const tier = await prisma.tier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends tierFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tierFindUniqueArgs<ExtArgs>>,
    ): Prisma__tierClient<$Result.GetResult<Prisma.$tierPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Tier that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {tierFindUniqueOrThrowArgs} args - Arguments to find a Tier
     * @example
     * // Get one Tier
     * const tier = await prisma.tier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends tierFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tierFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__tierClient<$Result.GetResult<Prisma.$tierPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Tier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tierFindFirstArgs} args - Arguments to find a Tier
     * @example
     * // Get one Tier
     * const tier = await prisma.tier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends tierFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tierFindFirstArgs<ExtArgs>>,
    ): Prisma__tierClient<$Result.GetResult<Prisma.$tierPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Tier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tierFindFirstOrThrowArgs} args - Arguments to find a Tier
     * @example
     * // Get one Tier
     * const tier = await prisma.tier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends tierFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tierFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__tierClient<$Result.GetResult<Prisma.$tierPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tiers
     * const tiers = await prisma.tier.findMany()
     *
     * // Get first 10 Tiers
     * const tiers = await prisma.tier.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tierWithIdOnly = await prisma.tier.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends tierFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tierFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tierPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Tier.
     * @param {tierCreateArgs} args - Arguments to create a Tier.
     * @example
     * // Create one Tier
     * const Tier = await prisma.tier.create({
     *   data: {
     *     // ... data to create a Tier
     *   }
     * })
     *
     **/
    create<T extends tierCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tierCreateArgs<ExtArgs>>,
    ): Prisma__tierClient<$Result.GetResult<Prisma.$tierPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tiers.
     *     @param {tierCreateManyArgs} args - Arguments to create many Tiers.
     *     @example
     *     // Create many Tiers
     *     const tier = await prisma.tier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends tierCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tierCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Tier.
     * @param {tierDeleteArgs} args - Arguments to delete one Tier.
     * @example
     * // Delete one Tier
     * const Tier = await prisma.tier.delete({
     *   where: {
     *     // ... filter to delete one Tier
     *   }
     * })
     *
     **/
    delete<T extends tierDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tierDeleteArgs<ExtArgs>>,
    ): Prisma__tierClient<$Result.GetResult<Prisma.$tierPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Tier.
     * @param {tierUpdateArgs} args - Arguments to update one Tier.
     * @example
     * // Update one Tier
     * const tier = await prisma.tier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends tierUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tierUpdateArgs<ExtArgs>>,
    ): Prisma__tierClient<$Result.GetResult<Prisma.$tierPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tiers.
     * @param {tierDeleteManyArgs} args - Arguments to filter Tiers to delete.
     * @example
     * // Delete a few Tiers
     * const { count } = await prisma.tier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends tierDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tierDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tiers
     * const tier = await prisma.tier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends tierUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tierUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tier.
     * @param {tierUpsertArgs} args - Arguments to update or create a Tier.
     * @example
     * // Update or create a Tier
     * const tier = await prisma.tier.upsert({
     *   create: {
     *     // ... data to create a Tier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tier we want to update
     *   }
     * })
     **/
    upsert<T extends tierUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tierUpsertArgs<ExtArgs>>,
    ): Prisma__tierClient<$Result.GetResult<Prisma.$tierPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tierCountArgs} args - Arguments to filter Tiers to count.
     * @example
     * // Count the number of Tiers
     * const count = await prisma.tier.count({
     *   where: {
     *     // ... the filter for the Tiers we want to count
     *   }
     * })
     **/
    count<T extends tierCountArgs>(
      args?: Subset<T, tierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TierCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TierAggregateArgs>(
      args: Subset<T, TierAggregateArgs>,
    ): Prisma.PrismaPromise<GetTierAggregateType<T>>;

    /**
     * Group by Tier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends tierGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tierGroupByArgs['orderBy'] }
        : { orderBy?: tierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, tierGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tier model
     */
    readonly fields: tierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tierClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the tier model
   */
  interface tierFieldRefs {
    readonly id: FieldRef<'tier', 'String'>;
    readonly price: FieldRef<'tier', 'Float'>;
    readonly tier_level: FieldRef<'tier', 'Int'>;
    readonly description: FieldRef<'tier', 'String'>;
    readonly max_messages: FieldRef<'tier', 'Int'>;
    readonly tier_name: FieldRef<'tier', 'String'>;
    readonly tier_duration: FieldRef<'tier', 'Int'>;
    readonly tier_status: FieldRef<'tier', 'Boolean'>;
    readonly tier_expiration_notification: FieldRef<'tier', 'Boolean'>;
    readonly tier_discount: FieldRef<'tier', 'Float'>;
    readonly tier_upgrade_option: FieldRef<'tier', 'Boolean'>;
    readonly tier_renewal_option: FieldRef<'tier', 'Boolean'>;
    readonly tier_auto_upgrade: FieldRef<'tier', 'Boolean'>;
    readonly tier_downgrade_option: FieldRef<'tier', 'Boolean'>;
    readonly tier_cancellation_option: FieldRef<'tier', 'Boolean'>;
    readonly tier_limit_per_user: FieldRef<'tier', 'Int'>;
    readonly tier_max_users: FieldRef<'tier', 'Int'>;
    readonly tier_additional_features: FieldRef<'tier', 'String'>;
    readonly tier_trial_period: FieldRef<'tier', 'Int'>;
    readonly tier_activation_date: FieldRef<'tier', 'DateTime'>;
    readonly tier_deactivation_date: FieldRef<'tier', 'DateTime'>;
    readonly tier_customization_option: FieldRef<'tier', 'Boolean'>;
    readonly tier_support_option: FieldRef<'tier', 'Boolean'>;
    readonly tier_referral_bonus: FieldRef<'tier', 'Float'>;
    readonly tier_feedback_option: FieldRef<'tier', 'Boolean'>;
    readonly tier_partner_discount: FieldRef<'tier', 'Float'>;
    readonly tier_reward_points: FieldRef<'tier', 'Int'>;
    readonly created_at: FieldRef<'tier', 'DateTime'>;
    readonly updated_at: FieldRef<'tier', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * tier findUnique
   */
  export type tierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
    /**
     * Filter, which tier to fetch.
     */
    where: tierWhereUniqueInput;
  };

  /**
   * tier findUniqueOrThrow
   */
  export type tierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
    /**
     * Filter, which tier to fetch.
     */
    where: tierWhereUniqueInput;
  };

  /**
   * tier findFirst
   */
  export type tierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
    /**
     * Filter, which tier to fetch.
     */
    where?: tierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tiers to fetch.
     */
    orderBy?: tierOrderByWithRelationInput | tierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tiers.
     */
    cursor?: tierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tiers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tiers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tiers.
     */
    distinct?: TierScalarFieldEnum | TierScalarFieldEnum[];
  };

  /**
   * tier findFirstOrThrow
   */
  export type tierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
    /**
     * Filter, which tier to fetch.
     */
    where?: tierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tiers to fetch.
     */
    orderBy?: tierOrderByWithRelationInput | tierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tiers.
     */
    cursor?: tierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tiers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tiers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tiers.
     */
    distinct?: TierScalarFieldEnum | TierScalarFieldEnum[];
  };

  /**
   * tier findMany
   */
  export type tierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
    /**
     * Filter, which tiers to fetch.
     */
    where?: tierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tiers to fetch.
     */
    orderBy?: tierOrderByWithRelationInput | tierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tiers.
     */
    cursor?: tierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tiers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tiers.
     */
    skip?: number;
    distinct?: TierScalarFieldEnum | TierScalarFieldEnum[];
  };

  /**
   * tier create
   */
  export type tierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
    /**
     * The data needed to create a tier.
     */
    data: XOR<tierCreateInput, tierUncheckedCreateInput>;
  };

  /**
   * tier createMany
   */
  export type tierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tiers.
     */
    data: tierCreateManyInput | tierCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * tier update
   */
  export type tierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
    /**
     * The data needed to update a tier.
     */
    data: XOR<tierUpdateInput, tierUncheckedUpdateInput>;
    /**
     * Choose, which tier to update.
     */
    where: tierWhereUniqueInput;
  };

  /**
   * tier updateMany
   */
  export type tierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tiers.
     */
    data: XOR<tierUpdateManyMutationInput, tierUncheckedUpdateManyInput>;
    /**
     * Filter which tiers to update
     */
    where?: tierWhereInput;
  };

  /**
   * tier upsert
   */
  export type tierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
    /**
     * The filter to search for the tier to update in case it exists.
     */
    where: tierWhereUniqueInput;
    /**
     * In case the tier found by the `where` argument doesn't exist, create a new tier with this data.
     */
    create: XOR<tierCreateInput, tierUncheckedCreateInput>;
    /**
     * In case the tier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tierUpdateInput, tierUncheckedUpdateInput>;
  };

  /**
   * tier delete
   */
  export type tierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
    /**
     * Filter which tier to delete.
     */
    where: tierWhereUniqueInput;
  };

  /**
   * tier deleteMany
   */
  export type tierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tiers to delete
     */
    where?: tierWhereInput;
  };

  /**
   * tier without action
   */
  export type tierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tier
     */
    select?: tierSelect<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model user_subscription
   */

  export type AggregateUser_subscription = {
    _count: User_subscriptionCountAggregateOutputType | null;
    _avg: User_subscriptionAvgAggregateOutputType | null;
    _sum: User_subscriptionSumAggregateOutputType | null;
    _min: User_subscriptionMinAggregateOutputType | null;
    _max: User_subscriptionMaxAggregateOutputType | null;
  };

  export type User_subscriptionAvgAggregateOutputType = {
    subscription_tier_id: number | null;
    user_subscription_pause_duration: number | null;
    user_subscription_pause_count: number | null;
    user_subscription_pause_extension: number | null;
  };

  export type User_subscriptionSumAggregateOutputType = {
    subscription_tier_id: number | null;
    user_subscription_pause_duration: number | null;
    user_subscription_pause_count: number | null;
    user_subscription_pause_extension: number | null;
  };

  export type User_subscriptionMinAggregateOutputType = {
    id: string | null;
    subscription_end_date: Date | null;
    subscription_start_date: Date | null;
    subscription_status: boolean | null;
    subscription_renewal_date: Date | null;
    subscription_tier_id: number | null;
    subscription_payment_status: boolean | null;
    user_subscription_type: string | null;
    user_subscription_end_reason: string | null;
    user_subscription_renewal_reminder: boolean | null;
    user_subscription_last_updated: Date | null;
    user_subscription_activation_date: Date | null;
    user_subscription_cancellation_date: Date | null;
    user_subscription_pause_date: Date | null;
    user_subscription_pause_reason: string | null;
    user_subscription_pause_duration: number | null;
    user_subscription_pause_end_date: Date | null;
    user_subscription_pause_count: number | null;
    user_subscription_pause_extension: number | null;
    user_subscription_feedback: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_subscriptionMaxAggregateOutputType = {
    id: string | null;
    subscription_end_date: Date | null;
    subscription_start_date: Date | null;
    subscription_status: boolean | null;
    subscription_renewal_date: Date | null;
    subscription_tier_id: number | null;
    subscription_payment_status: boolean | null;
    user_subscription_type: string | null;
    user_subscription_end_reason: string | null;
    user_subscription_renewal_reminder: boolean | null;
    user_subscription_last_updated: Date | null;
    user_subscription_activation_date: Date | null;
    user_subscription_cancellation_date: Date | null;
    user_subscription_pause_date: Date | null;
    user_subscription_pause_reason: string | null;
    user_subscription_pause_duration: number | null;
    user_subscription_pause_end_date: Date | null;
    user_subscription_pause_count: number | null;
    user_subscription_pause_extension: number | null;
    user_subscription_feedback: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_subscriptionCountAggregateOutputType = {
    id: number;
    subscription_end_date: number;
    subscription_start_date: number;
    subscription_status: number;
    subscription_renewal_date: number;
    subscription_tier_id: number;
    subscription_payment_status: number;
    user_subscription_type: number;
    user_subscription_end_reason: number;
    user_subscription_renewal_reminder: number;
    user_subscription_last_updated: number;
    user_subscription_activation_date: number;
    user_subscription_cancellation_date: number;
    user_subscription_pause_date: number;
    user_subscription_pause_reason: number;
    user_subscription_pause_duration: number;
    user_subscription_pause_end_date: number;
    user_subscription_pause_count: number;
    user_subscription_pause_extension: number;
    user_subscription_feedback: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type User_subscriptionAvgAggregateInputType = {
    subscription_tier_id?: true;
    user_subscription_pause_duration?: true;
    user_subscription_pause_count?: true;
    user_subscription_pause_extension?: true;
  };

  export type User_subscriptionSumAggregateInputType = {
    subscription_tier_id?: true;
    user_subscription_pause_duration?: true;
    user_subscription_pause_count?: true;
    user_subscription_pause_extension?: true;
  };

  export type User_subscriptionMinAggregateInputType = {
    id?: true;
    subscription_end_date?: true;
    subscription_start_date?: true;
    subscription_status?: true;
    subscription_renewal_date?: true;
    subscription_tier_id?: true;
    subscription_payment_status?: true;
    user_subscription_type?: true;
    user_subscription_end_reason?: true;
    user_subscription_renewal_reminder?: true;
    user_subscription_last_updated?: true;
    user_subscription_activation_date?: true;
    user_subscription_cancellation_date?: true;
    user_subscription_pause_date?: true;
    user_subscription_pause_reason?: true;
    user_subscription_pause_duration?: true;
    user_subscription_pause_end_date?: true;
    user_subscription_pause_count?: true;
    user_subscription_pause_extension?: true;
    user_subscription_feedback?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_subscriptionMaxAggregateInputType = {
    id?: true;
    subscription_end_date?: true;
    subscription_start_date?: true;
    subscription_status?: true;
    subscription_renewal_date?: true;
    subscription_tier_id?: true;
    subscription_payment_status?: true;
    user_subscription_type?: true;
    user_subscription_end_reason?: true;
    user_subscription_renewal_reminder?: true;
    user_subscription_last_updated?: true;
    user_subscription_activation_date?: true;
    user_subscription_cancellation_date?: true;
    user_subscription_pause_date?: true;
    user_subscription_pause_reason?: true;
    user_subscription_pause_duration?: true;
    user_subscription_pause_end_date?: true;
    user_subscription_pause_count?: true;
    user_subscription_pause_extension?: true;
    user_subscription_feedback?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_subscriptionCountAggregateInputType = {
    id?: true;
    subscription_end_date?: true;
    subscription_start_date?: true;
    subscription_status?: true;
    subscription_renewal_date?: true;
    subscription_tier_id?: true;
    subscription_payment_status?: true;
    user_subscription_type?: true;
    user_subscription_end_reason?: true;
    user_subscription_renewal_reminder?: true;
    user_subscription_last_updated?: true;
    user_subscription_activation_date?: true;
    user_subscription_cancellation_date?: true;
    user_subscription_pause_date?: true;
    user_subscription_pause_reason?: true;
    user_subscription_pause_duration?: true;
    user_subscription_pause_end_date?: true;
    user_subscription_pause_count?: true;
    user_subscription_pause_extension?: true;
    user_subscription_feedback?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type User_subscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_subscription to aggregate.
     */
    where?: user_subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_subscriptions to fetch.
     */
    orderBy?: user_subscriptionOrderByWithRelationInput | user_subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: user_subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned user_subscriptions
     **/
    _count?: true | User_subscriptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: User_subscriptionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: User_subscriptionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_subscriptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_subscriptionMaxAggregateInputType;
  };

  export type GetUser_subscriptionAggregateType<T extends User_subscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_subscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_subscription[P]>
      : GetScalarType<T[P], AggregateUser_subscription[P]>;
  };

  export type user_subscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_subscriptionWhereInput;
    orderBy?: user_subscriptionOrderByWithAggregationInput | user_subscriptionOrderByWithAggregationInput[];
    by: User_subscriptionScalarFieldEnum[] | User_subscriptionScalarFieldEnum;
    having?: user_subscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_subscriptionCountAggregateInputType | true;
    _avg?: User_subscriptionAvgAggregateInputType;
    _sum?: User_subscriptionSumAggregateInputType;
    _min?: User_subscriptionMinAggregateInputType;
    _max?: User_subscriptionMaxAggregateInputType;
  };

  export type User_subscriptionGroupByOutputType = {
    id: string;
    subscription_end_date: Date | null;
    subscription_start_date: Date | null;
    subscription_status: boolean | null;
    subscription_renewal_date: Date | null;
    subscription_tier_id: number | null;
    subscription_payment_status: boolean | null;
    user_subscription_type: string | null;
    user_subscription_end_reason: string | null;
    user_subscription_renewal_reminder: boolean | null;
    user_subscription_last_updated: Date | null;
    user_subscription_activation_date: Date | null;
    user_subscription_cancellation_date: Date | null;
    user_subscription_pause_date: Date | null;
    user_subscription_pause_reason: string | null;
    user_subscription_pause_duration: number | null;
    user_subscription_pause_end_date: Date | null;
    user_subscription_pause_count: number | null;
    user_subscription_pause_extension: number | null;
    user_subscription_feedback: string | null;
    created_at: Date;
    updated_at: Date;
    _count: User_subscriptionCountAggregateOutputType | null;
    _avg: User_subscriptionAvgAggregateOutputType | null;
    _sum: User_subscriptionSumAggregateOutputType | null;
    _min: User_subscriptionMinAggregateOutputType | null;
    _max: User_subscriptionMaxAggregateOutputType | null;
  };

  type GetUser_subscriptionGroupByPayload<T extends user_subscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_subscriptionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof User_subscriptionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], User_subscriptionGroupByOutputType[P]>
          : GetScalarType<T[P], User_subscriptionGroupByOutputType[P]>;
      }
    >
  >;

  export type user_subscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        subscription_end_date?: boolean;
        subscription_start_date?: boolean;
        subscription_status?: boolean;
        subscription_renewal_date?: boolean;
        subscription_tier_id?: boolean;
        subscription_payment_status?: boolean;
        user_subscription_type?: boolean;
        user_subscription_end_reason?: boolean;
        user_subscription_renewal_reminder?: boolean;
        user_subscription_last_updated?: boolean;
        user_subscription_activation_date?: boolean;
        user_subscription_cancellation_date?: boolean;
        user_subscription_pause_date?: boolean;
        user_subscription_pause_reason?: boolean;
        user_subscription_pause_duration?: boolean;
        user_subscription_pause_end_date?: boolean;
        user_subscription_pause_count?: boolean;
        user_subscription_pause_extension?: boolean;
        user_subscription_feedback?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['user_subscription']
    >;

  export type user_subscriptionSelectScalar = {
    id?: boolean;
    subscription_end_date?: boolean;
    subscription_start_date?: boolean;
    subscription_status?: boolean;
    subscription_renewal_date?: boolean;
    subscription_tier_id?: boolean;
    subscription_payment_status?: boolean;
    user_subscription_type?: boolean;
    user_subscription_end_reason?: boolean;
    user_subscription_renewal_reminder?: boolean;
    user_subscription_last_updated?: boolean;
    user_subscription_activation_date?: boolean;
    user_subscription_cancellation_date?: boolean;
    user_subscription_pause_date?: boolean;
    user_subscription_pause_reason?: boolean;
    user_subscription_pause_duration?: boolean;
    user_subscription_pause_end_date?: boolean;
    user_subscription_pause_count?: boolean;
    user_subscription_pause_extension?: boolean;
    user_subscription_feedback?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $user_subscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user_subscription';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        subscription_end_date: Date | null;
        subscription_start_date: Date | null;
        subscription_status: boolean | null;
        subscription_renewal_date: Date | null;
        subscription_tier_id: number | null;
        subscription_payment_status: boolean | null;
        user_subscription_type: string | null;
        user_subscription_end_reason: string | null;
        user_subscription_renewal_reminder: boolean | null;
        user_subscription_last_updated: Date | null;
        user_subscription_activation_date: Date | null;
        user_subscription_cancellation_date: Date | null;
        user_subscription_pause_date: Date | null;
        user_subscription_pause_reason: string | null;
        user_subscription_pause_duration: number | null;
        user_subscription_pause_end_date: Date | null;
        user_subscription_pause_count: number | null;
        user_subscription_pause_extension: number | null;
        user_subscription_feedback: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user_subscription']
    >;
    composites: {};
  };

  type user_subscriptionGetPayload<S extends boolean | null | undefined | user_subscriptionDefaultArgs> =
    $Result.GetResult<Prisma.$user_subscriptionPayload, S>;

  type user_subscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    user_subscriptionFindManyArgs,
    'select' | 'include'
  > & {
    select?: User_subscriptionCountAggregateInputType | true;
  };

  export interface user_subscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_subscription']; meta: { name: 'user_subscription' } };
    /**
     * Find zero or one User_subscription that matches the filter.
     * @param {user_subscriptionFindUniqueArgs} args - Arguments to find a User_subscription
     * @example
     * // Get one User_subscription
     * const user_subscription = await prisma.user_subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends user_subscriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_subscriptionFindUniqueArgs<ExtArgs>>,
    ): Prisma__user_subscriptionClient<
      $Result.GetResult<Prisma.$user_subscriptionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User_subscription that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {user_subscriptionFindUniqueOrThrowArgs} args - Arguments to find a User_subscription
     * @example
     * // Get one User_subscription
     * const user_subscription = await prisma.user_subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends user_subscriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_subscriptionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__user_subscriptionClient<
      $Result.GetResult<Prisma.$user_subscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User_subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subscriptionFindFirstArgs} args - Arguments to find a User_subscription
     * @example
     * // Get one User_subscription
     * const user_subscription = await prisma.user_subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends user_subscriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_subscriptionFindFirstArgs<ExtArgs>>,
    ): Prisma__user_subscriptionClient<
      $Result.GetResult<Prisma.$user_subscriptionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User_subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subscriptionFindFirstOrThrowArgs} args - Arguments to find a User_subscription
     * @example
     * // Get one User_subscription
     * const user_subscription = await prisma.user_subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends user_subscriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_subscriptionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__user_subscriptionClient<
      $Result.GetResult<Prisma.$user_subscriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more User_subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_subscriptions
     * const user_subscriptions = await prisma.user_subscription.findMany()
     *
     * // Get first 10 User_subscriptions
     * const user_subscriptions = await prisma.user_subscription.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const user_subscriptionWithIdOnly = await prisma.user_subscription.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends user_subscriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_subscriptionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_subscriptionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User_subscription.
     * @param {user_subscriptionCreateArgs} args - Arguments to create a User_subscription.
     * @example
     * // Create one User_subscription
     * const User_subscription = await prisma.user_subscription.create({
     *   data: {
     *     // ... data to create a User_subscription
     *   }
     * })
     *
     **/
    create<T extends user_subscriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_subscriptionCreateArgs<ExtArgs>>,
    ): Prisma__user_subscriptionClient<
      $Result.GetResult<Prisma.$user_subscriptionPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many User_subscriptions.
     *     @param {user_subscriptionCreateManyArgs} args - Arguments to create many User_subscriptions.
     *     @example
     *     // Create many User_subscriptions
     *     const user_subscription = await prisma.user_subscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends user_subscriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_subscriptionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User_subscription.
     * @param {user_subscriptionDeleteArgs} args - Arguments to delete one User_subscription.
     * @example
     * // Delete one User_subscription
     * const User_subscription = await prisma.user_subscription.delete({
     *   where: {
     *     // ... filter to delete one User_subscription
     *   }
     * })
     *
     **/
    delete<T extends user_subscriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_subscriptionDeleteArgs<ExtArgs>>,
    ): Prisma__user_subscriptionClient<
      $Result.GetResult<Prisma.$user_subscriptionPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User_subscription.
     * @param {user_subscriptionUpdateArgs} args - Arguments to update one User_subscription.
     * @example
     * // Update one User_subscription
     * const user_subscription = await prisma.user_subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends user_subscriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_subscriptionUpdateArgs<ExtArgs>>,
    ): Prisma__user_subscriptionClient<
      $Result.GetResult<Prisma.$user_subscriptionPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more User_subscriptions.
     * @param {user_subscriptionDeleteManyArgs} args - Arguments to filter User_subscriptions to delete.
     * @example
     * // Delete a few User_subscriptions
     * const { count } = await prisma.user_subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends user_subscriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_subscriptionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_subscriptions
     * const user_subscription = await prisma.user_subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends user_subscriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_subscriptionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User_subscription.
     * @param {user_subscriptionUpsertArgs} args - Arguments to update or create a User_subscription.
     * @example
     * // Update or create a User_subscription
     * const user_subscription = await prisma.user_subscription.upsert({
     *   create: {
     *     // ... data to create a User_subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_subscription we want to update
     *   }
     * })
     **/
    upsert<T extends user_subscriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_subscriptionUpsertArgs<ExtArgs>>,
    ): Prisma__user_subscriptionClient<
      $Result.GetResult<Prisma.$user_subscriptionPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of User_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subscriptionCountArgs} args - Arguments to filter User_subscriptions to count.
     * @example
     * // Count the number of User_subscriptions
     * const count = await prisma.user_subscription.count({
     *   where: {
     *     // ... the filter for the User_subscriptions we want to count
     *   }
     * })
     **/
    count<T extends user_subscriptionCountArgs>(
      args?: Subset<T, user_subscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_subscriptionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_subscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends User_subscriptionAggregateArgs>(
      args: Subset<T, User_subscriptionAggregateArgs>,
    ): Prisma.PrismaPromise<GetUser_subscriptionAggregateType<T>>;

    /**
     * Group by User_subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_subscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends user_subscriptionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_subscriptionGroupByArgs['orderBy'] }
        : { orderBy?: user_subscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, user_subscriptionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUser_subscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user_subscription model
     */
    readonly fields: user_subscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_subscriptionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user_subscription model
   */
  interface user_subscriptionFieldRefs {
    readonly id: FieldRef<'user_subscription', 'String'>;
    readonly subscription_end_date: FieldRef<'user_subscription', 'DateTime'>;
    readonly subscription_start_date: FieldRef<'user_subscription', 'DateTime'>;
    readonly subscription_status: FieldRef<'user_subscription', 'Boolean'>;
    readonly subscription_renewal_date: FieldRef<'user_subscription', 'DateTime'>;
    readonly subscription_tier_id: FieldRef<'user_subscription', 'Int'>;
    readonly subscription_payment_status: FieldRef<'user_subscription', 'Boolean'>;
    readonly user_subscription_type: FieldRef<'user_subscription', 'String'>;
    readonly user_subscription_end_reason: FieldRef<'user_subscription', 'String'>;
    readonly user_subscription_renewal_reminder: FieldRef<'user_subscription', 'Boolean'>;
    readonly user_subscription_last_updated: FieldRef<'user_subscription', 'DateTime'>;
    readonly user_subscription_activation_date: FieldRef<'user_subscription', 'DateTime'>;
    readonly user_subscription_cancellation_date: FieldRef<'user_subscription', 'DateTime'>;
    readonly user_subscription_pause_date: FieldRef<'user_subscription', 'DateTime'>;
    readonly user_subscription_pause_reason: FieldRef<'user_subscription', 'String'>;
    readonly user_subscription_pause_duration: FieldRef<'user_subscription', 'Int'>;
    readonly user_subscription_pause_end_date: FieldRef<'user_subscription', 'DateTime'>;
    readonly user_subscription_pause_count: FieldRef<'user_subscription', 'Int'>;
    readonly user_subscription_pause_extension: FieldRef<'user_subscription', 'Int'>;
    readonly user_subscription_feedback: FieldRef<'user_subscription', 'String'>;
    readonly created_at: FieldRef<'user_subscription', 'DateTime'>;
    readonly updated_at: FieldRef<'user_subscription', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user_subscription findUnique
   */
  export type user_subscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which user_subscription to fetch.
     */
    where: user_subscriptionWhereUniqueInput;
  };

  /**
   * user_subscription findUniqueOrThrow
   */
  export type user_subscriptionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which user_subscription to fetch.
     */
    where: user_subscriptionWhereUniqueInput;
  };

  /**
   * user_subscription findFirst
   */
  export type user_subscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which user_subscription to fetch.
     */
    where?: user_subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_subscriptions to fetch.
     */
    orderBy?: user_subscriptionOrderByWithRelationInput | user_subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_subscriptions.
     */
    cursor?: user_subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_subscriptions.
     */
    distinct?: User_subscriptionScalarFieldEnum | User_subscriptionScalarFieldEnum[];
  };

  /**
   * user_subscription findFirstOrThrow
   */
  export type user_subscriptionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which user_subscription to fetch.
     */
    where?: user_subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_subscriptions to fetch.
     */
    orderBy?: user_subscriptionOrderByWithRelationInput | user_subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_subscriptions.
     */
    cursor?: user_subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_subscriptions.
     */
    distinct?: User_subscriptionScalarFieldEnum | User_subscriptionScalarFieldEnum[];
  };

  /**
   * user_subscription findMany
   */
  export type user_subscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which user_subscriptions to fetch.
     */
    where?: user_subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_subscriptions to fetch.
     */
    orderBy?: user_subscriptionOrderByWithRelationInput | user_subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing user_subscriptions.
     */
    cursor?: user_subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_subscriptions.
     */
    skip?: number;
    distinct?: User_subscriptionScalarFieldEnum | User_subscriptionScalarFieldEnum[];
  };

  /**
   * user_subscription create
   */
  export type user_subscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
    /**
     * The data needed to create a user_subscription.
     */
    data?: XOR<user_subscriptionCreateInput, user_subscriptionUncheckedCreateInput>;
  };

  /**
   * user_subscription createMany
   */
  export type user_subscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_subscriptions.
     */
    data: user_subscriptionCreateManyInput | user_subscriptionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user_subscription update
   */
  export type user_subscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
    /**
     * The data needed to update a user_subscription.
     */
    data: XOR<user_subscriptionUpdateInput, user_subscriptionUncheckedUpdateInput>;
    /**
     * Choose, which user_subscription to update.
     */
    where: user_subscriptionWhereUniqueInput;
  };

  /**
   * user_subscription updateMany
   */
  export type user_subscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_subscriptions.
     */
    data: XOR<user_subscriptionUpdateManyMutationInput, user_subscriptionUncheckedUpdateManyInput>;
    /**
     * Filter which user_subscriptions to update
     */
    where?: user_subscriptionWhereInput;
  };

  /**
   * user_subscription upsert
   */
  export type user_subscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
    /**
     * The filter to search for the user_subscription to update in case it exists.
     */
    where: user_subscriptionWhereUniqueInput;
    /**
     * In case the user_subscription found by the `where` argument doesn't exist, create a new user_subscription with this data.
     */
    create: XOR<user_subscriptionCreateInput, user_subscriptionUncheckedCreateInput>;
    /**
     * In case the user_subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_subscriptionUpdateInput, user_subscriptionUncheckedUpdateInput>;
  };

  /**
   * user_subscription delete
   */
  export type user_subscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
    /**
     * Filter which user_subscription to delete.
     */
    where: user_subscriptionWhereUniqueInput;
  };

  /**
   * user_subscription deleteMany
   */
  export type user_subscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_subscriptions to delete
     */
    where?: user_subscriptionWhereInput;
  };

  /**
   * user_subscription without action
   */
  export type user_subscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_subscription
     */
    select?: user_subscriptionSelect<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    image: 'image';
    company_size: 'company_size';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const MessageScalarFieldEnum: {
    id: 'id';
    message_status: 'message_status';
    message_priority: 'message_priority';
    message_content: 'message_content';
    message_type: 'message_type';
    message_sender: 'message_sender';
    message_recipient: 'message_recipient';
    message_read_status: 'message_read_status';
    message_delivery_time: 'message_delivery_time';
    message_attachment: 'message_attachment';
    message_reply_status: 'message_reply_status';
    message_category: 'message_category';
    message_sent_time: 'message_sent_time';
    message_response_time: 'message_response_time';
    message_feedback: 'message_feedback';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];

  export const SubscriptionScalarFieldEnum: {
    id: 'id';
    expiry_date: 'expiry_date';
    subscription_type: 'subscription_type';
    subscription_duration: 'subscription_duration';
    subscription_cost: 'subscription_cost';
    subscription_status: 'subscription_status';
    subscription_features: 'subscription_features';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SubscriptionScalarFieldEnum =
    (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];

  export const TierScalarFieldEnum: {
    id: 'id';
    price: 'price';
    tier_level: 'tier_level';
    description: 'description';
    max_messages: 'max_messages';
    tier_name: 'tier_name';
    tier_duration: 'tier_duration';
    tier_status: 'tier_status';
    tier_expiration_notification: 'tier_expiration_notification';
    tier_discount: 'tier_discount';
    tier_upgrade_option: 'tier_upgrade_option';
    tier_renewal_option: 'tier_renewal_option';
    tier_auto_upgrade: 'tier_auto_upgrade';
    tier_downgrade_option: 'tier_downgrade_option';
    tier_cancellation_option: 'tier_cancellation_option';
    tier_limit_per_user: 'tier_limit_per_user';
    tier_max_users: 'tier_max_users';
    tier_additional_features: 'tier_additional_features';
    tier_trial_period: 'tier_trial_period';
    tier_activation_date: 'tier_activation_date';
    tier_deactivation_date: 'tier_deactivation_date';
    tier_customization_option: 'tier_customization_option';
    tier_support_option: 'tier_support_option';
    tier_referral_bonus: 'tier_referral_bonus';
    tier_feedback_option: 'tier_feedback_option';
    tier_partner_discount: 'tier_partner_discount';
    tier_reward_points: 'tier_reward_points';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TierScalarFieldEnum = (typeof TierScalarFieldEnum)[keyof typeof TierScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const User_subscriptionScalarFieldEnum: {
    id: 'id';
    subscription_end_date: 'subscription_end_date';
    subscription_start_date: 'subscription_start_date';
    subscription_status: 'subscription_status';
    subscription_renewal_date: 'subscription_renewal_date';
    subscription_tier_id: 'subscription_tier_id';
    subscription_payment_status: 'subscription_payment_status';
    user_subscription_type: 'user_subscription_type';
    user_subscription_end_reason: 'user_subscription_end_reason';
    user_subscription_renewal_reminder: 'user_subscription_renewal_reminder';
    user_subscription_last_updated: 'user_subscription_last_updated';
    user_subscription_activation_date: 'user_subscription_activation_date';
    user_subscription_cancellation_date: 'user_subscription_cancellation_date';
    user_subscription_pause_date: 'user_subscription_pause_date';
    user_subscription_pause_reason: 'user_subscription_pause_reason';
    user_subscription_pause_duration: 'user_subscription_pause_duration';
    user_subscription_pause_end_date: 'user_subscription_pause_end_date';
    user_subscription_pause_count: 'user_subscription_pause_count';
    user_subscription_pause_extension: 'user_subscription_pause_extension';
    user_subscription_feedback: 'user_subscription_feedback';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type User_subscriptionScalarFieldEnum =
    (typeof User_subscriptionScalarFieldEnum)[keyof typeof User_subscriptionScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    image?: StringNullableFilter<'company'> | string | null;
    company_size?: IntNullableFilter<'company'> | number | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    company_size?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      image?: StringNullableFilter<'company'> | string | null;
      company_size?: IntNullableFilter<'company'> | number | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    company_size?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _avg?: companyAvgOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
    _sum?: companySumOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    image?: StringNullableWithAggregatesFilter<'company'> | string | null;
    company_size?: IntNullableWithAggregatesFilter<'company'> | number | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type messageWhereInput = {
    AND?: messageWhereInput | messageWhereInput[];
    OR?: messageWhereInput[];
    NOT?: messageWhereInput | messageWhereInput[];
    id?: UuidFilter<'message'> | string;
    message_status?: StringNullableFilter<'message'> | string | null;
    message_priority?: IntNullableFilter<'message'> | number | null;
    message_content?: StringFilter<'message'> | string;
    message_type?: StringNullableFilter<'message'> | string | null;
    message_sender?: StringNullableFilter<'message'> | string | null;
    message_recipient?: StringNullableFilter<'message'> | string | null;
    message_read_status?: BoolNullableFilter<'message'> | boolean | null;
    message_delivery_time?: DateTimeNullableFilter<'message'> | Date | string | null;
    message_attachment?: StringNullableFilter<'message'> | string | null;
    message_reply_status?: BoolNullableFilter<'message'> | boolean | null;
    message_category?: StringNullableFilter<'message'> | string | null;
    message_sent_time?: DateTimeNullableFilter<'message'> | Date | string | null;
    message_response_time?: DateTimeNullableFilter<'message'> | Date | string | null;
    message_feedback?: StringNullableFilter<'message'> | string | null;
    created_at?: DateTimeFilter<'message'> | Date | string;
    updated_at?: DateTimeFilter<'message'> | Date | string;
  };

  export type messageOrderByWithRelationInput = {
    id?: SortOrder;
    message_status?: SortOrderInput | SortOrder;
    message_priority?: SortOrderInput | SortOrder;
    message_content?: SortOrder;
    message_type?: SortOrderInput | SortOrder;
    message_sender?: SortOrderInput | SortOrder;
    message_recipient?: SortOrderInput | SortOrder;
    message_read_status?: SortOrderInput | SortOrder;
    message_delivery_time?: SortOrderInput | SortOrder;
    message_attachment?: SortOrderInput | SortOrder;
    message_reply_status?: SortOrderInput | SortOrder;
    message_category?: SortOrderInput | SortOrder;
    message_sent_time?: SortOrderInput | SortOrder;
    message_response_time?: SortOrderInput | SortOrder;
    message_feedback?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type messageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: messageWhereInput | messageWhereInput[];
      OR?: messageWhereInput[];
      NOT?: messageWhereInput | messageWhereInput[];
      message_status?: StringNullableFilter<'message'> | string | null;
      message_priority?: IntNullableFilter<'message'> | number | null;
      message_content?: StringFilter<'message'> | string;
      message_type?: StringNullableFilter<'message'> | string | null;
      message_sender?: StringNullableFilter<'message'> | string | null;
      message_recipient?: StringNullableFilter<'message'> | string | null;
      message_read_status?: BoolNullableFilter<'message'> | boolean | null;
      message_delivery_time?: DateTimeNullableFilter<'message'> | Date | string | null;
      message_attachment?: StringNullableFilter<'message'> | string | null;
      message_reply_status?: BoolNullableFilter<'message'> | boolean | null;
      message_category?: StringNullableFilter<'message'> | string | null;
      message_sent_time?: DateTimeNullableFilter<'message'> | Date | string | null;
      message_response_time?: DateTimeNullableFilter<'message'> | Date | string | null;
      message_feedback?: StringNullableFilter<'message'> | string | null;
      created_at?: DateTimeFilter<'message'> | Date | string;
      updated_at?: DateTimeFilter<'message'> | Date | string;
    },
    'id'
  >;

  export type messageOrderByWithAggregationInput = {
    id?: SortOrder;
    message_status?: SortOrderInput | SortOrder;
    message_priority?: SortOrderInput | SortOrder;
    message_content?: SortOrder;
    message_type?: SortOrderInput | SortOrder;
    message_sender?: SortOrderInput | SortOrder;
    message_recipient?: SortOrderInput | SortOrder;
    message_read_status?: SortOrderInput | SortOrder;
    message_delivery_time?: SortOrderInput | SortOrder;
    message_attachment?: SortOrderInput | SortOrder;
    message_reply_status?: SortOrderInput | SortOrder;
    message_category?: SortOrderInput | SortOrder;
    message_sent_time?: SortOrderInput | SortOrder;
    message_response_time?: SortOrderInput | SortOrder;
    message_feedback?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: messageCountOrderByAggregateInput;
    _avg?: messageAvgOrderByAggregateInput;
    _max?: messageMaxOrderByAggregateInput;
    _min?: messageMinOrderByAggregateInput;
    _sum?: messageSumOrderByAggregateInput;
  };

  export type messageScalarWhereWithAggregatesInput = {
    AND?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[];
    OR?: messageScalarWhereWithAggregatesInput[];
    NOT?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'message'> | string;
    message_status?: StringNullableWithAggregatesFilter<'message'> | string | null;
    message_priority?: IntNullableWithAggregatesFilter<'message'> | number | null;
    message_content?: StringWithAggregatesFilter<'message'> | string;
    message_type?: StringNullableWithAggregatesFilter<'message'> | string | null;
    message_sender?: StringNullableWithAggregatesFilter<'message'> | string | null;
    message_recipient?: StringNullableWithAggregatesFilter<'message'> | string | null;
    message_read_status?: BoolNullableWithAggregatesFilter<'message'> | boolean | null;
    message_delivery_time?: DateTimeNullableWithAggregatesFilter<'message'> | Date | string | null;
    message_attachment?: StringNullableWithAggregatesFilter<'message'> | string | null;
    message_reply_status?: BoolNullableWithAggregatesFilter<'message'> | boolean | null;
    message_category?: StringNullableWithAggregatesFilter<'message'> | string | null;
    message_sent_time?: DateTimeNullableWithAggregatesFilter<'message'> | Date | string | null;
    message_response_time?: DateTimeNullableWithAggregatesFilter<'message'> | Date | string | null;
    message_feedback?: StringNullableWithAggregatesFilter<'message'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'message'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'message'> | Date | string;
  };

  export type subscriptionWhereInput = {
    AND?: subscriptionWhereInput | subscriptionWhereInput[];
    OR?: subscriptionWhereInput[];
    NOT?: subscriptionWhereInput | subscriptionWhereInput[];
    id?: UuidFilter<'subscription'> | string;
    expiry_date?: DateTimeNullableFilter<'subscription'> | Date | string | null;
    subscription_type?: StringFilter<'subscription'> | string;
    subscription_duration?: IntNullableFilter<'subscription'> | number | null;
    subscription_cost?: FloatFilter<'subscription'> | number;
    subscription_status?: BoolNullableFilter<'subscription'> | boolean | null;
    subscription_features?: StringNullableFilter<'subscription'> | string | null;
    created_at?: DateTimeFilter<'subscription'> | Date | string;
    updated_at?: DateTimeFilter<'subscription'> | Date | string;
  };

  export type subscriptionOrderByWithRelationInput = {
    id?: SortOrder;
    expiry_date?: SortOrderInput | SortOrder;
    subscription_type?: SortOrder;
    subscription_duration?: SortOrderInput | SortOrder;
    subscription_cost?: SortOrder;
    subscription_status?: SortOrderInput | SortOrder;
    subscription_features?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subscriptionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: subscriptionWhereInput | subscriptionWhereInput[];
      OR?: subscriptionWhereInput[];
      NOT?: subscriptionWhereInput | subscriptionWhereInput[];
      expiry_date?: DateTimeNullableFilter<'subscription'> | Date | string | null;
      subscription_type?: StringFilter<'subscription'> | string;
      subscription_duration?: IntNullableFilter<'subscription'> | number | null;
      subscription_cost?: FloatFilter<'subscription'> | number;
      subscription_status?: BoolNullableFilter<'subscription'> | boolean | null;
      subscription_features?: StringNullableFilter<'subscription'> | string | null;
      created_at?: DateTimeFilter<'subscription'> | Date | string;
      updated_at?: DateTimeFilter<'subscription'> | Date | string;
    },
    'id'
  >;

  export type subscriptionOrderByWithAggregationInput = {
    id?: SortOrder;
    expiry_date?: SortOrderInput | SortOrder;
    subscription_type?: SortOrder;
    subscription_duration?: SortOrderInput | SortOrder;
    subscription_cost?: SortOrder;
    subscription_status?: SortOrderInput | SortOrder;
    subscription_features?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: subscriptionCountOrderByAggregateInput;
    _avg?: subscriptionAvgOrderByAggregateInput;
    _max?: subscriptionMaxOrderByAggregateInput;
    _min?: subscriptionMinOrderByAggregateInput;
    _sum?: subscriptionSumOrderByAggregateInput;
  };

  export type subscriptionScalarWhereWithAggregatesInput = {
    AND?: subscriptionScalarWhereWithAggregatesInput | subscriptionScalarWhereWithAggregatesInput[];
    OR?: subscriptionScalarWhereWithAggregatesInput[];
    NOT?: subscriptionScalarWhereWithAggregatesInput | subscriptionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'subscription'> | string;
    expiry_date?: DateTimeNullableWithAggregatesFilter<'subscription'> | Date | string | null;
    subscription_type?: StringWithAggregatesFilter<'subscription'> | string;
    subscription_duration?: IntNullableWithAggregatesFilter<'subscription'> | number | null;
    subscription_cost?: FloatWithAggregatesFilter<'subscription'> | number;
    subscription_status?: BoolNullableWithAggregatesFilter<'subscription'> | boolean | null;
    subscription_features?: StringNullableWithAggregatesFilter<'subscription'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'subscription'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'subscription'> | Date | string;
  };

  export type tierWhereInput = {
    AND?: tierWhereInput | tierWhereInput[];
    OR?: tierWhereInput[];
    NOT?: tierWhereInput | tierWhereInput[];
    id?: UuidFilter<'tier'> | string;
    price?: FloatFilter<'tier'> | number;
    tier_level?: IntFilter<'tier'> | number;
    description?: StringNullableFilter<'tier'> | string | null;
    max_messages?: IntNullableFilter<'tier'> | number | null;
    tier_name?: StringFilter<'tier'> | string;
    tier_duration?: IntNullableFilter<'tier'> | number | null;
    tier_status?: BoolNullableFilter<'tier'> | boolean | null;
    tier_expiration_notification?: BoolNullableFilter<'tier'> | boolean | null;
    tier_discount?: FloatNullableFilter<'tier'> | number | null;
    tier_upgrade_option?: BoolNullableFilter<'tier'> | boolean | null;
    tier_renewal_option?: BoolNullableFilter<'tier'> | boolean | null;
    tier_auto_upgrade?: BoolNullableFilter<'tier'> | boolean | null;
    tier_downgrade_option?: BoolNullableFilter<'tier'> | boolean | null;
    tier_cancellation_option?: BoolNullableFilter<'tier'> | boolean | null;
    tier_limit_per_user?: IntNullableFilter<'tier'> | number | null;
    tier_max_users?: IntNullableFilter<'tier'> | number | null;
    tier_additional_features?: StringNullableFilter<'tier'> | string | null;
    tier_trial_period?: IntNullableFilter<'tier'> | number | null;
    tier_activation_date?: DateTimeNullableFilter<'tier'> | Date | string | null;
    tier_deactivation_date?: DateTimeNullableFilter<'tier'> | Date | string | null;
    tier_customization_option?: BoolNullableFilter<'tier'> | boolean | null;
    tier_support_option?: BoolNullableFilter<'tier'> | boolean | null;
    tier_referral_bonus?: FloatNullableFilter<'tier'> | number | null;
    tier_feedback_option?: BoolNullableFilter<'tier'> | boolean | null;
    tier_partner_discount?: FloatNullableFilter<'tier'> | number | null;
    tier_reward_points?: IntNullableFilter<'tier'> | number | null;
    created_at?: DateTimeFilter<'tier'> | Date | string;
    updated_at?: DateTimeFilter<'tier'> | Date | string;
  };

  export type tierOrderByWithRelationInput = {
    id?: SortOrder;
    price?: SortOrder;
    tier_level?: SortOrder;
    description?: SortOrderInput | SortOrder;
    max_messages?: SortOrderInput | SortOrder;
    tier_name?: SortOrder;
    tier_duration?: SortOrderInput | SortOrder;
    tier_status?: SortOrderInput | SortOrder;
    tier_expiration_notification?: SortOrderInput | SortOrder;
    tier_discount?: SortOrderInput | SortOrder;
    tier_upgrade_option?: SortOrderInput | SortOrder;
    tier_renewal_option?: SortOrderInput | SortOrder;
    tier_auto_upgrade?: SortOrderInput | SortOrder;
    tier_downgrade_option?: SortOrderInput | SortOrder;
    tier_cancellation_option?: SortOrderInput | SortOrder;
    tier_limit_per_user?: SortOrderInput | SortOrder;
    tier_max_users?: SortOrderInput | SortOrder;
    tier_additional_features?: SortOrderInput | SortOrder;
    tier_trial_period?: SortOrderInput | SortOrder;
    tier_activation_date?: SortOrderInput | SortOrder;
    tier_deactivation_date?: SortOrderInput | SortOrder;
    tier_customization_option?: SortOrderInput | SortOrder;
    tier_support_option?: SortOrderInput | SortOrder;
    tier_referral_bonus?: SortOrderInput | SortOrder;
    tier_feedback_option?: SortOrderInput | SortOrder;
    tier_partner_discount?: SortOrderInput | SortOrder;
    tier_reward_points?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type tierWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: tierWhereInput | tierWhereInput[];
      OR?: tierWhereInput[];
      NOT?: tierWhereInput | tierWhereInput[];
      price?: FloatFilter<'tier'> | number;
      tier_level?: IntFilter<'tier'> | number;
      description?: StringNullableFilter<'tier'> | string | null;
      max_messages?: IntNullableFilter<'tier'> | number | null;
      tier_name?: StringFilter<'tier'> | string;
      tier_duration?: IntNullableFilter<'tier'> | number | null;
      tier_status?: BoolNullableFilter<'tier'> | boolean | null;
      tier_expiration_notification?: BoolNullableFilter<'tier'> | boolean | null;
      tier_discount?: FloatNullableFilter<'tier'> | number | null;
      tier_upgrade_option?: BoolNullableFilter<'tier'> | boolean | null;
      tier_renewal_option?: BoolNullableFilter<'tier'> | boolean | null;
      tier_auto_upgrade?: BoolNullableFilter<'tier'> | boolean | null;
      tier_downgrade_option?: BoolNullableFilter<'tier'> | boolean | null;
      tier_cancellation_option?: BoolNullableFilter<'tier'> | boolean | null;
      tier_limit_per_user?: IntNullableFilter<'tier'> | number | null;
      tier_max_users?: IntNullableFilter<'tier'> | number | null;
      tier_additional_features?: StringNullableFilter<'tier'> | string | null;
      tier_trial_period?: IntNullableFilter<'tier'> | number | null;
      tier_activation_date?: DateTimeNullableFilter<'tier'> | Date | string | null;
      tier_deactivation_date?: DateTimeNullableFilter<'tier'> | Date | string | null;
      tier_customization_option?: BoolNullableFilter<'tier'> | boolean | null;
      tier_support_option?: BoolNullableFilter<'tier'> | boolean | null;
      tier_referral_bonus?: FloatNullableFilter<'tier'> | number | null;
      tier_feedback_option?: BoolNullableFilter<'tier'> | boolean | null;
      tier_partner_discount?: FloatNullableFilter<'tier'> | number | null;
      tier_reward_points?: IntNullableFilter<'tier'> | number | null;
      created_at?: DateTimeFilter<'tier'> | Date | string;
      updated_at?: DateTimeFilter<'tier'> | Date | string;
    },
    'id'
  >;

  export type tierOrderByWithAggregationInput = {
    id?: SortOrder;
    price?: SortOrder;
    tier_level?: SortOrder;
    description?: SortOrderInput | SortOrder;
    max_messages?: SortOrderInput | SortOrder;
    tier_name?: SortOrder;
    tier_duration?: SortOrderInput | SortOrder;
    tier_status?: SortOrderInput | SortOrder;
    tier_expiration_notification?: SortOrderInput | SortOrder;
    tier_discount?: SortOrderInput | SortOrder;
    tier_upgrade_option?: SortOrderInput | SortOrder;
    tier_renewal_option?: SortOrderInput | SortOrder;
    tier_auto_upgrade?: SortOrderInput | SortOrder;
    tier_downgrade_option?: SortOrderInput | SortOrder;
    tier_cancellation_option?: SortOrderInput | SortOrder;
    tier_limit_per_user?: SortOrderInput | SortOrder;
    tier_max_users?: SortOrderInput | SortOrder;
    tier_additional_features?: SortOrderInput | SortOrder;
    tier_trial_period?: SortOrderInput | SortOrder;
    tier_activation_date?: SortOrderInput | SortOrder;
    tier_deactivation_date?: SortOrderInput | SortOrder;
    tier_customization_option?: SortOrderInput | SortOrder;
    tier_support_option?: SortOrderInput | SortOrder;
    tier_referral_bonus?: SortOrderInput | SortOrder;
    tier_feedback_option?: SortOrderInput | SortOrder;
    tier_partner_discount?: SortOrderInput | SortOrder;
    tier_reward_points?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: tierCountOrderByAggregateInput;
    _avg?: tierAvgOrderByAggregateInput;
    _max?: tierMaxOrderByAggregateInput;
    _min?: tierMinOrderByAggregateInput;
    _sum?: tierSumOrderByAggregateInput;
  };

  export type tierScalarWhereWithAggregatesInput = {
    AND?: tierScalarWhereWithAggregatesInput | tierScalarWhereWithAggregatesInput[];
    OR?: tierScalarWhereWithAggregatesInput[];
    NOT?: tierScalarWhereWithAggregatesInput | tierScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'tier'> | string;
    price?: FloatWithAggregatesFilter<'tier'> | number;
    tier_level?: IntWithAggregatesFilter<'tier'> | number;
    description?: StringNullableWithAggregatesFilter<'tier'> | string | null;
    max_messages?: IntNullableWithAggregatesFilter<'tier'> | number | null;
    tier_name?: StringWithAggregatesFilter<'tier'> | string;
    tier_duration?: IntNullableWithAggregatesFilter<'tier'> | number | null;
    tier_status?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_expiration_notification?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_discount?: FloatNullableWithAggregatesFilter<'tier'> | number | null;
    tier_upgrade_option?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_renewal_option?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_auto_upgrade?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_downgrade_option?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_cancellation_option?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_limit_per_user?: IntNullableWithAggregatesFilter<'tier'> | number | null;
    tier_max_users?: IntNullableWithAggregatesFilter<'tier'> | number | null;
    tier_additional_features?: StringNullableWithAggregatesFilter<'tier'> | string | null;
    tier_trial_period?: IntNullableWithAggregatesFilter<'tier'> | number | null;
    tier_activation_date?: DateTimeNullableWithAggregatesFilter<'tier'> | Date | string | null;
    tier_deactivation_date?: DateTimeNullableWithAggregatesFilter<'tier'> | Date | string | null;
    tier_customization_option?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_support_option?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_referral_bonus?: FloatNullableWithAggregatesFilter<'tier'> | number | null;
    tier_feedback_option?: BoolNullableWithAggregatesFilter<'tier'> | boolean | null;
    tier_partner_discount?: FloatNullableWithAggregatesFilter<'tier'> | number | null;
    tier_reward_points?: IntNullableWithAggregatesFilter<'tier'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'tier'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'tier'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type user_subscriptionWhereInput = {
    AND?: user_subscriptionWhereInput | user_subscriptionWhereInput[];
    OR?: user_subscriptionWhereInput[];
    NOT?: user_subscriptionWhereInput | user_subscriptionWhereInput[];
    id?: UuidFilter<'user_subscription'> | string;
    subscription_end_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
    subscription_start_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
    subscription_status?: BoolNullableFilter<'user_subscription'> | boolean | null;
    subscription_renewal_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
    subscription_tier_id?: IntNullableFilter<'user_subscription'> | number | null;
    subscription_payment_status?: BoolNullableFilter<'user_subscription'> | boolean | null;
    user_subscription_type?: StringNullableFilter<'user_subscription'> | string | null;
    user_subscription_end_reason?: StringNullableFilter<'user_subscription'> | string | null;
    user_subscription_renewal_reminder?: BoolNullableFilter<'user_subscription'> | boolean | null;
    user_subscription_last_updated?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
    user_subscription_activation_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
    user_subscription_cancellation_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
    user_subscription_pause_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
    user_subscription_pause_reason?: StringNullableFilter<'user_subscription'> | string | null;
    user_subscription_pause_duration?: IntNullableFilter<'user_subscription'> | number | null;
    user_subscription_pause_end_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
    user_subscription_pause_count?: IntNullableFilter<'user_subscription'> | number | null;
    user_subscription_pause_extension?: IntNullableFilter<'user_subscription'> | number | null;
    user_subscription_feedback?: StringNullableFilter<'user_subscription'> | string | null;
    created_at?: DateTimeFilter<'user_subscription'> | Date | string;
    updated_at?: DateTimeFilter<'user_subscription'> | Date | string;
  };

  export type user_subscriptionOrderByWithRelationInput = {
    id?: SortOrder;
    subscription_end_date?: SortOrderInput | SortOrder;
    subscription_start_date?: SortOrderInput | SortOrder;
    subscription_status?: SortOrderInput | SortOrder;
    subscription_renewal_date?: SortOrderInput | SortOrder;
    subscription_tier_id?: SortOrderInput | SortOrder;
    subscription_payment_status?: SortOrderInput | SortOrder;
    user_subscription_type?: SortOrderInput | SortOrder;
    user_subscription_end_reason?: SortOrderInput | SortOrder;
    user_subscription_renewal_reminder?: SortOrderInput | SortOrder;
    user_subscription_last_updated?: SortOrderInput | SortOrder;
    user_subscription_activation_date?: SortOrderInput | SortOrder;
    user_subscription_cancellation_date?: SortOrderInput | SortOrder;
    user_subscription_pause_date?: SortOrderInput | SortOrder;
    user_subscription_pause_reason?: SortOrderInput | SortOrder;
    user_subscription_pause_duration?: SortOrderInput | SortOrder;
    user_subscription_pause_end_date?: SortOrderInput | SortOrder;
    user_subscription_pause_count?: SortOrderInput | SortOrder;
    user_subscription_pause_extension?: SortOrderInput | SortOrder;
    user_subscription_feedback?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_subscriptionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: user_subscriptionWhereInput | user_subscriptionWhereInput[];
      OR?: user_subscriptionWhereInput[];
      NOT?: user_subscriptionWhereInput | user_subscriptionWhereInput[];
      subscription_end_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
      subscription_start_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
      subscription_status?: BoolNullableFilter<'user_subscription'> | boolean | null;
      subscription_renewal_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
      subscription_tier_id?: IntNullableFilter<'user_subscription'> | number | null;
      subscription_payment_status?: BoolNullableFilter<'user_subscription'> | boolean | null;
      user_subscription_type?: StringNullableFilter<'user_subscription'> | string | null;
      user_subscription_end_reason?: StringNullableFilter<'user_subscription'> | string | null;
      user_subscription_renewal_reminder?: BoolNullableFilter<'user_subscription'> | boolean | null;
      user_subscription_last_updated?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
      user_subscription_activation_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
      user_subscription_cancellation_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
      user_subscription_pause_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
      user_subscription_pause_reason?: StringNullableFilter<'user_subscription'> | string | null;
      user_subscription_pause_duration?: IntNullableFilter<'user_subscription'> | number | null;
      user_subscription_pause_end_date?: DateTimeNullableFilter<'user_subscription'> | Date | string | null;
      user_subscription_pause_count?: IntNullableFilter<'user_subscription'> | number | null;
      user_subscription_pause_extension?: IntNullableFilter<'user_subscription'> | number | null;
      user_subscription_feedback?: StringNullableFilter<'user_subscription'> | string | null;
      created_at?: DateTimeFilter<'user_subscription'> | Date | string;
      updated_at?: DateTimeFilter<'user_subscription'> | Date | string;
    },
    'id'
  >;

  export type user_subscriptionOrderByWithAggregationInput = {
    id?: SortOrder;
    subscription_end_date?: SortOrderInput | SortOrder;
    subscription_start_date?: SortOrderInput | SortOrder;
    subscription_status?: SortOrderInput | SortOrder;
    subscription_renewal_date?: SortOrderInput | SortOrder;
    subscription_tier_id?: SortOrderInput | SortOrder;
    subscription_payment_status?: SortOrderInput | SortOrder;
    user_subscription_type?: SortOrderInput | SortOrder;
    user_subscription_end_reason?: SortOrderInput | SortOrder;
    user_subscription_renewal_reminder?: SortOrderInput | SortOrder;
    user_subscription_last_updated?: SortOrderInput | SortOrder;
    user_subscription_activation_date?: SortOrderInput | SortOrder;
    user_subscription_cancellation_date?: SortOrderInput | SortOrder;
    user_subscription_pause_date?: SortOrderInput | SortOrder;
    user_subscription_pause_reason?: SortOrderInput | SortOrder;
    user_subscription_pause_duration?: SortOrderInput | SortOrder;
    user_subscription_pause_end_date?: SortOrderInput | SortOrder;
    user_subscription_pause_count?: SortOrderInput | SortOrder;
    user_subscription_pause_extension?: SortOrderInput | SortOrder;
    user_subscription_feedback?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: user_subscriptionCountOrderByAggregateInput;
    _avg?: user_subscriptionAvgOrderByAggregateInput;
    _max?: user_subscriptionMaxOrderByAggregateInput;
    _min?: user_subscriptionMinOrderByAggregateInput;
    _sum?: user_subscriptionSumOrderByAggregateInput;
  };

  export type user_subscriptionScalarWhereWithAggregatesInput = {
    AND?: user_subscriptionScalarWhereWithAggregatesInput | user_subscriptionScalarWhereWithAggregatesInput[];
    OR?: user_subscriptionScalarWhereWithAggregatesInput[];
    NOT?: user_subscriptionScalarWhereWithAggregatesInput | user_subscriptionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user_subscription'> | string;
    subscription_end_date?: DateTimeNullableWithAggregatesFilter<'user_subscription'> | Date | string | null;
    subscription_start_date?: DateTimeNullableWithAggregatesFilter<'user_subscription'> | Date | string | null;
    subscription_status?: BoolNullableWithAggregatesFilter<'user_subscription'> | boolean | null;
    subscription_renewal_date?: DateTimeNullableWithAggregatesFilter<'user_subscription'> | Date | string | null;
    subscription_tier_id?: IntNullableWithAggregatesFilter<'user_subscription'> | number | null;
    subscription_payment_status?: BoolNullableWithAggregatesFilter<'user_subscription'> | boolean | null;
    user_subscription_type?: StringNullableWithAggregatesFilter<'user_subscription'> | string | null;
    user_subscription_end_reason?: StringNullableWithAggregatesFilter<'user_subscription'> | string | null;
    user_subscription_renewal_reminder?: BoolNullableWithAggregatesFilter<'user_subscription'> | boolean | null;
    user_subscription_last_updated?: DateTimeNullableWithAggregatesFilter<'user_subscription'> | Date | string | null;
    user_subscription_activation_date?:
      | DateTimeNullableWithAggregatesFilter<'user_subscription'>
      | Date
      | string
      | null;
    user_subscription_cancellation_date?:
      | DateTimeNullableWithAggregatesFilter<'user_subscription'>
      | Date
      | string
      | null;
    user_subscription_pause_date?: DateTimeNullableWithAggregatesFilter<'user_subscription'> | Date | string | null;
    user_subscription_pause_reason?: StringNullableWithAggregatesFilter<'user_subscription'> | string | null;
    user_subscription_pause_duration?: IntNullableWithAggregatesFilter<'user_subscription'> | number | null;
    user_subscription_pause_end_date?: DateTimeNullableWithAggregatesFilter<'user_subscription'> | Date | string | null;
    user_subscription_pause_count?: IntNullableWithAggregatesFilter<'user_subscription'> | number | null;
    user_subscription_pause_extension?: IntNullableWithAggregatesFilter<'user_subscription'> | number | null;
    user_subscription_feedback?: StringNullableWithAggregatesFilter<'user_subscription'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user_subscription'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user_subscription'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    company_size?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    company_size?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    company_size?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    company_size?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    company_size?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    company_size?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    company_size?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type messageCreateInput = {
    id?: string;
    message_status?: string | null;
    message_priority?: number | null;
    message_content: string;
    message_type?: string | null;
    message_sender?: string | null;
    message_recipient?: string | null;
    message_read_status?: boolean | null;
    message_delivery_time?: Date | string | null;
    message_attachment?: string | null;
    message_reply_status?: boolean | null;
    message_category?: string | null;
    message_sent_time?: Date | string | null;
    message_response_time?: Date | string | null;
    message_feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type messageUncheckedCreateInput = {
    id?: string;
    message_status?: string | null;
    message_priority?: number | null;
    message_content: string;
    message_type?: string | null;
    message_sender?: string | null;
    message_recipient?: string | null;
    message_read_status?: boolean | null;
    message_delivery_time?: Date | string | null;
    message_attachment?: string | null;
    message_reply_status?: boolean | null;
    message_category?: string | null;
    message_sent_time?: Date | string | null;
    message_response_time?: Date | string | null;
    message_feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type messageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message_status?: NullableStringFieldUpdateOperationsInput | string | null;
    message_priority?: NullableIntFieldUpdateOperationsInput | number | null;
    message_content?: StringFieldUpdateOperationsInput | string;
    message_type?: NullableStringFieldUpdateOperationsInput | string | null;
    message_sender?: NullableStringFieldUpdateOperationsInput | string | null;
    message_recipient?: NullableStringFieldUpdateOperationsInput | string | null;
    message_read_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    message_delivery_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_attachment?: NullableStringFieldUpdateOperationsInput | string | null;
    message_reply_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    message_category?: NullableStringFieldUpdateOperationsInput | string | null;
    message_sent_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_response_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type messageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message_status?: NullableStringFieldUpdateOperationsInput | string | null;
    message_priority?: NullableIntFieldUpdateOperationsInput | number | null;
    message_content?: StringFieldUpdateOperationsInput | string;
    message_type?: NullableStringFieldUpdateOperationsInput | string | null;
    message_sender?: NullableStringFieldUpdateOperationsInput | string | null;
    message_recipient?: NullableStringFieldUpdateOperationsInput | string | null;
    message_read_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    message_delivery_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_attachment?: NullableStringFieldUpdateOperationsInput | string | null;
    message_reply_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    message_category?: NullableStringFieldUpdateOperationsInput | string | null;
    message_sent_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_response_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type messageCreateManyInput = {
    id?: string;
    message_status?: string | null;
    message_priority?: number | null;
    message_content: string;
    message_type?: string | null;
    message_sender?: string | null;
    message_recipient?: string | null;
    message_read_status?: boolean | null;
    message_delivery_time?: Date | string | null;
    message_attachment?: string | null;
    message_reply_status?: boolean | null;
    message_category?: string | null;
    message_sent_time?: Date | string | null;
    message_response_time?: Date | string | null;
    message_feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type messageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message_status?: NullableStringFieldUpdateOperationsInput | string | null;
    message_priority?: NullableIntFieldUpdateOperationsInput | number | null;
    message_content?: StringFieldUpdateOperationsInput | string;
    message_type?: NullableStringFieldUpdateOperationsInput | string | null;
    message_sender?: NullableStringFieldUpdateOperationsInput | string | null;
    message_recipient?: NullableStringFieldUpdateOperationsInput | string | null;
    message_read_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    message_delivery_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_attachment?: NullableStringFieldUpdateOperationsInput | string | null;
    message_reply_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    message_category?: NullableStringFieldUpdateOperationsInput | string | null;
    message_sent_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_response_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type messageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message_status?: NullableStringFieldUpdateOperationsInput | string | null;
    message_priority?: NullableIntFieldUpdateOperationsInput | number | null;
    message_content?: StringFieldUpdateOperationsInput | string;
    message_type?: NullableStringFieldUpdateOperationsInput | string | null;
    message_sender?: NullableStringFieldUpdateOperationsInput | string | null;
    message_recipient?: NullableStringFieldUpdateOperationsInput | string | null;
    message_read_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    message_delivery_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_attachment?: NullableStringFieldUpdateOperationsInput | string | null;
    message_reply_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    message_category?: NullableStringFieldUpdateOperationsInput | string | null;
    message_sent_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_response_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message_feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subscriptionCreateInput = {
    id?: string;
    expiry_date?: Date | string | null;
    subscription_type: string;
    subscription_duration?: number | null;
    subscription_cost: number;
    subscription_status?: boolean | null;
    subscription_features?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type subscriptionUncheckedCreateInput = {
    id?: string;
    expiry_date?: Date | string | null;
    subscription_type: string;
    subscription_duration?: number | null;
    subscription_cost: number;
    subscription_status?: boolean | null;
    subscription_features?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type subscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_type?: StringFieldUpdateOperationsInput | string;
    subscription_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_cost?: FloatFieldUpdateOperationsInput | number;
    subscription_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    subscription_features?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_type?: StringFieldUpdateOperationsInput | string;
    subscription_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_cost?: FloatFieldUpdateOperationsInput | number;
    subscription_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    subscription_features?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subscriptionCreateManyInput = {
    id?: string;
    expiry_date?: Date | string | null;
    subscription_type: string;
    subscription_duration?: number | null;
    subscription_cost: number;
    subscription_status?: boolean | null;
    subscription_features?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type subscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_type?: StringFieldUpdateOperationsInput | string;
    subscription_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_cost?: FloatFieldUpdateOperationsInput | number;
    subscription_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    subscription_features?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_type?: StringFieldUpdateOperationsInput | string;
    subscription_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_cost?: FloatFieldUpdateOperationsInput | number;
    subscription_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    subscription_features?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tierCreateInput = {
    id?: string;
    price: number;
    tier_level: number;
    description?: string | null;
    max_messages?: number | null;
    tier_name: string;
    tier_duration?: number | null;
    tier_status?: boolean | null;
    tier_expiration_notification?: boolean | null;
    tier_discount?: number | null;
    tier_upgrade_option?: boolean | null;
    tier_renewal_option?: boolean | null;
    tier_auto_upgrade?: boolean | null;
    tier_downgrade_option?: boolean | null;
    tier_cancellation_option?: boolean | null;
    tier_limit_per_user?: number | null;
    tier_max_users?: number | null;
    tier_additional_features?: string | null;
    tier_trial_period?: number | null;
    tier_activation_date?: Date | string | null;
    tier_deactivation_date?: Date | string | null;
    tier_customization_option?: boolean | null;
    tier_support_option?: boolean | null;
    tier_referral_bonus?: number | null;
    tier_feedback_option?: boolean | null;
    tier_partner_discount?: number | null;
    tier_reward_points?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tierUncheckedCreateInput = {
    id?: string;
    price: number;
    tier_level: number;
    description?: string | null;
    max_messages?: number | null;
    tier_name: string;
    tier_duration?: number | null;
    tier_status?: boolean | null;
    tier_expiration_notification?: boolean | null;
    tier_discount?: number | null;
    tier_upgrade_option?: boolean | null;
    tier_renewal_option?: boolean | null;
    tier_auto_upgrade?: boolean | null;
    tier_downgrade_option?: boolean | null;
    tier_cancellation_option?: boolean | null;
    tier_limit_per_user?: number | null;
    tier_max_users?: number | null;
    tier_additional_features?: string | null;
    tier_trial_period?: number | null;
    tier_activation_date?: Date | string | null;
    tier_deactivation_date?: Date | string | null;
    tier_customization_option?: boolean | null;
    tier_support_option?: boolean | null;
    tier_referral_bonus?: number | null;
    tier_feedback_option?: boolean | null;
    tier_partner_discount?: number | null;
    tier_reward_points?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    tier_level?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    max_messages?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_name?: StringFieldUpdateOperationsInput | string;
    tier_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_expiration_notification?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_discount?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_upgrade_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_renewal_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_auto_upgrade?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_downgrade_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_cancellation_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_limit_per_user?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_max_users?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_additional_features?: NullableStringFieldUpdateOperationsInput | string | null;
    tier_trial_period?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_activation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tier_deactivation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tier_customization_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_support_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_referral_bonus?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_feedback_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_partner_discount?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_reward_points?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    tier_level?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    max_messages?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_name?: StringFieldUpdateOperationsInput | string;
    tier_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_expiration_notification?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_discount?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_upgrade_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_renewal_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_auto_upgrade?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_downgrade_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_cancellation_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_limit_per_user?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_max_users?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_additional_features?: NullableStringFieldUpdateOperationsInput | string | null;
    tier_trial_period?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_activation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tier_deactivation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tier_customization_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_support_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_referral_bonus?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_feedback_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_partner_discount?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_reward_points?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tierCreateManyInput = {
    id?: string;
    price: number;
    tier_level: number;
    description?: string | null;
    max_messages?: number | null;
    tier_name: string;
    tier_duration?: number | null;
    tier_status?: boolean | null;
    tier_expiration_notification?: boolean | null;
    tier_discount?: number | null;
    tier_upgrade_option?: boolean | null;
    tier_renewal_option?: boolean | null;
    tier_auto_upgrade?: boolean | null;
    tier_downgrade_option?: boolean | null;
    tier_cancellation_option?: boolean | null;
    tier_limit_per_user?: number | null;
    tier_max_users?: number | null;
    tier_additional_features?: string | null;
    tier_trial_period?: number | null;
    tier_activation_date?: Date | string | null;
    tier_deactivation_date?: Date | string | null;
    tier_customization_option?: boolean | null;
    tier_support_option?: boolean | null;
    tier_referral_bonus?: number | null;
    tier_feedback_option?: boolean | null;
    tier_partner_discount?: number | null;
    tier_reward_points?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    tier_level?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    max_messages?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_name?: StringFieldUpdateOperationsInput | string;
    tier_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_expiration_notification?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_discount?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_upgrade_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_renewal_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_auto_upgrade?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_downgrade_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_cancellation_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_limit_per_user?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_max_users?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_additional_features?: NullableStringFieldUpdateOperationsInput | string | null;
    tier_trial_period?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_activation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tier_deactivation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tier_customization_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_support_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_referral_bonus?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_feedback_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_partner_discount?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_reward_points?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    tier_level?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    max_messages?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_name?: StringFieldUpdateOperationsInput | string;
    tier_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_expiration_notification?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_discount?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_upgrade_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_renewal_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_auto_upgrade?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_downgrade_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_cancellation_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_limit_per_user?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_max_users?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_additional_features?: NullableStringFieldUpdateOperationsInput | string | null;
    tier_trial_period?: NullableIntFieldUpdateOperationsInput | number | null;
    tier_activation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tier_deactivation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tier_customization_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_support_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_referral_bonus?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_feedback_option?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    tier_partner_discount?: NullableFloatFieldUpdateOperationsInput | number | null;
    tier_reward_points?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_subscriptionCreateInput = {
    id?: string;
    subscription_end_date?: Date | string | null;
    subscription_start_date?: Date | string | null;
    subscription_status?: boolean | null;
    subscription_renewal_date?: Date | string | null;
    subscription_tier_id?: number | null;
    subscription_payment_status?: boolean | null;
    user_subscription_type?: string | null;
    user_subscription_end_reason?: string | null;
    user_subscription_renewal_reminder?: boolean | null;
    user_subscription_last_updated?: Date | string | null;
    user_subscription_activation_date?: Date | string | null;
    user_subscription_cancellation_date?: Date | string | null;
    user_subscription_pause_date?: Date | string | null;
    user_subscription_pause_reason?: string | null;
    user_subscription_pause_duration?: number | null;
    user_subscription_pause_end_date?: Date | string | null;
    user_subscription_pause_count?: number | null;
    user_subscription_pause_extension?: number | null;
    user_subscription_feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_subscriptionUncheckedCreateInput = {
    id?: string;
    subscription_end_date?: Date | string | null;
    subscription_start_date?: Date | string | null;
    subscription_status?: boolean | null;
    subscription_renewal_date?: Date | string | null;
    subscription_tier_id?: number | null;
    subscription_payment_status?: boolean | null;
    user_subscription_type?: string | null;
    user_subscription_end_reason?: string | null;
    user_subscription_renewal_reminder?: boolean | null;
    user_subscription_last_updated?: Date | string | null;
    user_subscription_activation_date?: Date | string | null;
    user_subscription_cancellation_date?: Date | string | null;
    user_subscription_pause_date?: Date | string | null;
    user_subscription_pause_reason?: string | null;
    user_subscription_pause_duration?: number | null;
    user_subscription_pause_end_date?: Date | string | null;
    user_subscription_pause_count?: number | null;
    user_subscription_pause_extension?: number | null;
    user_subscription_feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_subscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    subscription_renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_tier_id?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_payment_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_subscription_type?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_end_reason?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_renewal_reminder?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_subscription_last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_activation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_reason?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_pause_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_pause_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_count?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_pause_extension?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_subscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    subscription_renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_tier_id?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_payment_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_subscription_type?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_end_reason?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_renewal_reminder?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_subscription_last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_activation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_reason?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_pause_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_pause_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_count?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_pause_extension?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_subscriptionCreateManyInput = {
    id?: string;
    subscription_end_date?: Date | string | null;
    subscription_start_date?: Date | string | null;
    subscription_status?: boolean | null;
    subscription_renewal_date?: Date | string | null;
    subscription_tier_id?: number | null;
    subscription_payment_status?: boolean | null;
    user_subscription_type?: string | null;
    user_subscription_end_reason?: string | null;
    user_subscription_renewal_reminder?: boolean | null;
    user_subscription_last_updated?: Date | string | null;
    user_subscription_activation_date?: Date | string | null;
    user_subscription_cancellation_date?: Date | string | null;
    user_subscription_pause_date?: Date | string | null;
    user_subscription_pause_reason?: string | null;
    user_subscription_pause_duration?: number | null;
    user_subscription_pause_end_date?: Date | string | null;
    user_subscription_pause_count?: number | null;
    user_subscription_pause_extension?: number | null;
    user_subscription_feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_subscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    subscription_renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_tier_id?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_payment_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_subscription_type?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_end_reason?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_renewal_reminder?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_subscription_last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_activation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_reason?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_pause_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_pause_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_count?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_pause_extension?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_subscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    subscription_renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subscription_tier_id?: NullableIntFieldUpdateOperationsInput | number | null;
    subscription_payment_status?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_subscription_type?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_end_reason?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_renewal_reminder?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_subscription_last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_activation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_reason?: NullableStringFieldUpdateOperationsInput | string | null;
    user_subscription_pause_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_pause_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_subscription_pause_count?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_pause_extension?: NullableIntFieldUpdateOperationsInput | number | null;
    user_subscription_feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    company_size?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyAvgOrderByAggregateInput = {
    company_size?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    company_size?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    company_size?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companySumOrderByAggregateInput = {
    company_size?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type messageCountOrderByAggregateInput = {
    id?: SortOrder;
    message_status?: SortOrder;
    message_priority?: SortOrder;
    message_content?: SortOrder;
    message_type?: SortOrder;
    message_sender?: SortOrder;
    message_recipient?: SortOrder;
    message_read_status?: SortOrder;
    message_delivery_time?: SortOrder;
    message_attachment?: SortOrder;
    message_reply_status?: SortOrder;
    message_category?: SortOrder;
    message_sent_time?: SortOrder;
    message_response_time?: SortOrder;
    message_feedback?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type messageAvgOrderByAggregateInput = {
    message_priority?: SortOrder;
  };

  export type messageMaxOrderByAggregateInput = {
    id?: SortOrder;
    message_status?: SortOrder;
    message_priority?: SortOrder;
    message_content?: SortOrder;
    message_type?: SortOrder;
    message_sender?: SortOrder;
    message_recipient?: SortOrder;
    message_read_status?: SortOrder;
    message_delivery_time?: SortOrder;
    message_attachment?: SortOrder;
    message_reply_status?: SortOrder;
    message_category?: SortOrder;
    message_sent_time?: SortOrder;
    message_response_time?: SortOrder;
    message_feedback?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type messageMinOrderByAggregateInput = {
    id?: SortOrder;
    message_status?: SortOrder;
    message_priority?: SortOrder;
    message_content?: SortOrder;
    message_type?: SortOrder;
    message_sender?: SortOrder;
    message_recipient?: SortOrder;
    message_read_status?: SortOrder;
    message_delivery_time?: SortOrder;
    message_attachment?: SortOrder;
    message_reply_status?: SortOrder;
    message_category?: SortOrder;
    message_sent_time?: SortOrder;
    message_response_time?: SortOrder;
    message_feedback?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type messageSumOrderByAggregateInput = {
    message_priority?: SortOrder;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type subscriptionCountOrderByAggregateInput = {
    id?: SortOrder;
    expiry_date?: SortOrder;
    subscription_type?: SortOrder;
    subscription_duration?: SortOrder;
    subscription_cost?: SortOrder;
    subscription_status?: SortOrder;
    subscription_features?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subscriptionAvgOrderByAggregateInput = {
    subscription_duration?: SortOrder;
    subscription_cost?: SortOrder;
  };

  export type subscriptionMaxOrderByAggregateInput = {
    id?: SortOrder;
    expiry_date?: SortOrder;
    subscription_type?: SortOrder;
    subscription_duration?: SortOrder;
    subscription_cost?: SortOrder;
    subscription_status?: SortOrder;
    subscription_features?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subscriptionMinOrderByAggregateInput = {
    id?: SortOrder;
    expiry_date?: SortOrder;
    subscription_type?: SortOrder;
    subscription_duration?: SortOrder;
    subscription_cost?: SortOrder;
    subscription_status?: SortOrder;
    subscription_features?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subscriptionSumOrderByAggregateInput = {
    subscription_duration?: SortOrder;
    subscription_cost?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type tierCountOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    tier_level?: SortOrder;
    description?: SortOrder;
    max_messages?: SortOrder;
    tier_name?: SortOrder;
    tier_duration?: SortOrder;
    tier_status?: SortOrder;
    tier_expiration_notification?: SortOrder;
    tier_discount?: SortOrder;
    tier_upgrade_option?: SortOrder;
    tier_renewal_option?: SortOrder;
    tier_auto_upgrade?: SortOrder;
    tier_downgrade_option?: SortOrder;
    tier_cancellation_option?: SortOrder;
    tier_limit_per_user?: SortOrder;
    tier_max_users?: SortOrder;
    tier_additional_features?: SortOrder;
    tier_trial_period?: SortOrder;
    tier_activation_date?: SortOrder;
    tier_deactivation_date?: SortOrder;
    tier_customization_option?: SortOrder;
    tier_support_option?: SortOrder;
    tier_referral_bonus?: SortOrder;
    tier_feedback_option?: SortOrder;
    tier_partner_discount?: SortOrder;
    tier_reward_points?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type tierAvgOrderByAggregateInput = {
    price?: SortOrder;
    tier_level?: SortOrder;
    max_messages?: SortOrder;
    tier_duration?: SortOrder;
    tier_discount?: SortOrder;
    tier_limit_per_user?: SortOrder;
    tier_max_users?: SortOrder;
    tier_trial_period?: SortOrder;
    tier_referral_bonus?: SortOrder;
    tier_partner_discount?: SortOrder;
    tier_reward_points?: SortOrder;
  };

  export type tierMaxOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    tier_level?: SortOrder;
    description?: SortOrder;
    max_messages?: SortOrder;
    tier_name?: SortOrder;
    tier_duration?: SortOrder;
    tier_status?: SortOrder;
    tier_expiration_notification?: SortOrder;
    tier_discount?: SortOrder;
    tier_upgrade_option?: SortOrder;
    tier_renewal_option?: SortOrder;
    tier_auto_upgrade?: SortOrder;
    tier_downgrade_option?: SortOrder;
    tier_cancellation_option?: SortOrder;
    tier_limit_per_user?: SortOrder;
    tier_max_users?: SortOrder;
    tier_additional_features?: SortOrder;
    tier_trial_period?: SortOrder;
    tier_activation_date?: SortOrder;
    tier_deactivation_date?: SortOrder;
    tier_customization_option?: SortOrder;
    tier_support_option?: SortOrder;
    tier_referral_bonus?: SortOrder;
    tier_feedback_option?: SortOrder;
    tier_partner_discount?: SortOrder;
    tier_reward_points?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type tierMinOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    tier_level?: SortOrder;
    description?: SortOrder;
    max_messages?: SortOrder;
    tier_name?: SortOrder;
    tier_duration?: SortOrder;
    tier_status?: SortOrder;
    tier_expiration_notification?: SortOrder;
    tier_discount?: SortOrder;
    tier_upgrade_option?: SortOrder;
    tier_renewal_option?: SortOrder;
    tier_auto_upgrade?: SortOrder;
    tier_downgrade_option?: SortOrder;
    tier_cancellation_option?: SortOrder;
    tier_limit_per_user?: SortOrder;
    tier_max_users?: SortOrder;
    tier_additional_features?: SortOrder;
    tier_trial_period?: SortOrder;
    tier_activation_date?: SortOrder;
    tier_deactivation_date?: SortOrder;
    tier_customization_option?: SortOrder;
    tier_support_option?: SortOrder;
    tier_referral_bonus?: SortOrder;
    tier_feedback_option?: SortOrder;
    tier_partner_discount?: SortOrder;
    tier_reward_points?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type tierSumOrderByAggregateInput = {
    price?: SortOrder;
    tier_level?: SortOrder;
    max_messages?: SortOrder;
    tier_duration?: SortOrder;
    tier_discount?: SortOrder;
    tier_limit_per_user?: SortOrder;
    tier_max_users?: SortOrder;
    tier_trial_period?: SortOrder;
    tier_referral_bonus?: SortOrder;
    tier_partner_discount?: SortOrder;
    tier_reward_points?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_subscriptionCountOrderByAggregateInput = {
    id?: SortOrder;
    subscription_end_date?: SortOrder;
    subscription_start_date?: SortOrder;
    subscription_status?: SortOrder;
    subscription_renewal_date?: SortOrder;
    subscription_tier_id?: SortOrder;
    subscription_payment_status?: SortOrder;
    user_subscription_type?: SortOrder;
    user_subscription_end_reason?: SortOrder;
    user_subscription_renewal_reminder?: SortOrder;
    user_subscription_last_updated?: SortOrder;
    user_subscription_activation_date?: SortOrder;
    user_subscription_cancellation_date?: SortOrder;
    user_subscription_pause_date?: SortOrder;
    user_subscription_pause_reason?: SortOrder;
    user_subscription_pause_duration?: SortOrder;
    user_subscription_pause_end_date?: SortOrder;
    user_subscription_pause_count?: SortOrder;
    user_subscription_pause_extension?: SortOrder;
    user_subscription_feedback?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_subscriptionAvgOrderByAggregateInput = {
    subscription_tier_id?: SortOrder;
    user_subscription_pause_duration?: SortOrder;
    user_subscription_pause_count?: SortOrder;
    user_subscription_pause_extension?: SortOrder;
  };

  export type user_subscriptionMaxOrderByAggregateInput = {
    id?: SortOrder;
    subscription_end_date?: SortOrder;
    subscription_start_date?: SortOrder;
    subscription_status?: SortOrder;
    subscription_renewal_date?: SortOrder;
    subscription_tier_id?: SortOrder;
    subscription_payment_status?: SortOrder;
    user_subscription_type?: SortOrder;
    user_subscription_end_reason?: SortOrder;
    user_subscription_renewal_reminder?: SortOrder;
    user_subscription_last_updated?: SortOrder;
    user_subscription_activation_date?: SortOrder;
    user_subscription_cancellation_date?: SortOrder;
    user_subscription_pause_date?: SortOrder;
    user_subscription_pause_reason?: SortOrder;
    user_subscription_pause_duration?: SortOrder;
    user_subscription_pause_end_date?: SortOrder;
    user_subscription_pause_count?: SortOrder;
    user_subscription_pause_extension?: SortOrder;
    user_subscription_feedback?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_subscriptionMinOrderByAggregateInput = {
    id?: SortOrder;
    subscription_end_date?: SortOrder;
    subscription_start_date?: SortOrder;
    subscription_status?: SortOrder;
    subscription_renewal_date?: SortOrder;
    subscription_tier_id?: SortOrder;
    subscription_payment_status?: SortOrder;
    user_subscription_type?: SortOrder;
    user_subscription_end_reason?: SortOrder;
    user_subscription_renewal_reminder?: SortOrder;
    user_subscription_last_updated?: SortOrder;
    user_subscription_activation_date?: SortOrder;
    user_subscription_cancellation_date?: SortOrder;
    user_subscription_pause_date?: SortOrder;
    user_subscription_pause_reason?: SortOrder;
    user_subscription_pause_duration?: SortOrder;
    user_subscription_pause_end_date?: SortOrder;
    user_subscription_pause_count?: SortOrder;
    user_subscription_pause_extension?: SortOrder;
    user_subscription_feedback?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_subscriptionSumOrderByAggregateInput = {
    subscription_tier_id?: SortOrder;
    user_subscription_pause_duration?: SortOrder;
    user_subscription_pause_count?: SortOrder;
    user_subscription_pause_extension?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    company_size?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    company_size?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    image?: StringNullableFilter<'company'> | string | null;
    company_size?: IntNullableFilter<'company'> | number | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    company_size?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    company_size?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    company_size?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    company_size?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use messageDefaultArgs instead
   */
  export type messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    messageDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use subscriptionDefaultArgs instead
   */
  export type subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    subscriptionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use tierDefaultArgs instead
   */
  export type tierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tierDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use user_subscriptionDefaultArgs instead
   */
  export type user_subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    user_subscriptionDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
