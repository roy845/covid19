import {React,Fragment,useState} from 'react';
import Card from "react-bootstrap/Card";
import Divider from '@mui/material/Divider';
import Tabs from "@mui/material/Tabs";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Chart from './Chart';
import Button from './Button';
import MainHeader from './MainHeader'

 const GlobalStatsCard = (props)=> {

  let date = new Date(props.miliSecondsValue).toString();
  const[donutChart,setDonutChart] = useState(false);
  const [value, setValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const changeGraphs =()=>{
    setDonutChart(!donutChart)
   }

  const allDetails = props.allDetails.map((item, index) => {
  
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

  const GraphNames = ["Global Stats Bar Chart","Global Stats Pie Chart"]

  const charts = GraphNames.map((item, index) => {
  var barChartData = []
  var pieChartData = []
  var pieChartHeaders = []
  var pieChartDetails = []
  

    for (var i = 0; i < props.allDetails.length; i++) {
        var dataBarDetails = {
          type: "bar",
          y: [props.allDetails[i].detail],
          width: 0.05,
          name: props.allDetails[i].header,
          
          
        };
        barChartData.push(dataBarDetails);

        pieChartHeaders.push(props.allDetails[i].header)
        pieChartDetails.push(props.allDetails[i].detail)
        
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

  return (

<Fragment>

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
        <MainHeader text = {props.mainHeader}/>
        <Divider style = {{backgroundColor:"black"}} />
        <img alt ="" 
             className='mt-2' 
             width ="250" 
             height = "250" 
             src = {"https://cdn-icons-png.flaticon.com/512/744/744480.png"}/>
      
        <Tabs
                className="text-center w-50 h-50 mx-auto"
                value={value}
                cenetred="true"
                onChange={handleChangeTab}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tooltip title="Global Stats">
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
               

                <Tooltip title="Global Stats Charts">
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
        <div className='text-center'>{props.miliSecondsHeader}</div>

        <div className='text-center'>{date}</div>

       <Divider style = {{backgroundColor:"black"}} /> 

      </Card.Title>
 <TabPanel value={value} index={0}>
   <Divider style = {{backgroundColor:"black"}} />
 {allDetails}
 </TabPanel>


 <TabPanel value={value} index={1}>
 <div className="text-center mt-5 mb-5">
              <Button text = "Change PieChart To Donut" onClick = {changeGraphs}/>
       </div>

       {charts}
 </TabPanel>
       

    </Card.Body>
  </Card>
        
        
         </div>
        
    </div>
</div>


</div>

  </Fragment>
  );
}


export default GlobalStatsCard;