import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([""])//Esta la propiedad que me permite acceder al estado del arreglo que le estoy pasando

    // const handleAdd = ()=>{
    //     setCategories( cats => [...cats,"HunterxHunter"] );
    // }
  return (
    <>
    <h2>Busca tus Gifs</h2>
    <AddCategory setCategories = {setCategories}/>
    <hr />
    <ol>
        {
            categories.map((category)=>
                <GifGrid key={category} category={category}/>
            )
        }
    </ol>
    </>
  )
}
