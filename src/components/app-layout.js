import Header from './header.js';
import Body from './body/body.js';
import Footer from './footer.js';

const AppLayout=()=>{
    return(
        <div className='bg-helperColorSecond'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};
export default AppLayout;