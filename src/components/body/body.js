import restaurantList from "../../hooks/restaurant-list";
import { API_URL, IMG_CDN_URL } from "../../config";
import RestaurantCard from "./restaurants/restaurant-card";
import Shimmer from "../shimmer";
import { useState } from "react";

const Body=()=>{

    const [allRestaurant, filteredResult]=restaurantList(API_URL);
    const [filteredRestaurants, setFilteredRestaurants]=useState(null);


    const [searchText, setSearchText]=useState("");

    const searchItem=(searchText, allRestaurants)=>{
        if(searchText !== ''){
            const filtereddata=allRestaurants.filter((restaurant)=>{
                if(restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())){
                    return restaurant;
                }
            })
            setFilteredRestaurants(filtereddata);
        }
    }


    return(
        <div className="pt-20 min-h-screen pb-5">
            <div className="flex justify-center">
                <input placeholder="Search a Restaurant..." className="border w-96 border-black rounded-l-md p-2" onChange={(e)=>{
                    setSearchText(e.target.value);
                    searchItem(searchText, allRestaurant);
                }}/>
                <button className=" border-orange-800 bg-helperColor text-white p-2 rounded-r-md" onClick={()=>{
                    searchItem(searchText, allRestaurant);
                }}>Search</button>
            </div>
            {
                (allRestaurant?.length ===0?<Shimmer/>:<div className="flex flex-wrap justify-center">
                {
                    (filteredRestaurants === null? filteredResult:filteredRestaurants).map((restaurant)=>{
                        return <RestaurantCard imageURL={IMG_CDN_URL+restaurant?.info?.cloudinaryImageId} name={restaurant?.info?.name} cuisines={restaurant?.info?.cuisines} rating={restaurant?.info?.avgRating} distance={restaurant?.info?.sla?.lastMileTravelString} price={restaurant?.info?.costForTwo}/>
                    })
                }
                </div>)
            }
            
        </div>
    );
};
export default Body;