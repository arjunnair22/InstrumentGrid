export function colDefsReducer(accumulator:any, current:any, index:number){
    return {
        [current.key]:current,
        ...accumulator
    }
}