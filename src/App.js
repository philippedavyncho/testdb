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
import {ClientNameProvider} from "./Composants/NomContext"


export default function App(){
    
    return (
        <>
        <CartProvider>
        <ToastContainer />
        <div className="App">
            <div className="Anime">
                <Part />
            </div>
            <header>
                <Header />
            </header>
            <nav>
                <OrderProvider>
                <ClientNameProvider>
                  <Menu />
                </ClientNameProvider>
                </OrderProvider>
            </nav>
            
            <section>
                <Routes>
                    <Route path='/' element={<Donnees />}/>
                    <Route path='/:produitId' element={<Detail/>}/>
                </Routes>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
        </CartProvider>
        </>
    )
}