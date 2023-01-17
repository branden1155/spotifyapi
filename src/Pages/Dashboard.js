import React, {useEffect} from 'react';
import useAuth from '../Hooks/useAuth'
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
  })

export default function Dashboard({ code }) {
    const [accessToken, refreshToken, expiresIn] = useAuth(code);

    return(
        <div>
            <h1>Access Token:{accessToken}</h1>
            <h1>Refresh Token:{refreshToken}</h1>
            <h1>Expires In:{expiresIn}</h1>
        </div>
    )
}