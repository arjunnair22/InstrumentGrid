export type ColumnDef<R> = {
    key: string,
    displayName:string,
    cssStyleClass?: (col:Column) => string
}

export type Column = [a:string, b:any]

export type ColDefMap<R> ={
    [key:string] : ColumnDef<R>
}