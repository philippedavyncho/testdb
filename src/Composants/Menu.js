import "./Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import {CategoryContext} from "./CategoryContext"

import {useState, useEffect, useContext} from 'react'
import axios from "axios"
import {useCart} from "react-use-cart"

import Panier from "./Panier"


import {Link} from "react-router-dom"

import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';



export default function Menu(){
    
    //changer le bouton
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    
    const {totalItems} = useCart()
    
    const [categories, setCategories] = useState([])
    
    
    const { setSelectedCategory } = useContext(CategoryContext);
    
    //const { orderSuccess } = useOrderContext()
    
    const [orderSuccess, setOrderSuccess] = useState(false);

    useEffect(() => {
        const orderSuccessFromLocalStorage = localStorage.getItem('orderSuccess');
        setOrderSuccess(orderSuccessFromLocalStorage === 'true');
        
        // Set orderSuccess to false after 3 minutes
    const timer = setTimeout(() => {
      setOrderSuccess(false);
      localStorage.setItem('orderSuccess', 'false');
    }, 6 * 60 * 1000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
        
    }, []);
    
    
    
    useEffect(()=>{
        const fetchdata = async()=>{
            const result = await axios('/.netlify/functions/categories')
            setCategories(result.data)
        }
        
        fetchdata()
    }, [])
    
    
    
    const handleCategorySelection = (nom)=>{
        setSelectedCategory(nom)
        
    }
    
    return(
        <>
        <div className="bigmenu">
            <div className="Menu">
                <label htmlFor="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars } />
                  {orderSuccess ? (
                        <span className="notificationCircle blink">!</span>
                    ) : ""}
                </label>
                <input type="checkbox" id="menu" />
                <div className="name"><Link to="/" className="nameLink">YATTE</Link></div>
                
                <input type="checkbox" id="panier" />
                <label for="panier">
                    <FontAwesomeIcon icon={faShoppingCart} /><span className="mnumn">
                    {totalItems}
                </span>
                </label>
                <div className="leftmenu">
                    <p onClick={() => handleCategorySelection(null)}>Nos catégories</p>
                    {categories.map(categorie=>{
                       return(
                           <div>
                           <p onClick={()=>handleCategorySelection(categorie)}>{categorie.nom}</p>
                           </div>
                        )
                   })}
                   
                  {orderSuccess && (
                    <>
                        
                    <PDFDownloadLink document={<PdfDocument />} fileName="bon_commande.pdf" className="Recu">
                          {({ blob, url, loading, error }) =>
                            loading ? 'Chargement...' : 'Télécharger'
                          }
                        </PDFDownloadLink>
                    </>
                  )}
                </div>
                <div className="cart">
                    <div className="hpanier">
                    <label for="panier">
                        <FontAwesomeIcon icon={faTimes} className="faTime"/>
                    </label>
                    <p className="hpNom">mon panier</p>
                    <img
                    src="../../img/a2.png"
                    alt="Visa"
                    className="faImage"
                    />
                    </div>
                    <div>
                        <Panier />

                    </div>
                </div>
            </div>
            <div className="barre">
            </div>
        </div>
        <div className="grdEcran">
            <p onClick={() => handleCategorySelection(null)}>Nos catégories</p>
                    {categories.map(categorie=>{
                       return(
                           <div>
                           <p onClick={()=>handleCategorySelection(categorie)}>{categorie.nom}</p>
                           </div>
                        )
                   })}
        </div>
        </>
    )
}