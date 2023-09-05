import { IMG_CDN_URL } from "../../../config";


const RestaurantMenuItem=({item})=>{
    console.log(item[0]?.card?.info)
    return(
        <div className="ml-72 mr-40">
            {
                item?.map((data)=>{
                    return(
                        <div className="pb-4 flex border-2 border-primaryColor justify-between mb-4">
                            <div className=" pt-10 pl-4">
                                <h4 className="font-primaryFont text-helperColor font-bold">{data?.card?.info?.name}</h4>
                                <p className="text-primaryColor font-mono">Price: ₹{data?.card?.info?.price/100}</p>
                                <p className="line-clamp-1 text-primaryColor font-mono">{data?.card?.info?.description}</p>
                            </div>
                            <div className="pr-4 pt-2">
                                <img src={IMG_CDN_URL+ data?.card?.info?.imageId} className="w-48 border-2 border-primaryColor"/>
                                <button className="border-2 border-helperColor w-48 mt-2 cursor-pointer bg-helperColor text-white rounded-sm" onClick={(()=>{
                                    alert("This function is currently in devloping phase......")
                                })}>Add</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default RestaurantMenuItem;