import Produit from "./Produit"
import "./Donnees.css"
import SearchBar from "./SearchBar"

import {useState, useEffect, useContext} from 'react'
import axios from "axios"
import {CategoryContext} from "./CategoryContext"



export default function Donnees(){
    
    const [data, setData] = useState([])
    
    const [searchQuery, setSearchQuery] = useState("");
    
    //pagination
    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize] = useState(18);
    
    
    const { selectedCategory } = useContext(CategoryContext);
    

    useEffect(()=>{
        const fetchdata = async()=>{
            const result = await axios('/.netlify/functions/produits')
            setData(result.data)
            setTotalPages(Math.ceil(result.data.length / pageSize));
            
        }
        
        fetchdata()
    }, [pageSize])
    
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
    const filteredData = data
    .filter((item) => !selectedCategory || item.categorie.id === selectedCategory.id)
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())).reverse();

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = filteredData.slice(startIndex, endIndex);
    
    return (
        <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className="Donnees">
                {currentData.map((item) => {
                return <Produit key={item.id} {...item} item={item} />;
              })}
            </div>
            <div>
            {totalPages > 1 && (
              <div className="containerPagination">
                <ul className="pagination">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(pageNumber)}>
                          {pageNumber}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            </div>
        </>
    )
}