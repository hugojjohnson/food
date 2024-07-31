import React from "react";

export default function AddMeal(): React.ReactElement {
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
        <h1 className="text-4xl mb-10">Add a recipe</h1>
        <h3 className="text-2xl">Ingredients</h3>
        <p>getting back to this</p>
        <div className="w-full h-[1.5px] bg-gray-300"></div>
        <div className="flex flex-row gap-6">
            <div className="flex flex-row gap-2">
                <p className="">Name:</p>
                <input className="border-[1px] border-gray-500 rounded-md" />
            </div>
            <div className="flex flex-row gap-2">
                <p className="">Quantity (g/ml):</p>
                <input type="number" className="border-[1px] border-gray-500 rounded-md" />
            </div>
            <div className="flex flex-row gap-2">
                <p className="">Notes:</p>
                <input className="border-[1px] border-gray-500 rounded-md pl-2" placeholder="chopped, fried, etc..." />
            </div>
        </div>
        <div className="w-full h-[1.5px] bg-gray-300"></div>
        <div className="flex flex-row gap-3">
            <button className="border-[1px] border-gray-500 rounded-md px-[6px]">+</button>
            <button className="border-[1px] border-gray-500 rounded-md px-2">-</button>
        </div>


        <h3 className="text-2xl">Method</h3>
        <p>Please add each step on a new line. I'm still deciding whether to add html or markdown for ingredients (in bold) and duration (in italics).</p>
        <textarea className="w-full h-32 border-[1px] border-gray-600 rounded-md p-3" defaultValue={"Finely dice the **onions**, **garlic** and **tomatoes** and fry in a pan over high heat for *30 minutes*. Leave to the side."}></textarea>

        <button className="border-[1px] border-gray-500 rounded-md px-2 self-start text-xl p-3 mt-10">Add recipe</button>
    </div>
}