import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () =>{
    return (
        <>
            <div className="NavBar">
                <div className="NavBarTitulos">
                    <h1>CUYSITO</h1>
                    <h6>tienda de ropa</h6>
                </div>
                <br/>
                <div>
                    <button type="button" className="btn btn-warning">Remeras</button>
                    <button type="button" className="btn btn-warning">Musculosas</button>
                    <button type="button" className="btn btn-warning">Pantalones</button>
                    <button type="button" className="btn btn-warning">Zapatos</button>
                </div>
            </div>
        </>
    );
}

export default NavBar