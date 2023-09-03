const Footer=()=>{
    const year=new Date().getFullYear();
    return(
        <div className="w-full text-center border-2 border-primaryColor mb-1 pt-3 pb-3 shadow-md shadow-primaryColor z-50">
            Created with 
            <i className="fa-solid fa-heart px-1 text-red-700"></i>
            By, 
            <a href="https://linktr.ee/sahanilxm" target="_blank" title="LinkTree" className="text-orange-600 font-bold hover:text-slate-800 hover:bg-orange-600 hover:rounded-md p-1">@Laxmi Kumar Sahani</a>
            <i className="fa-solid fa-copyright px-1"></i>
            {year}
        </div>
    );

};
export default Footer;