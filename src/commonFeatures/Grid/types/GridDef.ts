import {ColumnDef} from "./ColumnDef";

export type GridDef<R> ={
    rowDef:RowDef<R>,
    colDef:ColumnDef<R>
}

export type RowDef<R> ={
    rowStyle ?: (row:R) => string
}

