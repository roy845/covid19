
const Button = ({text,onClick})=>{

return(
    <button
    className="btn btn-primary shadow rounded"
    variant={'contained'}
    onClick={onClick}>

      {text}
 
  </button>
)

}

export default Button;