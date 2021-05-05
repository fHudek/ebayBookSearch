export type ActionsUnion<
	A extends { [actionCreator: string]: (...args: any[]) => any }
> = ReturnType<A[keyof A]>;

export interface Action<T extends string> {
	type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
	type: T;
	payload: P;
}
