const SpotifyWebApi = require('spotify-web-api-node');

const refreshTheToken = (req,res) => {

    const refreshToken = req.body.refreshToken
    
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_KEY,
        refreshToken: refreshToken
  })
    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in,
        })
    }).catch((err => {
        res.status(400).json({
            message: console.log(err)
        })
    }))
}

module.exports = refreshTheToken;