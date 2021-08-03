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
    return (
        <table className={'table table-bordered'}>
            <Header gridDef={gridDef}/>
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
        <>
            {
                data.map((d,index)=>{
                    return (
                        <Row colDefMap={colDefMap} key={index} row={d} options={gridDef} />
                    )
                })
            }
        </>
    )
}

export default Grid;