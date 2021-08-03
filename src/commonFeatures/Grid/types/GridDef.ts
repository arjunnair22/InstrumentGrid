import {ColumnDef} from "./ColumnDef";

export type GridDef<R> ={
    rowDef:RowDef<R>,
    colDefs:ColumnDef<R>[]
}

export type RowDef<R> ={
    rowStyle ?: (row:R) => string
}

