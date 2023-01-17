import React, {useEffect} from 'react';
import useAuth from '../Hooks/useAuth'
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
  })

export default function Dashboard({ code }) {
    const accessToken = useAuth(code);

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
      }, [accessToken])

    return(
        <div>
            <h3>Logged in with Access Token: {accessToken}</h3>       
        </div>
    )
}