
export interface RepositoryBase{
    
}

export interface CommandBase<TProps,TResult>{
    execute(props:TProps) : TResult;
}

export interface QueryBase<TProps,TResult>{
    execute(props:TProps) : TResult;
}