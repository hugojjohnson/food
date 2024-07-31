import React from "react";

export default function Meal(): React.ReactElement {

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
        <h1 className="text-4xl mb-10">Chicken risotto</h1>
        <h3 className="text-2xl">Cost</h3>
        <p>$5.30 per serving | $15 overall | <strong>fetta</strong> is the biggest contributor to price.</p>
        <h3 className="text-2xl">Ingredients</h3>
        <div className="flex items-center">
            <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900"><strong>300g</strong> chicken, <em>chopped</em></label>
        </div>
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900"><strong>2 cups</strong> risotto</label>
        </div>

        <h3 className="text-2xl">Method</h3>
        <ol className="custom-list">
            <li>Finely dice the <strong>onions</strong>, <strong>garlic</strong> and <strong>tomatoes</strong> and fry in a pan over high heat for <em>30 minutes</em>. Leave to the side.</li>
        </ol>

        <h3 className="text-2xl">Notes</h3>
        <textarea className="w-full h-32 border-[1px] border-gray-600 rounded-md p-3" placeholder="Write something..."></textarea>
    </div>
}