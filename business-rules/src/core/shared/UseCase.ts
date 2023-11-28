//Qual caso de uso que será executado

export interface UseCaseRequest<I, O> {
    execute(input: I): Promise<O>;
}
