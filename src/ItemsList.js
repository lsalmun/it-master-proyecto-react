import items from './items.js'





function ItemsList () {
    return (<div className="items">
        {
            items.map(function(dato){ 
            return  <div className="item-product" key={dato.id}>
     
                     <img src= {dato.image} />
                     {dato.title}
                    </div>
             })}
        </div>     
      )}





export default ItemsList