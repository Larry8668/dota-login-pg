import React from "react";
import krish from "../Image/nft.jpg"
import Cred from  "./login_cred.js"

export default function Login(){
    return (
    <div className="Wrapper">

        <div className="Left"><Cred/></div>

        <div className="Right"><img src = {krish}/></div> 
    
    </div>

    )
}
