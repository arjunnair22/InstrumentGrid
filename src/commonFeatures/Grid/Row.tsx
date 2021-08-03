import {GridDef} from "./types";
import Col from "./Column";
import {ColDefMap} from "./types/ColumnDef";

type RowProps<R> = {
    row:R,
    options:GridDef<R>,
    colDefMap:ColDefMap<R>,
    index:string
}

function Row<R>({ row, options, colDefMap , index}:RowProps<R>){
    let {rowStyle} = options.rowDef;
    return (
        <tr className={rowStyle && rowStyle(row)} data-testid = {index}>
            {
                Object.entries(row).map((value, index) => {
                    return <Col key = {index} col={value} options={colDefMap[value[0]]}/>
                }
                )
            }
        </tr>
    )
}

export default Row;