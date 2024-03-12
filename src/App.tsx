import './App.css'
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Profile from "./Pages/Profile.tsx";

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
    }
])

function App() {

  return (
    <>
        <Header className={"bg-gray-800 bg-opacity-60"}/>
        <div className={"h-[80vh] overflow-y-auto scrollbar-hide"} id={"root"}>
            <RouterProvider router={router}/>
        </div>
        <Footer className={"bg-gray-800 bg-opacity-60"}/>
    </>
  )
}

export default App
