import React from 'react';
import '../indexStyles.css'
const SpotifyLogo = require('../images/spotify.png');

const URL = `https://accounts.spotify.com/authorize?client_id=de6e969b80074e8185e1dd20a5d20ac2&response_type=code&redirect_uri=http://localhost:3000`

export default function Login() {
    return(
        <div>
            <div className="flex h-screen bg-[#191414] w-full h-20 items-center shadow-lg">
                <header className="flex justify-center">
                    <div className="flex">
                        <div className="flex pl-6">
                            <a href="http://localhost:3000">
                                <img src={SpotifyLogo} className="h-12 w-12" alt="spotify icon"></img>
                            </a>
                        </div>
                    </div>
                </header>
            </div>
            <div className="flex flex-col justify-center items-center pt-64 text-center">
                <span className="text-[#1db954] font-bold text-xl drop-shadow-sm border-solid border-black rounded outline-2">Login to Spotify to search for<br/>your favorite Songs, Artists, and More!</span>
                <a href={URL}>
                    <button type="button" value="Log-in" className="text-black mt-2 w-20 h-10 bg-[#1db954] uppercase font-medium text-sm shadow-md drop-shadow-sm">Log-in!</button>
                </a>
            </div>
        </div>
        
    )
}