import ReactDOM from 'react-dom/client';
import AppLayout from './components/app-layout.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/about.js';
import Error from './components/error.js';


const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    {
        path:'/about',
        element:<About/>
    },

]);

const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter}/>);