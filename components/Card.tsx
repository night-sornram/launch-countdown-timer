export default function Card({number , type} : {number : string, type : string}){
    return(
        <div className=" w-1/4 justify-center items-center flex flex-col space-y-7">
            <div className=" relative w-16 h-16 min-[550px]:w-24 min-[550px]:h-24 md:w-36 md:h-36
            flex justify-center items-center rounded-md bg-[#343650] shadow-[0_5px_0_0px_rgba(27,26,37,1)] min-[550px]:shadow-[0_10px_0_0px_rgba(27,26,37,1)]">
                <h1 className=" text-[#fb6087] text-2xl min-[550px]:text-4xl  md:text-7xl font-bold">
                    {number}
                </h1>
                <div className=" absolute bg-black opacity-20 top-0 left-0 w-full h-1/2">
                </div>
                <div className=" w-1 h-2 min-[550px]:w-2 min-[550px]:h-4 bg-[#1B1A1F] rounded-r-full absolute min-[550px]:top-[calc(50%-0.5rem)] top-[calc(50%-0.25rem)] left-0">
                </div>
                <div className=" w-1 h-2 min-[550px]:w-2 min-[550px]:h-4 bg-[#1B1A1F] rounded-l-full absolute min-[550px]:top-[calc(50%-0.5rem)] top-[calc(50%-0.25rem)] right-0">
                </div>

            </div>

            <h1 className="  min-[550px]:text-base text-sm text-center text-[#8486a9] font-bold tracking-widest">
                {type}
            </h1>

        </div>
    )
}