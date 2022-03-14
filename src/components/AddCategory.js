import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("")
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit hecho");
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue,...cats] );
            setInputValue('');//Limpia el formulario
        }
    }
            

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        onChange={ handleInputChange }
        placeholder="Escribe aquí"
        />
    </form>
  )
}
AddCategory.prototype = {
    setCategories : PropTypes.func.isRequired
    //De esta manera le decimos a react que la property setCategories es necesario en el componente.
}