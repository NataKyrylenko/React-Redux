export interface Jokeinfo {
    id: string,
    question: string,
    answer:string
}


export interface RandomJokesSliceState{
    data: Jokeinfo[],
    status: 'default' | 'loading' | 'succes' | 'error',
    error: any
}