import './App.css'
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Profile from "./Pages/Profile.tsx";
import PepperPage from "./Pages/PepperPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
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
    }
])

function App() {

    // overflow-y-auto
  return (
    <>
        <Header className={"bg-gray-800 bg-white"}/>
        <div className={"flex-grow h-[87vh] overflow-y-scroll"} id={"root"}>
            <RouterProvider router={router}/>
        </div>
        <Footer className={"bg-opacity-10 bg-white mt-auto"}/>
    </>
  )
}

export default App
