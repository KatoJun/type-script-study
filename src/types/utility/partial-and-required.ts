export {};
// Utility Types・・・TypeScriptが標準で提供してくれている便利な型

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

// 既存の型の全てのプロパティがOptionalである型を定義したくなったらPartialを使う
type PartialType = Partial<Profile>;

type AllOptionalProfile = {
  name?: string;
  age: number;
  zipCode?: number;
};
// Partialとは逆に全てのプロパティを必須にしたい場合はRequiredを使う
type RequiredType = Required<AllOptionalProfile>;
