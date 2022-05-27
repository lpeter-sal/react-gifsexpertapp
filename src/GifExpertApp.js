import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories , setCategories  ] = useState(['Power Rangers']);

    // Para agregar elementos nuevos.
    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Avengers']  );
    //     setCategories( cats => [...cats, 'Avengers'])
    // }

  return (
    <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={ setCategories } />

        <hr />

        <ol>
            { 
                categories.map( category  => (
                    <GifGrid 
                        key={category}
                        category={category} />
                )) 
            }
        </ol>

    </>
  )
}
