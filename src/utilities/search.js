export const searchItem=(searchText, allRestaurants)=>{
    if(searchText !== ''){
        const filterdata=allRestaurants.filter((restaurant)=>{
            if(restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())){
                return restaurant;
            }
        })
        return filterdata;
    }
};