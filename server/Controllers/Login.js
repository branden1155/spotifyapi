  const SpotifyWebApi = require('spotify-web-api-node');

  const loginApi = (req,res) => {

      const code = req.body.code;

      const spotifyApi = new SpotifyWebApi({
          redirectUri: "http://localhost:3000",
          clientId: "de6e969b80074e8185e1dd20a5d20ac2",
          clientSecret: "f853dbdb3b7b43b59e84e1b40027bd89",
    })

    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: console.log(err)
        });
      });
  }

  module.exports = loginApi;