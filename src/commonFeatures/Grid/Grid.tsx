import Header from "./Header";
import Row from "./Row";
import {useMemo} from "react";
import { GridDef} from "./types";
import {colDefsReducer} from "../../helpers/reducers";

interface GridProps<R>{
    data:R[],
    gridDef:GridDef<R>
}

function Grid<R>({data, gridDef}:GridProps<R>){

    const callbacks = {
        sortable:(index:number)=>{
            let comparator = gridDef.colDefs[index].sortComparator;
            gridDef.dataSetter(data.slice().sort(comparator));
        }
    }

    const noData = data.length === 0;

    return (
        noData ?<p> No data available </p>:
        <table className={'table table-bordered'}>
            <Header gridDef={gridDef} callbacks={callbacks}/>
            <GridBody data={data} gridDef={gridDef}/>
        </table>
    )
}


function GridBody<R>({data, gridDef}:GridProps<R>){
    let colDefMap = useMemo(()=>{
        return gridDef.colDefs.reduce(colDefsReducer,{})
        }, [gridDef.colDefs]
    )
    return (
        <tbody>
            {
                data.map((d,index)=>{
                    return (
                        <Row colDefMap={colDefMap} key={index} row={d} options={gridDef} index={`r-${index}`}/>
                    )
                })
            }
        </tbody>
    )
}

export default Grid;