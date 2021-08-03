import React from "react";
import Row from "../Row";
import {render, screen} from "../../../test-utils";

const row = {
   "ticker":"ALPHA",
   "price": 3150.67,
   "assetClass":"Credit"
}

test('row renders', async ()=>{
   const gridDef={
      rowDef:{},
      colDef:{
         options:{}
      }
   }
   render(<Row row={row} options={gridDef}/>)
   expect(screen.getByText(row.ticker)).toBeInTheDocument();
   expect(screen.getByText(row.price)).toBeInTheDocument();
   expect(screen.getByText(row.assetClass)).toBeInTheDocument();
});

test('row renders with correct classname', async ()=>{
   const gridDef={
      rowDef:{
         rowStyle:(row)=>{
            return 'row-style'
         }
      },
      colDef:{
         options:{}
      }
   }
   render(
       <table>
       <tbody>
       <Row row={row} options={gridDef}/>
       </tbody>
       </table>
   )
   expect(screen.getByText(row.ticker).parentNode).toHaveClass('row-style');

});

