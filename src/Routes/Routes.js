import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../Components/ProjectDetails";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/projects/:id',
        element: <ProjectDetails/>,
        loader: ({params}) => fetch(`https://portfolio-data-one.vercel.app/project/${params.id}`)
    }
   
])

export default router;