export type Partialize<T, K extends keyof T> = Pick<
  T, Exclude<keyof T, K>> & Partial<Pick<T, K>
>
