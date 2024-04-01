import logo from "../assets/logos/logo1.png";

interface HeaderProps {
    className?: string;
}

function Header({className}: HeaderProps) {
    return (
        <>
            <div className={`h-[10vh] flex items-center justify-between text-xs md:text-sm lg:text-xl ${className}`}>
                <a href={"/"} className="h-full object-contain">
                    <img src={logo} className="h-full object-contain" alt="logo"/>
                </a>
                <div className="flex flex-1">
                    <a href={"/"} className="md:ml-2 lg:ml-4 font-bold">Menu</a>
                    <a href={"/about"} className="ml-2 md:ml-3 lg:ml-5 font-bold">A propos</a>
                    <a href={"/profile"} className="ml-2 md:ml-3 lg:ml-5 font-bold">Profil</a>
                    <a href={"/pepper"} className="ml-2 md:ml-3 lg:ml-5 font-bold">Tous les poivres</a>
                </div>
            </div>
        </>
    );
}

export default Header;
