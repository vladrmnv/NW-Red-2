export interface Repository<T> {
  create<T>(item: T): T;
  find(): Array<T>;
  findById(): T;
}
