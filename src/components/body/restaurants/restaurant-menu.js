import { useEffect, useState } from "react";
import { API_MENU_URL, IMG_CDN_URL } from "../../../config";
import { useParams } from "react-router-dom";
import {MenuShimmer} from '../../shimmer.js'
import RestaurantMenuItem from "./restaurant-menu-item";

const RestaurantMenu=()=>{
    const param= useParams();

    const [menuItem, setMenuItem]=useState([]);

    const [restaurantDetails, setRestaurantDetails]= useState(null);

    async function getRestaurantMenu(){
        let data=await fetch(API_MENU_URL+param.id);
        data= await data.json();
        let restaurantInfo=data?.data?.cards[0]?.card?.card?.info;
        
        let restaurant={
            "name": restaurantInfo?.name,
            "imageURL": IMG_CDN_URL+restaurantInfo?.cloudinaryImageId,
            "cuisines": restaurantInfo?.cuisines,
            "rating": restaurantInfo?.avgRating,
            "distance": restaurantInfo?.sla?.lastMileTravelString
        }
        setRestaurantDetails(restaurant);
        data= data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        setMenuItem(data);
    }

    useEffect(()=>{
        getRestaurantMenu();
    }, []);

    return(
        <div className="w-full pt-20 pb-32 min-h-screen ">
            {
                (restaurantDetails === null ? <MenuShimmer/>:
                <div>
                    <div className="border-2 border-primaryColor flex bg-primaryColor pl-72">
                        <div>
                            <img src={restaurantDetails.imageURL} alt="Restaurant Image" className="w-64 p-4 rounded-2xl"/>
                        </div>
                        <div className="p-4 text-white ">
                            <h1 className="text-helperColor font-bold font-primaryFont">{restaurantDetails.name}</h1>
                            <p className="font-mono line-clamp-1">{restaurantDetails.cuisines.join(', ')}</p>
                            <div className="flex flex-2 space-x-3">
                                <p>{restaurantDetails.rating} ⭐</p>
                                <p>|</p>
                                <p>{restaurantDetails.distance}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <h1 className="text-primaryColor pl-72 font-bold font-primaryFont mt-5 mb-5 underline text-xl">Recommended Items</h1>
                    </div>
                </div>
                )
                
            }
            {
                menuItem?.map((menu)=>{
                    if(menu?.card?.card?.itemCards){
                        return <RestaurantMenuItem item={menu?.card?.card?.itemCards}/>
                    }
                })
            }
        </div>
    );
};
export default RestaurantMenu;