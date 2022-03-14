import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridGifItem } from './GridGifItem';
import { Loader } from './Loader';

export const GifGrid = ({category}) => {
    // const [image, setImage] = useState([])
    const {data,loading} = useFetchGifs(category);
    console.log(data);
    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImage)
    // }, [category])


  return (
    <div>
        <h3>{category}</h3>
        { loading && <Loader/> }
        <div className='card_container'>
            {
                data.map( ( img ) => 
                    <GridGifItem key={img.id} img={img} />
                 )
            }
        </div>
    </div>
  )
}
