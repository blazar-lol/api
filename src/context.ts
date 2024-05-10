export type Env = {
  DATABASE_URL: string;
};

export type Variables = {};

export interface AppContext {
  Bindings: Env;
  Variables: Variables;
}
