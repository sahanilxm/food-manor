import { Link} from 'react-router-dom';

const Header= ()=>{
    return(
        <div className="flex justify-between p-4 border border-secondaryColor shadow-2xl mb-5 fixed w-full bg-helperColorSecond z-50">
            <div>
                <h1 className="text-primaryColor text-xl font-thin font-mono hover:text-slate-900 hover:cursor-pointer hover:font-bold hover:underline">Food Manor</h1>
            </div>
            <div> 
                <ul className="flex space-x-5">
                    <li className="text-primaryColor font-medium text-lg hover:text-helperColor hover:cursor-pointer hover:font-bold hover:underline">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-primaryColor font-medium text-lg hover:text-helperColor hover:cursor-pointer hover:font-bold hover:underline">
                    <Link to="/about">About</Link>
                    </li>
                    <li className="text-primaryColor font-medium text-lg hover:text-helperColor hover:cursor-pointer hover:font-bold hover:underline">
                    <Link to="/cart">cart</Link>
                    </li>
                    {/* <li className="text-primaryColor font-medium text-lg hover:text-helperColor hover:cursor-pointer hover:font-bold hover:underline">Login</li> */}
                </ul>
            </div>
        </div>
    );
};
export default Header;