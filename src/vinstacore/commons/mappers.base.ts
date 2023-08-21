
export interface MapperBase<T,U> {
    toDomain(raw: U): T;
    toPersistence(domain: T): U;
}