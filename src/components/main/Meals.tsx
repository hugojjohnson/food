import React from "react";

export default function Meals(): React.ReactElement {

    /** ========== useEffects ========== **/
    // interface requestType {
    //     quote: string
    // }
    // useEffect(() => {
    //     const response = get<requestType>("main/get-quote", { token: user.token})
    //     console.log(response)
    // }, [user.token])

    /** ========== JSX ========== **/
    return <div className="max-w-screen-lg mx-auto pt-10 flex flex-col gap-3">
        <h1 className="text-4xl mb-10">Add reciepts</h1>
        <div className="relative w-64 h-40 group hover:cursor-pointer">
            <div className="absolute bg-gray-800 bg-opacity-50 w-full h-full rounded-md group-hover:opacity-100 opacity-0 transition-all flex flex-col text-white justify-center items-center duration-300">
                <p className="translate-y-10 group-hover:translate-y-0 transition-all duration-500 text-2xl">Chicken risotto</p>
                <p className="translate-y-10 group-hover:translate-y-0 transition-all duration-500">45 mins</p>
                <p className="translate-y-10 group-hover:translate-y-0 transition-all duration-500">serves 4</p>
            </div>
            <img src="/media/cover.webp" className="rounded-md self-start w-full h-full object-cover" />
        </div>
    </div>
}