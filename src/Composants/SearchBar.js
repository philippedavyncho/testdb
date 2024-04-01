import "./SearchBar.css"


export default function SearchBar({searchQuery, setSearchQuery}){
    return (
        <form className="recherche">
            <input 
            type="search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Recherche ..."
            className="rech"/>
        </form>
    )
}