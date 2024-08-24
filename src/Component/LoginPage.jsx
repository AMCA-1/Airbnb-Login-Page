import { Link } from "react-router-dom"
export default function LoginPage(){
    return (
        <div className="mt-4 grow flex items-centre justify-around">
        <div className="mt-40">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className=" mt-2 max-w-md mx-auto  ">
                <input type="email" placeholder="your@gmail.com"></input>
                <input type="password" placeholder="password"></input>
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">Don't have an Account ? <Link className="underline text-black" to={'/register '}>Register Here</Link>
                </div>
            </form>
        </div>  
        </div>
    )
}