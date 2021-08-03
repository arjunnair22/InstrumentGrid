export type ColumnDef<R> = {
    key: string,
    sortable?: boolean,
    sortFn?: (row1:R, row2:R) => boolean
    cssStyleClass?: (col:Column) => string
}

export type Column = [a:string, b:any]