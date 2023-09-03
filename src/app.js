import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/about.js';
import Error from './components/error.js';
import Cart from './components/cart.js';
import Header from './components/header.js';
import Body from './components/body/body.js';
import Footer from './components/footer.js';
import RestaurantMenu from './components/body/restaurants/restaurant-menu.js';

const App=()=>{

    return(
        <div className='bg-helperColorSecond'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu/>
            }
        ]
    },
    

]);

const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter}/>);