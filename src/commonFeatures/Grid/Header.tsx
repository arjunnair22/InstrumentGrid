import {GridDef} from "./types";
import React from "react";

type HeaderProps<R> ={
    gridDef:GridDef<R>,
    data?:R
}

function Header<R>({ gridDef }:HeaderProps<R>){

    return (
        <thead>
            <tr>
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