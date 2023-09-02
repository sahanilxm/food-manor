
const CardShimmer=()=>{
    return(
        <div class="border border-primaryColor shadow rounded-md p-4 mt-4 w-72 mr-8">
        <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
            <div class="bg-gray-400 rounded h-40 border "></div>
            <div class="space-y-3">
                <div class="h-5 bg-gray-400 rounded"></div>
                <div class="h-5 bg-gray-400 rounded"></div>
                <div class="grid grid-cols-3 gap-4">
                <div class="h-4 bg-gray-400 rounded col-span-1"></div>
                <div class="h-4 bg-gray-400 rounded col-span-1"></div>
                <div class="h-4 bg-gray-400 rounded col-span-1"></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};




const Shimmer=()=>{
    return(
        <div className="flex flex-wrap justify-center">
            {
                Array(10).fill("").map((element,index)=>{
                    return <CardShimmer key={index}/>
                })
            }
        </div>
    );
};
export default Shimmer;