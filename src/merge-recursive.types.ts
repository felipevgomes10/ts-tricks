import type { Merge } from "./merge.type";

export type MergeRecursive<TArr extends object[], T1 = {}> = TArr extends [
  infer T2 extends object,
  ...infer TRest extends object[]
]
  ? MergeRecursive<TRest, Merge<T1, T2>>
  : T1;

// Example
type User = {
  name: string;
  age: number;
};

type User2 = {
  name: string;
  age: string;
};

type User3 = {
  email: string;
  password: string;
};

type User4 = {
  email: string;
  password: number;
};

type MergedUser = MergeRecursive<[User, User2, User3, User4]>;
