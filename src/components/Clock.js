import { React,useState } from "react";


const Clock = () =>{
    let time = new Date().toLocaleDateString();
  
    const[cTime,setCTime] = useState(time);
    const[cDate] = useState(new Date().toLocaleDateString());

    const refreshClock =()=>{
       time = new Date().toLocaleTimeString();
       setCTime(time);
    }

setInterval(refreshClock,1000);

let fontSize = 30;


return(
<span style = {{
    fontSize:fontSize,
    margin: "auto"
      }}>
    {cTime} \ {cDate}
</span>
)

}

export default Clock;