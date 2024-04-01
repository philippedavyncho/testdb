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
            const result = await axios('http://localhost:8000/api/produits/')
            setData(result.data)
        }

        fetchdata()
    }, [])


    const filteredData = data.filter(item => item.id === parseInt(produitId))
    const item = filteredData[0]

    return(
        <>
            {item && (
                <div className="detailCont">
                    <div className="detailImg">
                        <img src={item.image} alt={item.name} style={{width:"200px"}}/>
                    </div>
                    <div className="detailNom">{item.name}</div>
                    <div className="detailPrix">
                    <div>{formatAmountWithSeparators(item.price)} FCFA</div>
                        <div 
                className="Add"
                onClick={() => {
                          addItem(item);
                          toast.info("Un article a été ajouter aux panier");
                        }}
            >AJOUTER AU PANIER</div>
                    </div>
                    <div className="detailDesc">
                    <p>{item.description}</p>
                    </div>
                    
                    <div className="Addshop">
                    <Link to="/" className="link">
                        <p>continuer votre shopping</p>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
