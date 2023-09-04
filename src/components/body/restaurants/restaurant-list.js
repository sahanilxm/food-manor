
import RestaurantCard from '../restaurants/restaurant-card.js';
import { IMG_CDN_URL } from '../../../config.js';
import { Link } from 'react-router-dom';

const RestaurantList=({filteredRestaurant})=>{
    return(
        <div className="flex flex-wrap justify-center">
        {
            filteredRestaurant.map((restaurant)=>{
                return <Link key={restaurant?.info?.id} to={'/restaurant/'+restaurant?.info?.id}><RestaurantCard imageURL={IMG_CDN_URL+restaurant?.info?.cloudinaryImageId} name={restaurant?.info?.name} cuisines={restaurant?.info?.cuisines} rating={restaurant?.info?.avgRating} distance={restaurant?.info?.sla?.lastMileTravelString} price={restaurant?.info?.costForTwo}/></Link>
            })
        }
        </div>
    );
};
export default RestaurantList;
