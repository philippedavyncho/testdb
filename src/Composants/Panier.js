import {useCart} from "react-use-cart"
import "./Panier.css"


//modal
import Modal from './Modal';

import {useState, useEffect} from 'react'

import Order from "./Order"

import axios from "axios"

import Produit from "./Produit"


function formatAmountWithSeparators(amount) {
  return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



export default function Panier(){
    
    //recommandation
    const [data, setData] = useState([])
    
    //debut Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };
    
    const closeModal = () => {
        setIsModalOpen(false);
      };
    //fin modal
    

    
    
    const {
        isEmpty, 
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        
    } = useCart()
    
    
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await axios('http://localhost:8000/api/produits/')
            setData(result.data)
        }
        fetchData()
    }, [])
    
    const article = items.map(item =>item.name)
    
    const kategorie = items.map(item =>item.categorie.nom)
    
    const filteredData = data.filter((item) => 
        kategorie.includes(item.categorie.nom) && 
        !article.includes(item.name)
    );
    
    

    if(isEmpty) return <div className="panierVide"><p className="pvtitle">votre panier est vide</p><img
                src="../../img/a2.png"
                alt="Visa"
                className="igVide"
              />
              <label for="panier" className="btnshop">Continuer votre shopping</label>
              </div>
    return(
        <>
        <div className="cartcontainer">
        <div className="CartSold">
                    <p>Montant</p>
                    <p>{formatAmountWithSeparators(cartTotal)} FCFA</p>
                    </div>
            {items.map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                        <div className="cardPanier">
                            <div className="cardBody">
                            <img src={item.image} alt={item.name} className="imageCart"/>
                            <p>{item.texte}<br/><span style={{fontWeight:"900"}}>{formatAmountWithSeparators(item.price)} fcfa</span>&nbsp; &nbsp;<span style={{textDecoration:"line-through"}}>{formatAmountWithSeparators(item.pribarrer)} fcfa</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="groupBTN">
                        <button className="btnDelete" onClick={()=>removeItem(item.id)} style={{height:"30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg></button>
                    
                    <div className="grBouton">
                    <button 
                    type="button"
                    className="btnPre" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                  <button type="button" className="btnDeu">{item.quantity}</button>
                                  <button type="button" className="btnTro" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                </div>
                    
                    
                    </div>
                    </>
                )
            })}
            <div onClick={openModal} className="Commander">
                Commander
            </div>
            
            <div className="Recommand">
              <p className="Recommandtext">Nous vous recommandons aussi ces articles</p>
              <div className="itemContainer">
                {filteredData.map((item) => {
                  return (
                    <div className="recomandPro">
                      <Produit key={item.id} {...item} item={item} className="recordFinal" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="Ecart">
            </div>
        </div>
        
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <Order closeModal={closeModal}/>
        </Modal>
        </>
    )
}

