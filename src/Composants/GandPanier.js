import {useCart} from "react-use-cart"
import "./GrandPanier.css"


//modal
import Modal from './Modal';

import {useState, useEffect} from 'react'

import Order from "./Order"

import axios from "axios"

import Produit from "./Produit"


function formatAmountWithSeparators(amount) {
  return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



export default function GrandPanier(){
    
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
            const result = await axios('/.netlify/functions/produits')
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
    
    

    if(isEmpty) return <div className="panierVidedata"><h1>votre panier est vide</h1><img
                src="../../img/a2.png"
                alt="Visa"
                className="igVidedata"
              />
              </div>
    return(
        <>
        <div className="cartcontainerdata">
        <div className="CartSolddata">
                    <div><p>Montant</p></div>
                    <div><p>{formatAmountWithSeparators(cartTotal)} FCFA</p></div>
                    </div>
            {items.map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                        <div className="carddata">
                            <div className="cardBodydata">
                            <img src={item.image} alt={item.name} />
                            <div>
                              <p>{item.texte}<br/><span style={{fontWeight:"900"}}>{formatAmountWithSeparators(item.price)} fcfa</span>&nbsp; &nbsp;<span style={{textDecoration:"line-through"}}>{formatAmountWithSeparators(item.pribarrer)} fcfa</span></p>
                              <div className="groupBTNdata">

                    <div className="grBoutondata">
                    <button className="btnDeletedata" onClick={()=>removeItem(item.id)} style={{height:"30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg></button>
                    <button 
                    type="button"
                    className="btnPredata" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                  <button type="button" className="btnDeudata">{item.quantity}</button>
                                  <button type="button" className="btnTrodata" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                  
                                </div>
                                
                    
                    
                    </div>
                            </div>
                           
                            
                            </div>
                        </div>
                    </div>
                   
                    </>
                )
            })}
            <div onClick={openModal} className="Commanderdata">
                Commander
            </div>
            
            <div className="Recommandata">
              <p className="Recommandtextdata">Nous vous recommandons aussi ces articles</p>
              <div className="itemContainerdata">
                {filteredData.map((item) => {
                  return (
                    <div className="recomandProdata">
                      <Produit key={item.id} {...item} item={item} className="recordFinaldata" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="Ecartdata">
            </div>
        </div>
        
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <Order closeModal={closeModal}/>
        </Modal>
        </>
    )
}

