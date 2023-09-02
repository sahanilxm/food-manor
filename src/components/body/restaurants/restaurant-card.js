
const RestaurantCard=({imageURL, name, cuisines, rating, distance, price})=>{

    return(
        <div className="border border-primaryColor shadow rounded-md p-4 mt-4 w-72 mr-8">
        <div className="flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
            <img className="bg-gray-400 rounded h-40 border" src={imageURL}></img>
            <div className="space-y-3">
                <h3 className=" bg-gray-400 rounded">{name}</h3>
                <div className=" bg-gray-400 rounded">{cuisines.join(', ')}</div>
                <div className="grid grid-cols-3 gap-4">
                <div className=" bg-gray-400 rounded col-span-1">{rating}</div>
                <div className=" bg-gray-400 rounded col-span-1">{distance}</div>
                <div className=" bg-gray-400 rounded col-span-1">{price}</div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};
export default RestaurantCard;