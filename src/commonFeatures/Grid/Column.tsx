import React from 'react';
import {Column, ColumnDef} from "./types";

type ColumnProps ={
    col:Column,
    options: ColumnDef<any>
}

export default Col;

function Col({col, options}:ColumnProps ){
    return (
            <td className={options.cssStyleClass ? options.cssStyleClass(col) : ''}>{col[1]}</td>
    )
}
