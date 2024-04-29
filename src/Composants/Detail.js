import {useParams, Link} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";
import "./Detail.css";
import {useCart} from "react-use-cart";
import { toast } from 'react-toastify';



function formatAmountWithSeparators(amount) {
  return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}



export default function Detail (){
    
    const {addItem} = useCart()

    const [data, setData] = useState([])

    const {produitId}=useParams()


    useEffect(()=>{
        const fetchdata = async()=>{
            const result = await axios('/.netlify/functions/produits')
            setData(result.data)
        }

        fetchdata()
    }, [])


    const filteredData = data.filter(item => item.id === parseInt(produitId))
    const item = filteredData[0]

    return(
        <>
            {item && (
                <>
                <div className="detailCont">
                    <div className="secondCont">
                    <div className="detailImg">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="npbtn">
                    <div className="detailNom"><h3>{item.name}</h3></div>
                    <div className="detailPrix">
                    <h3>{formatAmountWithSeparators(item.price)} fcfa <span className="detaibarer">{formatAmountWithSeparators(item.pribarrer)} fcfa</span></h3>
                        <div 
                className="Add"
                onClick={() => {
                          addItem(item);
                          toast.info("Un article a été ajouter aux panier");
                        }}
            >AJOUTER AU PANIER</div></div>
                    </div>
                    <div className="detailDesc">
                        <h3>fiche technique</h3>
                    <p>{item.description}</p>
                    </div>
                    </div>
                    
                </div>
                <div className="Addcenter">
                    <div className="Addshop">
                    <Link to="/" className="link">
                        <p>continuer votre shopping</p>
                        </Link>
                    </div>
                    </div>
                </>
            )}
        </>
    )
}
