import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./GrandMenu.css"
import {useCart} from "react-use-cart"
import {Link} from "react-router-dom"



export default function GrandMenu(){

    const {totalItems} = useCart()

    return(
        
        <div className="partGrand">
            <div className="nomGrand">YATTE</div>
            <div class="promo pulse">
            <p class="animation1">Ne manquez pas notre offre spéciale !</p>
            <p class="animation2">profitez dès maintenant</p>
            </div>
            <div className="panierGrand">
                <Link to="/panier" >
                <FontAwesomeIcon icon={faShoppingCart} className="grop"/>
                <span>{totalItems}</span>
                </Link>
            </div>
        </div>
    )
}