import {useNavigate} from 'react-router-dom'
import { React } from 'react'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import ImageCard from './ImageCard';
import MainHeader from './MainHeader';



const AffectedContinentsCard = (props)=>{
  const{data,flags} = props
  let header = "Affected Continents"
  const navigate = useNavigate();

  


return(

<div className='text-center mx-auto'>
  
   <MainHeader text={header}/>

<Divider color = "black"/>

<Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 2, md: 12 }}>
        {data.map((item, index) => (
          <Grid xs={2} sm={2} md={2} key={index}>
       
            <ImageCard onClick = {()=>navigate(`/continentDetails/${item.continent}`)} 
                       image = {flags[index]}
                       detail = {item.continent}/>
          </Grid>
        ))}
      </Grid>
</div>
)

}

export default AffectedContinentsCard;