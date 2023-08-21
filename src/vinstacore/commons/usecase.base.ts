
export interface UseCase<IUseCasePort, IUseCaseResult> {
    execute(port: IUseCasePort): IUseCaseResult;
}

export interface UseCaseTransaction<IUseCasePort, IUseCaseResult> extends UseCase<IUseCasePort, IUseCaseResult> {
    onCommit?: (result: IUseCaseResult, port: IUseCasePort) => Promise<void>;
    onRollback?: (error: Error, port: IUseCasePort) => Promise<void>
}