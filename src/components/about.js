
const About=()=>{
    return(
        <div className="w-full flex space-x-8 h-screen p-32 pt-48 pb-16 text-center">
            <div className="w-1/4 border-primaryColor space-y-4 border-2 shadow-2xl shadow-primaryColor rounded-md">
                <h1 className='text-primaryColor font-bold underline'>Admin's Profile</h1>
                <img src={require('../assets/images/profile-pic.png')} title='Laxmi-Kumar-Sahani-Profile-Pic' className='w-52 m-auto' alt='Laxmi-Kumar-Sahani-Profile-Pic'/>
                <h4 className='font-primaryFont font-bold text-helperColor'>Laxmi Kumar Sahani</h4>
                <p className='font-secondaryFont text-primaryColor'>Web App Devloper | Competitive Programmar</p>
                <div className='flex space-x-3 justify-center'>
                    <a href='https://github.com/sahanilxm' target='_blank'>
                        <img src={require('../assets/logos/github.png')} className='w-10 h-10'/>
                    </a>
                    <a href='https://www.linkedin.com/in/sahanilxm/' target='_blank'>
                        <img src={require('../assets/logos/linkedin.png')} className='w-10 h-10'/>
                    </a>
                    <a href='mailto::laxmisahani240@gmail.com' target='_blank'>
                        <img src={require('../assets/logos/gmail.png')} className='w-10 h-10'/>
                    </a>
                    <a href='https://www.instagram.com/sahanilxm/' target='_blank'>
                        <img src={require('../assets/logos/instagram.png')} className='w-10 h-10'/>
                    </a>
                </div>
            </div>
            <div className="w-3/4 border-primaryColor space-y-4 border-2 shadow-2xl shadow-primaryColor rounded-md p-10 pt-2">
                <h1 className='text-helperColor font-primaryFont font-bold underline'>Food Manor Web App</h1>
                <p className='text-left text-primaryColor font-secondaryFont'><span className='text-helperColor underline'>"Food Manor"</span> is a user-friendly web application designed to simplify the process of finding and ordering food from various restaurants. Built using the <span className='text-helperColor underline'>MERN (MongoDB, Express.js, React, Node.js)</span> stack, this platform offers a seamless and responsive user experience.<br/>The core functionality of Food Manor revolves around presenting a diverse selection of restaurants along with their menu items. Users can effortlessly browse through a variety of cuisines and dishes, making it easy to explore their culinary options.<br/>To keep its content up-to-date and comprehensive, Food Manor employs a <span className='text-helperColor underline'>context-driven API</span> that extracts restaurant details directly from the Swiggy web page. This ensures that users have access to accurate and current information about the restaurants available on the platform.<br/>In addition to its functional aspects, Food Manor incorporates a <span className='text-helperColor underline'>shimmer UI effect</span>, enhancing the user interface with subtle animations and transitions. This not only makes the app visually appealing but also provides a smooth and enjoyable browsing experience.<br/>For users looking for a specific restaurant, Food Manor offers a convenient <span className='text-helperColor underline'>search feature</span>. This search functionality allows users to quickly locate their preferred restaurant by name.</p>
            </div>
        </div>
    );
};
export default About;