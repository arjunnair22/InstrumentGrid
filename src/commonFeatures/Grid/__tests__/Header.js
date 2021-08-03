import React from "react";
import Header from "../Header";
import {render, screen} from "../../../test-utils";

const gridDef={
    rowDef:{},
    colDefs:[
        {
            key:'ticker',
            displayName:'Ticker'
        },
        {
            key:'price',
            displayName:'Price'

        },
        {
            key:'assetClass',
            displayName:'Asset Class'

        }
    ]
}

test('header renders', async ()=>{
   render(<Header gridDef={gridDef}/>)
   expect(screen.getByText(gridDef.colDefs[0].displayName)).toBeInTheDocument();
   expect(screen.getByText(gridDef.colDefs[1].displayName)).toBeInTheDocument();
   expect(screen.getByText(gridDef.colDefs[2].displayName)).toBeInTheDocument();
});

