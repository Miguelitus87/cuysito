import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget'

export const NavBar = () =>{
    return (
        <>
            <div className="NavBar">
                <div className="NavBarTitulos">
                    <Link to="/"><h1>CUYSITO</h1></Link>
                    <h6>tienda de ropa</h6>
                </div>
                <br/>
                <div className="Buttons">
                    <div>
                        <Link to="/Remeras"><button type="button" className="btn btn-warning">Remeras</button></Link>
                        <Link to="/Musculosas"><button type="button" className="btn btn-warning">Musculosas</button></Link>
                        <Link to="/Pantalones"><button type="button" className="btn btn-warning">Pantalones</button></Link>
                        <Link to="/Zapatillas"><button type="button" className="btn btn-warning">Zapatillas</button></Link>
                        
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </>
    );
}

