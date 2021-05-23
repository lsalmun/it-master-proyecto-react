import listaMh from './listaMh'

function MH () { 
  return (<div className="second-nav-links"> 

{
   listaMh.map(function(todo) {  return (
    <a key={todo.id}>{todo.name}</a>)
 
   
 })}
          </div>
          
)}

          
export default MH