
import logo from './logo.png'
import hamburguesa from './hamburguesa.svg'
import ItemsList from './ItemsList'
import MH from './mH'


function App(){
  return (
<>
    <div id="first-nav">
        <a href="#footer">Sign in</a> or
        <a href="#footer">create an account</a>
    </div>
    <div id="second-nav">
        <img src= {logo} className="logo" alt="logo" />

        <div className="second-nav-menu">
            <div className="second-nav-hamburger">
                <img src= {hamburguesa} alt=""/>
            </div>
          
            <MH/>
            
         </div>

          

    </div>

    

    <div id="banner">
        <h1>Lorem Ipsum</h1>
    <button>Lern more</button>
    </div>

    <ItemsList/>

    <div id="cookie">
        este sitio utiliza cookies
        <a href="#">Aceptar</a>
    </div>   



    <div id="footer">
        <p>Suscribite al newsletter</p>
        <form action="" method="post">
            <input type="text" />
            <button>Enviar</button>
        </form>
    </div>

    </>
  )
}
export default App