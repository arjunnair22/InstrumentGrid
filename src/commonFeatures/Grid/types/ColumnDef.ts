export type ColumnDef<R> = {
    key: string,
    displayName:string,
    cssStyleClass?: (col:Column) => string,
    sortComparator?: (a:R, b:R)=> number
}

export type Column = [a:string, b:any]

export type ColDefMap<R> ={
    [key:string] : ColumnDef<R>
}