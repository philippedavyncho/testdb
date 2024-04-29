import "./Produit.css"
import {useCart} from "react-use-cart";
import { toast } from 'react-toastify';
import Loading from "./Loading"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"


function formatAmountWithSeparators(amount) {
  return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



export default function Produit({name, price, image, item, id,logo,pribarrer,texte}){
    
    const {addItem} = useCart()
    
    const [load, setLoad] = useState(true)
    
    useEffect(()=>{
        setTimeout(function() {
            setLoad(false)
        }, 2000);
    },[])
    
    return(
        <div className="card">
            <div className="livraison">
                {name}
            </div>
            <div className="cardlogo">
                <div className="logo">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="pourcentage">{Math.floor((price-pribarrer)/pribarrer*100)}%</div>
            </div>
            
            <div className="cardImage">{load?<Loading/>:
            <div>
              <div className="imgcontainer"><Link to={`/${id}`}><img src={image} alt={name} /></Link></div>
              <div className="legende">{texte}</div>
            </div>
            }
            </div>
            
            <div className="prix">{formatAmountWithSeparators(price)} FCFA</div>
            <div className="pribarrer">{formatAmountWithSeparators(pribarrer)} FCFA</div>

            <div 
                className="Add"
                onClick={() => {
                          addItem(item);
                          toast.info("Un article a été ajouter aux panier");
                        }}
            >AJOUTER AU PANIER</div>
        </div>
    )
    
}