import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
        return(
            <header>
                <div className="header_btn">
                    <Link to="/">
                        <button >SGI</button>
                    </Link>
                    <Link to="/map">
                        <button >Mapa</button>
                    </Link>
                    <Link to="/products">
                        <button >Produtos</button>
                    </Link>
                    <Link to="/companies">
                        <button >Empresas</button>
                    </Link>
                </div>  
            </header>
        )

}


export default Header;