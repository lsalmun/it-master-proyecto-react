import { useState } from 'react'
import items from './items.js'





function ItemsList () {

    let [page, setPage] = useState(4)
    let a = 0
    
    let pages = items.slice(a,page)
    
    
    function nextPage() {
       

        setPage(page + 4)
        
    }
    return (
    <>
    <div className="items">
        {
            pages.map(function(dato){ 
            return (
                
                <div className="item-product" key={dato.id}>
     
                     <img src= {dato.image} />
                     {dato.title}
                     {dato.id}
                     
                    </div>)
             })}
        </div>     

        <button onClick={() => setPage(page=4)}>
                Primera pagina
            </button>

       <button className="App-ItemsList-paginado" onClick={nextPage}>
            VER MAS PRODUCTOS

        </button>

        <button onClick={() => setPage(page=items.length)}>
            Ultima pagina
        </button>

        </>
      )}





export default ItemsList