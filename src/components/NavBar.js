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
                        <Link to="/categoria/remeras"><button type="button" className="btn btn-warning">Remeras</button></Link>
                        <Link to="/categoria/camisas"><button type="button" className="btn btn-warning">Camisas</button></Link>
                        <Link to="/categoria/musculosas"><button type="button" className="btn btn-warning">Musculosas</button></Link>
                        <Link to="/categoria/pantalones"><button type="button" className="btn btn-warning">Pantalones</button></Link>
                        
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </>
    );
}

