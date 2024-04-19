import { Link } from "react-router-dom";
import logo from "../assets/logos/logo1.png";

interface HeaderProps {
    className?: string;
}

function Header({className}: HeaderProps) {
    return (
        <>
            <div className={`h-[10vh] flex items-center justify-between text-xs md:text-sm lg:text-xl ${className}`}>
                <Link to="/" className="h-full object-contain">
                    <img src={logo} className="h-full object-contain" alt="logo"/>
                </Link>
                <div className="flex flex-1">
                    <Link to="/" className="md:ml-2 lg:ml-4 font-bold">Menu</Link>
                    <Link to="/about" className="ml-2 md:ml-3 lg:ml-5 font-bold">A propos</Link>
                    <Link to="/profile" className="ml-2 md:ml-3 lg:ml-5 font-bold">Profil</Link>
                    <Link to="/pepper" className="ml-2 md:ml-3 lg:ml-5 font-bold">Tous les poivres</Link>
                </div>
            </div>
        </>
    );
}

export default Header;
