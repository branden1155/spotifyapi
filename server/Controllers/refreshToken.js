const SpotifyWebApi = require('spotify-web-api-node');

const refreshTheToken = (req,res) => {

    const refreshingToken = req.body.refreshToken
    
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_KEY,
        refreshingToken,
  })
    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in,
        })
        console.log("Controller Access Token:", accessToken)
    })
}

module.exports = refreshTheToken;