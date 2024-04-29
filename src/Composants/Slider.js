import banniere1 from '../banniere1.png'
import banniere2 from '../banniere2.png'
import banniere3 from '../banniere3.png'
import banniere4 from '../banniere4.png'

import "./Slider.css"


export default function Slider(){
    return(
        <div class="carousel">
          <div class="carousel-slide">
            <img src={banniere1} alt={banniere1}/>
            <img src={banniere2} alt={banniere2}/>
            <img src={banniere3} alt={banniere3}/>
            <img src={banniere4} alt={banniere4}/>
          </div>
        </div>
    )
}
