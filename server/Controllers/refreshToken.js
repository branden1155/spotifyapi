const SpotifyWebApi = require('spotify-web-api-node');

const refreshToken = (req,res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_KEY,
        refreshToken,
  })
    spotifyApi
        .refreshAccessToken()
        .then(data => {
            console.log("Access Token:" , accessToken, "Expires In: ", expiresIn)
            res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn,
        })
    })
}

module.exports = refreshToken;