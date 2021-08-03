import Grid from "../../commonFeatures/Grid";
import {useEffect, useState} from "react";
import {apis} from "../../constants/apis";
import {fetch} from "msw/lib/types/context";
import {InstrumentData} from "./types/InstrumentData";
import {sortInstrumentData} from "../../helpers/sorts";


function InstrumentTable(){
    const [instrumentData, setInstrumentData] = useState<InstrumentData[]>([]);

    const fetchInstrumentData = async (): Promise<InstrumentData[]>=>{
        try{
            let response = await fetch(apis.instruments)
            let data  = await response.json();
            return sortInstrumentData(data);
        }
        catch (e){
            return [];
        }

    }

    useEffect( ()=>{
        fetchInstrumentData().then(setInstrumentData).catch(console.log);
    },[]);


    return (
        <Grid data={instrumentData} gridDef={
            {
                rowDef:{},
                colDefs:[
                    {
                        key:"ticker",
                        displayName:'Ticker'
                    },
                    {
                        key:"price",
                        displayName:"Price"
                    },
                    {
                        key:"assetClass",
                        displayName:"Asset Class"
                    }
                ]
            }
        }
    />
    )
}

export default InstrumentTable;