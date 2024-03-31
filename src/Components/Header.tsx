import logo from "../assets/logos/logo1.png";

interface HeaderProps {
    className?: string;
}

function Header({className}: HeaderProps) {
    return (
        <>
            <div className={`h-[10vh] flex items-center justify-between ${className}`}>
                <a href={"/"} className="h-full object-contain">
                    <img src={logo} className="h-full object-contain" alt="logo"/>
                </a>
                <div className="flex flex-1">
                    <a href={"/"} className="ml-4 font-bold">Menu</a>
                    <a href={"/about"} className="ml-5 font-bold">A propos</a>
                    <a href={"/profile"} className="ml-5 font-bold">Profil</a>
                    <a href={"/pepper"} className="ml-5 font-bold">Tous les poivres</a>
                </div>
            </div>
        </>
    );
}

export default Header;
