interface FooterProps {
    className?: string; // Assurez-vous que cette ligne existe dans votre interface de props
}

function Footer({className}: FooterProps) {
    return (
        <>
            <div className={`h-[3vh] flex items-center justify-center ${className} sticky bottom-0`}>
                <a href={`https://www.arthurcouturier.fr`}>Take a look at my portfolio!</a>
            </div>
        </>
    )
}

export default Footer;
