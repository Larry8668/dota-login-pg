import React from "react";
export default function Cred(){
    return(
        <div className="Credwrapper">
        <div className="heading"> NFT Access </div>
        <div className="plsfill"> Please fill your detail to access your account. </div>
        <div className= "Email" >Email</div>
        <input className = "mail"  type="text"/> 
        <div className= "Pass" >Password</div>
        <input className = "password"  type="text"/> <br />
        <div className='check--wrapper'>
        <label> Remember me 
        <input className = "me"  type="checkbox"/>
        </label>
        <a href='#'>Forget Password?</a>
        </div>
        </div>
    )
} 
