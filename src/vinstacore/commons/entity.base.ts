
export interface EntityBase<T> {
    equals(other: T): boolean;
}