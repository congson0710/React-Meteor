import React from 'react'
import ImageDetail from './ImageDetail'

const ImageList = (props) => {
    return(
        <ul className="media-list list-group">
            {props.images.map(image => (
                <ImageDetail key={Math.random()} image={image}/>
            ))}
        </ul>
    )
}


export default ImageList