import {GridDef} from "./types";
import Col from "./Column";

type RowProps<R> = {
    row:R,
    options:GridDef<R>
}

function Row<R>({ row, options }:RowProps<R>){
    let {rowStyle} = options.rowDef;
    return (
        <tr className={rowStyle && rowStyle(row)}>
            {
                Object.entries(row).map((value, index, array) => {
                    return <Col key = {index} col={value} options={options.colDef}/>
                }
                )
            }
        </tr>
    )
}

export default Row;