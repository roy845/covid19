import * as React from 'react';
import Form from "react-bootstrap/Form"


 const SearchBar =({type,onChange,placeholder})=> {

return(
    <Form>
    <Form.Group controlId="formGroupSearch">
      <Form.Control type={type} onChange ={onChange} placeholder={placeholder} />
    </Form.Group>
  </Form>
)


 }

 export default SearchBar;