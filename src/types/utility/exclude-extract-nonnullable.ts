export {};

/**
 * Exclude・・・Union型からある型を除外したい場合に使う
 */
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
// Function（関数型の総称）を指定することで関数型を全て除外できる
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

/**
 * Extract・・・Union型からある型のみ抽出したい場合に使う
 */
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

/**
 * NonNullable・・・Union型からnullやundefinedを除外できる
 */
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
