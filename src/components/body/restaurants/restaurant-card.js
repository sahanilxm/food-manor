const RestaurantCard=({imageURL, name, cuisines, rating, distance, price})=>{

    return(
        <div className="border-2 border-primaryColor shadow-primaryColor shadow-lg rounded-md p-4 mt-4 w-72 mr-8 hover:cursor-pointer ">
        <div className="flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
            <img className="bg-gray-400 rounded h-40 border" src={imageURL}></img>
            <div className="space-y-3">
                <h3 className=" bg-gray-400 rounded font-secondaryFont font-semibold">{name}</h3>
                <div className=" bg-gray-400 rounded line-clamp-1 text-primaryColor">{cuisines.join(', ')}</div>
                <div className="flex w-full justify-between">
                    <div className=" bg-gray-400 rounded col-span-1 w-fit">{rating} ⭐</div>
                    <div className=" bg-gray-400 rounded col-span-1 w-fit">{distance}</div>
                    <div className=" bg-gray-400 rounded col-span-1 line-clamp-1 w-fit">{price}</div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};
export default RestaurantCard;