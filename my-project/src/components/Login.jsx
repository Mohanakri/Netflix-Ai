import { useState } from "react";

const Login = () => {

  const [listsign , setsign ] = useState(true);

  
  const clk = () =>{
    setsign(true);
    console.log('signup click'+' '+listsign+' now setone '+setsign());
  }


  return (
    <div className=" ">
      <form className=" flex flex-col border-2 max-w-80 mx-auto mt-50">
        <p className=" m-2">Sign in</p>
        <input type='text' placeholder="Name" className=" border-2 m-2 rounded-lg "></input>
        <input type='password' placeholder="Password" className=" border-2 m-2 rounded-lg "></input>
        <button className=" b-2 rounded-2l bg-green-400 m-2 rounded-lg " onClick={clk}> Sign in</button>
        <p className=" my-2">New user? <span className=" text-2xl"> Sign Up</span></p>
      </form>
    </div>
  )
}

export default Login