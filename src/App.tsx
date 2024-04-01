import './App.css'
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Profile from "./Pages/Profile.tsx";
import PepperPage from "./Pages/PepperPage.tsx";
import SpecificationPage from "./Pages/SpecificationPage.tsx";
import AllPeppers from "./Pages/AllPeppers.tsx";
import PeppersTypePage from "./Pages/PeppersTypePage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/peppers/:pepperType',
        element: <PeppersTypePage />
    },
    {
        path: '/pepper',
        element: <AllPeppers />
    },
    {
        path: '/peppers',
        element: <AllPeppers />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/pepper/:pepperUuid',
        element: <PepperPage />
    },
    {
        path: '/specification/:specification',
        element: <SpecificationPage />
    }
])

function App() {

    // overflow-y-auto
  return (
    <>
        <Header className={"bg-gray-800 bg-white font-josefin"}/>
        <div className={"bg-force flex-grow h-[87vh] overflow-y-scroll font-cinzel"} id={"root"}>
            <RouterProvider router={router}/>
        </div>
        <Footer className={"bg-opacity-10 bg-white mt-auto"}/>
    </>
  )
}

export default App
