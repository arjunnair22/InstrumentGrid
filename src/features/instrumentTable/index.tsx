import Grid from "../../commonFeatures/Grid";
import {useEffect, useState} from "react";
import {apis} from "../../constants/apis";
import {InstrumentData} from "./types/InstrumentData";
import {sortInstrumentData} from "../../helpers/sorts";
import {assetClassColors} from "../../constants/constant";


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
                rowDef:{
                    rowStyle:(row)=>{
                        return assetClassColors[row.assetClass.toLocaleLowerCase()];
                    }
                },
                colDefs:[
                    {
                        key:"ticker",
                        displayName:'Ticker',

                    },
                    {
                        key:"price",
                        displayName:"Price",
                        cssStyleClass:(price)=>{
                            return price[1] >= 0 ? "text-primary" : "text-danger";
                        }
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