import React from 'react';
import {Column, ColumnDef} from "./types";

type ColumnProps<R> ={
    col:Column,
    options: ColumnDef<R>
}

export default Col;

function Col<R>({col, options}:ColumnProps<R> ){
    return (
            <td className={options.cssStyleClass ? options.cssStyleClass(col) : ''}>{col[1]}</td>
    )
}
