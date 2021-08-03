import Grid from "../../commonFeatures/Grid";
import {useEffect, useState} from "react";
import {apis} from "../../constants/apis";
import {InstrumentData} from "./types/InstrumentData";
import {sortByAssetClass, sortByPrice, sortByTicker} from "../../helpers/sorts";
import {assetClassColors} from "../../constants/constant";


function InstrumentTable(){
    const [instrumentData, setInstrumentData] = useState<InstrumentData[]>([]);
    const fetchInstrumentData = async (): Promise<InstrumentData[]>=>{
        try{
            let response = await fetch(apis.instruments)
            return await response.json();
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
                dataSetter:(data:InstrumentData[])=>{
                    setInstrumentData(data)
                },
                colDefs:[
                    {
                        key:"ticker",
                        displayName:'Ticker',
                        sortComparator:sortByTicker,
                    },
                    {
                        key:"price",
                        displayName:"Price",
                        cssStyleClass:(price)=>{
                            return price[1] >= 0 ? "text-primary" : "text-danger";
                        },
                        sortComparator:sortByPrice
                    },
                    {
                        key:"assetClass",
                        displayName:"Asset Class",
                        sortComparator:sortByAssetClass
                    }
                ]
            }
        }
    />
    )
}

export default InstrumentTable;