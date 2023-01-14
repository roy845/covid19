
import { React } from "react"
import AffectedCountriesCard from "./AffectedCountriesCard";


const AffectedCountries = (props) => {

return(

<div className="mx-auto mb-5">
 
<AffectedCountriesCard data = {props.data}/>

</div>
)
}

export default AffectedCountries;