import { useState, useEffect} from 'react';
import { API_URL } from '../config';


const restaurantList=(API_URL)=>{

    const [allRestaurant, setAllRestaurant]=useState([]);
    const [filteredRestaurants, setFilteredRestaurants]=useState([]);

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
                    // console.log(restaurantList);
                    setAllRestaurant(restaurantList);
                    setFilteredRestaurants(restaurantList);
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
    return [allRestaurant,filteredRestaurants];
};
export default restaurantList;