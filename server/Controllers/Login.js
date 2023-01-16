const SpotifyWebApi = require('spotify-web-api-node');

const loginApi = (req,res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_KEY,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
        tokenType: data.body.token_type,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: console.log(err)
      });
    });
}

module.exports = loginApi;