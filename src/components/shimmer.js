
const CardShimmer=()=>{
    return(
        <div className="border border-primaryColor shadow rounded-md p-4 mt-4 w-72 mr-8">
        <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
            <div className="bg-gray-400 rounded h-40 border "></div>
            <div className="space-y-3">
                <div className="h-5 bg-gray-400 rounded"></div>
                <div className="h-5 bg-gray-400 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-gray-400 rounded col-span-1"></div>
                <div className="h-4 bg-gray-400 rounded col-span-1"></div>
                <div className="h-4 bg-gray-400 rounded col-span-1"></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};




export const Shimmer=()=>{
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


export const MenuShimmer=()=>{
    return(
        <div>
            <div className="border border-primaryColor shadow bg-gray-200 pl-72">
            <div className="animate-pulse flex space-x-4">
                <div className="py-4 flex">
                <div className="bg-gray-400 rounded h-36 border w-48"></div>
                <div className="pl-8 mt-4">
                    <div className="h-5 w-44 bg-gray-400 rounded mb-4"></div>
                    <div className="h-5 bg-gray-400 rounded mb-4"></div>
                    <div className="grid grid-cols-2 gap-4">
                    <div className="h-4 bg-gray-400 rounded col-span-1"></div>
                    <div className="h-4 bg-gray-400 rounded col-span-1"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {
                Array()
            }
        </div>
    )
};
