import { useState, useEffect } from "react";
import RestaurantList from "./restaurants/restaurant-list";
import Shimmer from '../../components/shimmer.js';
import {API_URL} from '../../config.js'; 


const Search=({allRestaurant, setFilteredRestaurant})=>{
    const [searchText, setSearchText]= useState('');

    const searchRestaurant=()=>{
        if(searchText !== ''){
            const filterdata=allRestaurant.filter((restaurant)=>{
                if(restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())){
                    return restaurant;
                }
            })
            console.log(filterdata);
            setFilteredRestaurant(filterdata);
        }
        else{
            setFilteredRestaurant(allRestaurant);
        }
    };

    return(
        <div className="flex justify-center">
                <input placeholder="Search a Restaurant..." className="border w-96 border-black rounded-l-md p-2" onChange={(e)=>{
                    setSearchText(e.target.value);
                    // searchRestaurant();   ---> Ispe Kaam Karna hai.
            }}/>
            <button className=" border-orange-800 bg-helperColor text-white p-2 rounded-r-md" onClick={()=>{
                console.log("clicked");
                searchRestaurant();
            }}>Search</button>
        </div>
    );
};



const Body=()=>{

    const [allRestaurant, setAllRestaurant]=useState([]);
    const [filteredRestaurant, setFilteredRestaurant]= useState();

    async function getAllRestaurants(){
        try{
            let restaurantList= await fetch(API_URL);
            if(!restaurantList.ok){
                const err=restaurantList.status;
                throw new Error(err);
            }
            else{
               restaurantList= await restaurantList.json();
               
                function getValidRestaurantList(restaurantList){
                    for(let i=0;i<restaurantList?.data?.cards.length;i++){
                        let validRestaurantList=restaurantList?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                        if(validRestaurantList!=undefined){
                            return validRestaurantList;
                        }
                    }
               };   

               restaurantList= getValidRestaurantList(restaurantList);
               if(restaurantList === undefined){
                    console.log("Currently No service available");
               }
               else{
                    setAllRestaurant(restaurantList);
                    setFilteredRestaurant(restaurantList);
               } 
            }
        }
        catch (error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getAllRestaurants();
    },[]);

    return(
        <div className="pt-20 min-h-screen pb-5">
            <Search allRestaurant={allRestaurant} setFilteredRestaurant={setFilteredRestaurant}/>
            {
                (allRestaurant.length===0? <Shimmer/>: <RestaurantList filteredRestaurant={filteredRestaurant}/>)
            }
        </div>
    );
};
export default Body;