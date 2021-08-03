import {ColumnDef} from "./ColumnDef";

export type GridDef<R> ={
    rowDef:RowDef<R>,
    colDefs:ColumnDef<R>[],
    dataSetter:(d:R[])=> void
}

export type RowDef<R> ={
    rowStyle ?: (row:R) => string
}

