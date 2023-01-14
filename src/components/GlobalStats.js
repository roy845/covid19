import React, { useEffect, useState ,Fragment} from "react";
import GlobalStatsCard from "./GlobalStatsCard";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import {ThreeCircles} from 'react-loader-spinner';

const axios = require("axios");

const GlobalStats = ()=>{

const[data,setData] = useState({})
const { promiseInProgress } = usePromiseTracker();
let mainHeader = "Global Stats";
let mainHeaderGraphs = "Global Stats Graphs"
let headers,details;
let miliSecondsHeader;
let miliSecondsValue;
let allDetails = [];

async function getData(){
  let res = await axios.get('https://disease.sh/v3/covid-19/all') 
  setData(res.data)
}

useEffect(() => {
trackPromise(
    getData());  
    
},[]);

  headers = Object.keys(data);
  details = Object.values(data);
  miliSecondsHeader = headers[0];
  miliSecondsValue = details[0];
 
  for(let i=1;i<headers.length;i++){   
   allDetails.push({
     header:headers[i],
     detail:details[i]
   })
  }



return(

<div className = "text-center w-100 h-100 mx-auto">
  {//if
      promiseInProgress
      ? <Fragment>
          <div className="text-center">
            <h4
              className="w-100 h-100 mt-5"
              style={{ fontFamily: "sans-serif" }}
            >
              We analyze your data please wait...
            </h4>
            
            <ThreeCircles
              className="w-100 h-100 mt-5"
              type="ThreeDots"
              color="#1976D2"
              height="100"
              width="100"
              
              
            />
           
          </div>
          
          </Fragment>
       
      : //else
      <Fragment>
<GlobalStatsCard mainHeader = {mainHeader}
                 mainHeaderGraphs = {mainHeaderGraphs}
                 miliSecondsHeader = {miliSecondsHeader}
                 miliSecondsValue = {miliSecondsValue}
                 allDetails = {allDetails}>
</GlobalStatsCard>
      </Fragment>
            }

</div>

  



);

}

export default GlobalStats;