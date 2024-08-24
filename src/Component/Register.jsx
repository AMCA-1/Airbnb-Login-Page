import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';
export default function Register(){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    function registerUser(event){
        event.preventDefault();//to stop default
        // axios.get('http://localhost:4000/test')
        axios.post('/register' , {
            name,
            email,
            password,
        });//request to api we can also use fetch
    }

    return (
        <div className="mt-4 grow flex items-centre justify-around">
        <div className="mt-40">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className=" mt-2 max-w-md mx-auto  " onSubmit={registerUser}>
                <input type="text" 
                placeholder="Ankit Kumar"
                value={name}
                onChange={event => {
                    setName(event.target.value)}}
                    />
                <input type="email" 
                placeholder="your@gmail.com"
                value={email}
                onChange={event => {
                    setEmail(event.target.value);
                }}
                />
                <input type="password" 
                placeholder="password"
                value={password}
                onChange={event => {
                    setPassword(event.target.value);
                }}/>
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">Already a member ! <Link className="underline text-black" to={'/login '}>Login Here</Link>
                </div>
            </form>
        </div>  
        </div>
    )
}