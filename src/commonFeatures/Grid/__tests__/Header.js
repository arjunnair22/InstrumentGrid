import React from "react";
import Header from "../Header";
import {render, screen} from "../../../test-utils";

const gridDef={
    rowDef:{},
    colDefs:[
        {
            key:'ticker',
        },
        {
            key:'price',
        },
        {
            key:'assetClass',
        }
    ]
}

test('header renders', async ()=>{
   render(<Header gridDef={gridDef}/>)
   expect(screen.getByText('ticker')).toBeInTheDocument();
   expect(screen.getByText('price')).toBeInTheDocument();
   expect(screen.getByText('assetClass')).toBeInTheDocument();
});

test('click event is fired',async ()=>{
    const cb = {
        sortable: jest.fn()
    }
   render(<Header gridDef={gridDef} callbacks={cb}/> )
   let ticker = screen.getByText('ticker');
   ticker.click();
   expect(cb.sortable).toBeCalledTimes(1);
   expect(cb.sortable.mock.calls.length).toBe(1);
   expect(cb.sortable.mock.calls[0][0]).toBe(0)

});