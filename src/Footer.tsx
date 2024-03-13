interface FooterProps {
    className?: string; // Assurez-vous que cette ligne existe dans votre interface de props
}

function Footer({className}: FooterProps) {
    return (
        <>
            <div className={`h-[3vh] flex items-center justify-center ` + className}>
                Footer
            </div>
        </>
    )
}

export default Footer;
