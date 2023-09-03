
import RestaurantCard from '../restaurants/restaurant-card.js';
import { IMG_CDN_URL } from '../../../config.js';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const RestaurantList=({filteredRestaurant})=>{
    const param=useParams();
    console.log(param)
    return(
        <div className="flex flex-wrap justify-center">
        {
            filteredRestaurant.map((restaurant)=>{
                return <Link to={'/restaurant'}><RestaurantCard imageURL={IMG_CDN_URL+restaurant?.info?.cloudinaryImageId} name={restaurant?.info?.name} cuisines={restaurant?.info?.cuisines} rating={restaurant?.info?.avgRating} distance={restaurant?.info?.sla?.lastMileTravelString} price={restaurant?.info?.costForTwo}/></Link>
            })
        }
        </div>
    );
};
export default RestaurantList;
