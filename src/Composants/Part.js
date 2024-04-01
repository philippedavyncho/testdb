import "./part.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Part(){
    return(
        <>
        <div className="Part">
            <div className="Texteleft">
                <p>LA QUALITE AU MEILLEUR PRIX</p>
            </div>
            <div className="milieu">
                <p>YATTE</p>
            </div>
            <div className="Cycleright">
                <p>jusqu'a<br/><span>-60%</span></p>
            </div>
        </div>
        <div className="partGrand">
            <div className="nomGrand">YATTE</div>
            <form>
                <input type="search" placeholder="Recherche ..." className="bigSearch"/>
                <input type="submit" className="submit" value="Rechercher"/>
                
            </form>
            <div className="panierGrand">
                <FontAwesomeIcon icon={faShoppingCart} className="grop"/>
                <span>0</span>
            </div>
        </div>
        </>
    )
}  