function About() {
    return (
        <>
            <div className="items-center justify-center space-y-4 font-serif"> {/* Ajoutez 'space-y-4' pour un espacement vertical entre les éléments */}
                <div>This webapp is under construction. It's made by CoutCout.</div>
                <div className="flex items-center justify-center">
                    <a href="https://www.arthurcouturier.fr" target="_blank">You can find other projects I did here</a>
                </div>
                <div>
                    And here you can find both
                    <a href="https://github.com/ArthurCouturier/projet-cuisine-back" target="_blank"> back </a>
                    and
                    <a href="https://github.com/ArthurCouturier/projet-cuisine-front" target="_blank"> front</a> projects.
                </div>
            </div>

        </>
    )
}

export default About;
