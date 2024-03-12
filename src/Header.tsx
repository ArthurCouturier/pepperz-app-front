interface HeaderProps {
    className?: string
}

function Header({className}: HeaderProps) {
    return (
        <>
            <div className={`h-[10vh] flex items-center justify-center ` + className}>
                <a href={"/"}>Home</a>
                <a href={"/about"}>About</a>
                <a href={"/profile"}>Profile</a>
            </div>
        </>
    )
}

export default Header;
