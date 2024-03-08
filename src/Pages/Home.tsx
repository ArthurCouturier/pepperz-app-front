import Card from "../Components/Card.tsx";
import Button from "../Components/Button.tsx";

function Home() {
    return (
        <>
            <div className={"flex items-center justify-center flex-grow"}>
                <div className={"flex"}>
                    Home Page
                </div>
                <div className={"flex items-center justify-center"}>
                    <Card />
                </div>
                <Button>
                    Button
                </Button>
            </div>
        </>
    )
}

export default Home;
