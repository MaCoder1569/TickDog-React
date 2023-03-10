import React, { useState, useEffect } from "react";
import SampleComponent from "../components/SampleComponent"

export default function Main() {
    const REST_API_KEY = "b590dcfd52ecf4623db84c3e2a3b34a6"
    const REDIRECT_URI = "http://localhost:3001/auth/kakao/callback"

    return(
        <div>
            <div>main</div>
            <div id="loginblock">
                <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}>Login</a>
            </div>
            
            <SampleComponent />
        </div>
        
    )
}