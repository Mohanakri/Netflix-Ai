import { useState, useRef } from "react";
import { Validater } from "../utilities/validater";

const Login = () => {

  const [signinform , setsigninform ] = useState(true);

  const email = useRef(null);
  const password = useRef(null);


  
  const handleSignup = () =>{

    setsigninform(!signinform);
  }
  const handleButton =() =>{
    console.log(email.current.value);
    console.log(password.current.value);
    const errmsg = Validater(email.current.value,password.current.value);
    console.log(errmsg);
    

  }


  return (
    <div >
      <form onSubmit={(e)=>e.preventDefault()} className=" flex flex-col border-2 max-w-[23%] mx-auto mt-50">
        <p className=" m-2">{signinform? 'Sign in':'Sign Up'}</p>
        {signinform ? '' : < input type='text' placeholder="UserName " className=" border-2 m-2 rounded-lg "></input>}
        <input ref = {email} type='text' placeholder="Email " className=" border-2 m-2 rounded-lg "></input>
        <input ref = {password} type='password' placeholder="Password" className=" border-2 m-2 rounded-lg "></input>
        <button className=" b-2 rounded-2l bg-green-400 m-2 rounded-lg " onClick={handleButton}> { signinform? 'Sign in':'Sign up'}</button>
        <p className="my-2"> New user? <span className="text-2xl text-blue-600 cursor-pointer"
        onClick={handleSignup} >{ signinform? 'Sign up':'Sign in'}</span>
      </p>
      </form>
    </div>
  )
}

export default Login