import {useState,useEffect, React} from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import PersistentDrawer from './components/PersistentDrawer';
import GlobalStats from './components/GlobalStats';
import AffectedCountries from './components/AffectedCountries';
import CountryDetails from './components/CountryDetails';
import ContinentDetails from './components/ContinentDetails';
import ExposureMap from './components/ExposureMap';
import AffectedContinents from './components/AffectedContinents';

const axios = require("axios");

function App() {

  
  const[dataCountries,setDataCountries] = useState([])
  const[dataContinents,setDataContinets] = useState([])

  let continentFlags = [
    "https://wellmune.com/wp-content/uploads/2021/06/icon-north-america-1.jpg",
    , "https://wellmune.com/wp-content/uploads/2021/06/icon-north-america-1.jpg",
    "https://wellmune.com/wp-content/uploads/2021/06/icon-north-america-1.jpg",
    "https://wellmune.com/wp-content/uploads/2021/06/icon-north-america-1.jpg",
    "https://wellmune.com/wp-content/uploads/2021/06/icon-north-america-1.jpg",
    "https://wellmune.com/wp-content/uploads/2021/06/icon-north-america-1.jpg",
    "https://wellmune.com/wp-content/uploads/2021/06/icon-north-america-1.jpg"
   
     

     ]
  
 
  async function getData(){
     
  let resCountries = await axios.get('https://disease.sh/v3/covid-19/countries') 
  setDataCountries(resCountries.data)

  let resContinents = await axios.get('https://disease.sh/v3/covid-19/continents') 
  setDataContinets(resContinents.data)

  }

  useEffect(() => {
          getData();  
      
      },[]);



  return (

<div className = "App">

<BrowserRouter>
<PersistentDrawer/>
<Routes>
<Route  path = '/' element = {<GlobalStats/>}/>
<Route  path = '/affectedCountries' element = {<AffectedCountries data = {dataCountries}/>}/>
<Route  path = '/affectedContinents' element = {<AffectedContinents data = {dataContinents}
                                                                    flags = {continentFlags}/>}/>
<Route  path = '/exposureMap' element = {<ExposureMap/>}/>
<Route  path = '/countryDetails/:countryName' element = {<CountryDetails data = {dataCountries}/>}/>
<Route  path = '/continentDetails/:continentName' element = {<ContinentDetails 
                                                              dataCountries = {dataCountries} 
                                                              data = {dataContinents}
                                                              flags = {continentFlags}/>}/>
</Routes>

</BrowserRouter>





</div>
  );
}

export default App;
