export {};

// mapped types・・・既存のオブジェクトの型を流用して新たに型を作る

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

// keyof で指定した型の全てのプロパティを文字列リテラル型のUnion型として取得できる
// この場合、type PropertyTypes = "name" | "age" となる
type PropertyTypes = keyof Profile;

type Optional<T> = {
  // in で keyof で取得したUnion型の各要素を1つずつ取り出し、Pとして扱う
  // T[P]でT型の各プロパティの型が得られる
  [P in keyof T]?: T[P] | null;
};

type OptionalProfile = Optional<Profile>;
