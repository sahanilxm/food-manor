
import RestaurantCard from '../restaurants/restaurant-card.js';
import { IMG_CDN_URL } from '../../../config.js';

const RestaurantList=({filteredRestaurant})=>{

    return(
        <div className="flex flex-wrap justify-center">
        {
            filteredRestaurant.map((restaurant)=>{
                return <RestaurantCard imageURL={IMG_CDN_URL+restaurant?.info?.cloudinaryImageId} name={restaurant?.info?.name} cuisines={restaurant?.info?.cuisines} rating={restaurant?.info?.avgRating} distance={restaurant?.info?.sla?.lastMileTravelString} price={restaurant?.info?.costForTwo}/>
            })
        }
        </div>
    );
};
export default RestaurantList;