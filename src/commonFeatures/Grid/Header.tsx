import {GridDef} from "./types";
import React from "react";

type HeaderProps<R> ={
    gridDef:GridDef<R>,
    data?:R
    callbacks?: {
        sortable: (index:number)=>void
    }
}

function Header<R>({ gridDef, callbacks }:HeaderProps<R>){
    const tdClicked = function onClicked (event:React.MouseEvent){
        let id = (event.target as Element).id
        callbacks && callbacks.sortable(+id);
    }
    return (
        <thead>
            <tr onClick={tdClicked}>
                <HeaderRow gridDef={gridDef}/>
            </tr>
        </thead>
    )
}

function HeaderRow<R>({ gridDef }:HeaderProps<R>){
    let {colDefs} = gridDef;

    return (
        <>
            {colDefs.map(def => def.key).map((def, index) => {
                return (
                    <td key={def+'_'+index} id={`${index}`} >
                        {
                            def
                        }
                    </td>
                )
            })}
        </>
    )
}

export default Header;