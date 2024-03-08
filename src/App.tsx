import './App.css'
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
])

function App() {

  return (
    <>
        <Header />
        <div className={"h-[80vh]"} id={"root"}>
            <RouterProvider router={router}/>
        </div>
        <Footer />
    </>
  )
}

export default App
