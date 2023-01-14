import { React,useState } from 'react'
import Divider from '@mui/material/Divider';
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Tab from "@mui/material/Tab";
import Chart from './Chart'
import Tabs from "@mui/material/Tabs";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import MainHeader from './MainHeader'
import Button from './Button'


const CountryDetails = (props)=>{

    const { countryName } = useParams();
    const [value, setValue] = useState(0);
    const[donutChart,setDonutChart] = useState(false);

    const changeGraphs =()=>{
        setDonutChart(!donutChart)
       }


    const handleChangeTab = (_event, newValue) => {
    setValue(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          "aria-controls": `simple-tabpanel-${index}`,
        };
      }
    
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
    
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <span>{children}</span>
              </Box>
            )}
          </div>
        );
      }
    
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };


    const filteredCountry = props.data.filter(item=>{
        return item.country === countryName;
    })


    let headers = Object.keys(filteredCountry[0])
    
    let values = Object.values(filteredCountry[0])

    let countryInfo = Object.values(filteredCountry[0].countryInfo)

    let flag = countryInfo[5];
    let miliSeconds = values[0]
    let updateDateHeader = headers[0]

    let allDetails = []
    for(var i = 3;i<values.length;i++){
        allDetails.push({
            header:headers[i],
            detail:values[i],
        })
    }



let date = new Date(miliSeconds).toString();


const countryDetails = allDetails.map((item, index) => {
  
    return ( <div key = {index} className = "text-start">

    <div style={{width: "100%" ,display: "table"}}>
        <div style={{display: "table-row"}}>
            <div style={{width: "900px", display: "table-cell"}}> <h2>{item.header}</h2> </div>
            <div style={{display: "table-cell"}}><h2>{item.detail}</h2> </div>
        </div>
    </div>
    
    <Divider style = {{backgroundColor:"black"}} />
    </div>) 
    
  });

let barChartName = `${countryName} Bar Chart`
let pieChartName = `${countryName} Pie Chart`

  const GraphNames = [barChartName,pieChartName]

  const charts = GraphNames.map((item, index) => {
  var barChartData = []
  var pieChartData = []
  var pieChartHeaders = []
  var pieChartDetails = []
  

    for (var i = 0; i < allDetails.length; i++) {
        var dataBarDetails = {
          type: "bar",
          y: [allDetails[i].detail],
          width: 0.05,
          name: allDetails[i].header,
        
        };
        barChartData.push(dataBarDetails);

        pieChartHeaders.push(allDetails[i].header)
        pieChartDetails.push(allDetails[i].detail)
        
      }

      var dataPieChartDetails = {
        values: pieChartDetails,
        labels: pieChartHeaders,
        hole:donutChart ? 0.4:0,
        type: 'pie'
      }
      pieChartData.push(dataPieChartDetails)

      var allData = [barChartData,pieChartData]

  
    return ( 
      <Chart key={index} index = {index} data = {allData} title = {item}/>
    ) 
    
  });

return (

    <div  className = "text-start">

<div style={{width: "100%" ,display: "table"}}>
    <div style={{display: "table-row"}}>
        <div style={{width: "900px", display: "table-cell"}}> 
        

        <Card
    bg="light"
    text="dark"
    style={{maxHeight: 800, overflow: "auto"}}
    className = "w-50 mx-auto text-center shadow p-3 mb-5 rounded">

    <Card.Body> 
      <Card.Title>

        <MainHeader text = {countryName}/>
        <Divider style = {{backgroundColor:"black"}} />
        <img  alt ="" border = "1px" className='mt-2' width ="250" height = "180" src = {flag}/>
      
        <Tabs
                className="text-center w-50 h-50 mx-auto"
                value={value}
                cenetred="true"
                onChange={handleChangeTab}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tooltip title={`${countryName} Stats`}>
                  <Tab
                    icon={
                      <InfoIcon
                        color="primary"
                      />
                    }
                    {...a11yProps(0)}
                    aria-label="bar"
                  />
                </Tooltip>
               

                <Tooltip title={`${countryName} Graphs`}>
                  <Tab
                    icon={
                      <BarChartIcon
                        color="primary"
                      />
                    }
                    {...a11yProps(1)}
                    aria-label="table"
                  />
                </Tooltip>

                
              </Tabs>
        <Divider style = {{backgroundColor:"black"}} />
        <div className='text-center'>{updateDateHeader}</div>

        <div className='text-center'>{date}</div>

       <Divider style = {{backgroundColor:"black"}} /> 

      </Card.Title>
 <TabPanel value={value} index={0}>
   <Divider style = {{backgroundColor:"black"}} />
 {countryDetails}
 </TabPanel>


 <TabPanel value={value} index={1}>
 <div className="text-center mt-5 mb-5">

  <Button text = "Change PieChart To Donut" onClick={changeGraphs}/>
              
       </div>

       {charts}

      
 </TabPanel>
       

    </Card.Body>
  </Card>
        
        
         </div>
        
    </div>
</div>


</div>

)


}

export default CountryDetails;