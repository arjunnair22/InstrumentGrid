import React from "react";
import Row from "../Row";
import {render, screen} from "../../../test-utils";

const row = {
   "ticker":"ALPHA",
   "price": 3150.67,
   "assetClass":"Credit"
}

function Table (props){
   return (<table>
          <tbody>

             {props.children}

          </tbody>
       </table>
   )
}


test('row renders', async ()=>{
   const gridDef={
      rowDef:{
         rowStyle:()=>{
            return 'row-style'
         }
      },
      colDef:{
         options:{}
      }
   }
   const colDefMap = {
      'ticker':{key:'ticker'},
      'price':{key:'price'},
      'assetClass':{key:'Credit'}
   }

   render(
       <Table>
         <Row row={row} options={gridDef} colDefMap={colDefMap} index={0}/>
       </Table>
   )
   expect(screen.getByText(row.ticker)).toBeInTheDocument();
   expect(screen.getByText(row.price)).toBeInTheDocument();
   expect(screen.getByText(row.assetClass)).toBeInTheDocument();
});

test('row renders with correct classname', async ()=>{
   const gridDef={
      rowDef:{
         rowStyle:()=>{
            return 'row-style'
         }
      },
      colDef:{
         options:{}
      }
   }
   const colDefMap = {
      'ticker':{key:'ticker'},
      'price':{key:'price'},
      'assetClass':{key:'Credit'}
   }
   render(
       <table>
       <tbody>
       <Row row={row} options={gridDef} colDefMap={colDefMap} index={0}/>
       </tbody>
       </table>
   )
   expect(screen.getByText(row.ticker).parentNode).toHaveClass('row-style');

});

