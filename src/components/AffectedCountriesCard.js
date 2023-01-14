import {useNavigate} from 'react-router-dom'
import { React,useState } from 'react'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import ImageCard from './ImageCard';
import MainHeader from './MainHeader';
import SearchBar from './SearchBar';


const AffectedCountriesCard = (props)=>{

  const{data} = props
  let header = "Affected Countries"
  let placeholder = "Search a country"
  let searchBarType = "text"
  const navigate = useNavigate();
  const[searchCountries,setSearchCountries] = useState("")

  const filterCountries = data.filter(item=>{
    return searchCountries.toLowerCase() !=="" ? item.country.toLowerCase().includes(searchCountries.toLowerCase()):item;
})

return(

<div className='text-center mx-auto'>
  
   <MainHeader text={header}/>


<SearchBar type={searchBarType} onChange ={e=>setSearchCountries(e.target.value)} placeholder={placeholder}/>
  
   <Divider color = "black"/>

<Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 2, md: 12 }}>
        {filterCountries.map((item, index) => (
          <Grid xs={2} sm={2} md={2} key={index}>
       
            <ImageCard onClick = {()=>navigate(`/countryDetails/${item.country}`)} 
                       image = {item.countryInfo.flag}
                       detail = {item.country}/>
          </Grid>
        ))}
      </Grid>
</div>
)

}

export default AffectedCountriesCard;