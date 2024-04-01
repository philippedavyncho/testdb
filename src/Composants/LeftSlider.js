import lateral from '../lateral.jpeg'
import lateral1 from '../lateral1.jpeg'
import lateral2 from '../lateral2.jpeg'
import lateral5 from '../lateral5.jpeg'

import "./LeftSlider.css"


export default function Slider(){
    return(
        <div class="carouselA">
          <div class="carousel-slideA">
            <img src={lateral} alt={lateral} style={{width:"100%"}}/>
            <img src={lateral1} alt={lateral1} style={{width:"100%"}}/>
            <img src={lateral2} alt={lateral2} style={{width:"100%"}}/>
            <img src={lateral5} alt={lateral5} style={{width:"100%"}}/>
          </div>
        </div>
    )
}
