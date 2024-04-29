import "./App.css"
import Part from "./Composants/Part"
import Menu from "./Composants/Menu"
import Header from "./Composants/Header"
import Donnees from "./Composants/Donnees"
import Footer from "./Composants/Footer"


import {CartProvider} from "react-use-cart"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route} from "react-router-dom"

import { OrderProvider } from './Composants/OrderContext';

import Detail from "./Composants/Detail";

import GrandMenu from "./Composants/GrandMenu"

import GrandPanier from "./Composants/GandPanier"



export default function App(){
    
    return (
        <>
        <CartProvider>
        <ToastContainer />
        <OrderProvider>
        <div className="App">
            <div className="Anime">
                <Part />
                
            </div>
            <header>
                <Header />
                <GrandMenu />
            </header>
            <nav>
                
                  <Menu />
                
            </nav>
            
            <section>
                <Routes>
                    <Route path='/' element={<Donnees />}/>
                    <Route path='/:produitId' element={<Detail/>}/>
                    <Route path="/panier" element={<GrandPanier/>}/>
                </Routes>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
        </OrderProvider>
        </CartProvider>
        </>
    )
}