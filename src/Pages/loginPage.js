import React from 'react';

const URL = `https://accounts.spotify.com/authorize?client_id=de6e969b80074e8185e1dd20a5d20ac2&response_type=code&redirect_uri=http://localhost:3000`

export default function Login() {
    return(
        <div>
            <h1>Login Here:</h1>
            <a href={URL} >Login to Spotify</a>
        </div>
        
    )
}