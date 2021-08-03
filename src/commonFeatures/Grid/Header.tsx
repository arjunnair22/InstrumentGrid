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
            <tr onClick={tdClicked} className={'grid-tr'}>
                <HeaderRow gridDef={gridDef}/>
            </tr>
        </thead>
    )
}

function HeaderRow<R>({ gridDef }:HeaderProps<R>){
    let {colDefs} = gridDef;

    return (
        <>
            {colDefs.map(def =>( {key: def.key,displayName:def.displayName} )).map((def, index) => {
                return (
                    <th key={def+'_'+index} id={`${index}`} >
                        {
                            def.displayName
                        }
                    </th>
                )
            })}
        </>
    )
}

export default Header;