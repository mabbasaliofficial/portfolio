import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Contact";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
   
])

export default router;