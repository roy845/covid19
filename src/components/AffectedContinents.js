import { React } from "react"
import AffectedContinentsCard from "./AffectedContinentsCard";


const AffectedContinents = (props) => {

return(

<div className="mx-auto mb-5">
 
<AffectedContinentsCard data = {props.data}
                        flags = {props.flags}/>

</div>
)
}

export default AffectedContinents;