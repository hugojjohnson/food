import React from "react";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";

export default function Dashboard(): React.ReactElement {
    const [user] = useUser()

    /** ========== useEffects ========== **/
    // interface requestType {
    //     quote: string
    // }
    // useEffect(() => {
    //     const response = get<requestType>("main/get-quote", { token: user.token})
    //     console.log(response)
    // }, [user.token])

    /** ========== JSX ========== **/
    return <div className="max-w-screen-lg mx-auto pt-10 flex flex-col">
        <h1 className="text-4xl mb-10">Food</h1>
        <div className="flex flex-row gap-10 justify-center">
            <Link to={"/add-reciepts"} className="p-10 text-xl rounded-md border-2 border-gray-900 hover:scale-105 transition-all">Add reciepts</Link>
            <Link to={"/meals"} className="p-10 text-xl rounded-md border-2 border-gray-900 hover:scale-105 transition-all">Cook a meal</Link>
            <Link to={"/add-meal"} className="p-10 text-xl rounded-md border-2 border-gray-900 hover:scale-105 transition-all">Add meals</Link>
        </div>
    </div>
}