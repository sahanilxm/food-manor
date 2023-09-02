import ReactDOM from 'react-dom/client';
import AppLayout from './components/app-layout.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/about.js';
import Error from './components/error.js';
import Cart from './components/cart.js';


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
    {
        path:'/cart',
        element:<Cart/>
    }

]);

const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter}/>);