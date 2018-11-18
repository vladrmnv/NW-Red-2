export interface GenericRepository<T> {
  create<T>(item: T): Promise<T>;
  find(): Promise<T[]>;
  findById(): Promise<T>;
}
