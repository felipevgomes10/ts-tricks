export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// Example
type User = {
  name: string;
  age: number;
} & {
  email: string;
  password: string;
};

type PrettifiedUser = Prettify<User>;
