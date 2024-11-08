import type { Prettify } from "./prettify.types";

export type Merge<T1, T2> = Prettify<Omit<T1, keyof T2> & T2>;

// Example
type User = {
  name: string;
  age: number;
};

type User2 = {
  name: string;
  age: string;
};

type MergedUser = Merge<User, User2>;
