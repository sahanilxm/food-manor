import { Link} from 'react-router-dom';

const Header= ()=>{
    return(
        <div className="flex justify-between p-4 border border-secondaryColor shadow-2xl mb-5 fixed w-full bg-helperColorSecond z-50">
            <div className='flex'>
                <img src={require('../assets/logos/delivery-man.png')} className='w-10 h-10'/>
                <h1 className="text-primaryColor text-xl font-thin font-mono hover:text-slate-900 hover:cursor-pointer hover:font-bold hover:underline m-auto pl-2">Food Manor</h1>
            </div>
            <div> 
                <ul className="flex space-x-5 m-auto h-10">
                    <li className="text-primaryColor font-medium text-lg hover:text-helperColor hover:cursor-pointer hover:font-bold hover:underline m-auto">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-primaryColor font-medium text-lg hover:text-helperColor hover:cursor-pointer hover:font-bold hover:underline m-auto">
                    <Link to="/about">About</Link>
                    </li>
                    <li className="text-primaryColor font-medium text-lg hover:text-helperColor hover:cursor-pointer hover:font-bold hover:underline m-auto">
                    <Link to="/cart">Cart</Link>
                    </li>
                    {/* <li className="text-primaryColor font-medium text-lg hover:text-helperColor hover:cursor-pointer hover:font-bold hover:underline m-auto">Login</li> */}
                </ul>
            </div>
        </div>
    );
};
export default Header;