import React from "react";

export default function AddReciepts(): React.ReactElement {
    // const [user] = useUser()

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
        <div className="flex flex-row gap-2">
            <p className="w-32">Name:</p>
            <input className="border-[1px] border-gray-500 rounded-md" />
        </div>
        <div className="flex flex-row gap-2">
            <p className="w-32">Time bought:</p>
            <input className="border-[1px] border-gray-500 rounded-md" />
        </div>
        <div className="flex flex-row gap-2">
            <p className="w-32">Quantity (g/ml):</p>
            <input className="border-[1px] border-gray-500 rounded-md" />
        </div>
        <div className="flex flex-row gap-2">
            <p className="w-32">Price (dkk):</p>
            <input className="border-[1px] border-gray-500 rounded-md" />
        </div>
        <button className="p-1 px-5 border-[1px] border-gray-500 rounded-md mt-5 self-start">Log</button>


        <h1 className="text-2xl mt-10 mb-0">Recent reciepts</h1>
        <div className="flex flex-row gap-5 border-[1px] border-gray-500 p-3 rounded-md self-start">
            <p>Lurpak butter</p>
            <p>|</p>
            <p>300g</p>
            <p>|</p>
            <p>125 dkk</p>
        </div>
    </div>
}