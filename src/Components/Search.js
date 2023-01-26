import { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import Songs from "./searchResults";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
  })

const Search = ({ code }) => {

    const accessToken = useAuth(code)

    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
      }, [accessToken])
    
      useEffect(() => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return;

        spotifyApi.searchTracks(search, {limit: 10}).then((res) => {
            setSearchResults(res.body.tracks.items.map((i) => {
                return {
                  artist: i.artists[0].name,
                  artistUrl: i.artists[0].external_urls.spotify,
                  title: i.name,
                  uri: i.uri,
                  albumImage: i.album.images[0].url
                };
              })
            );
          });
        }, [search, accessToken])

        const SearchSpotify = () => {
          if(search === ""){
            return (
              <div>
                <h1>Please Search for Results!</h1>
              </div>
            )
          } else return (
            <div>
              <section>
                <h2>Search Results:</h2>
                  {searchResults.map((search) => {
                    return <Songs search={search} key={search.uri} />;
                  })}
              </section>
            </div>
          )
  
          }

    return (
        <div>
            <div>
            <form>
                <input
                type="search"
                placeholder="Search for a Song..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <div>
              {<SearchSpotify />}
            </div>
            </div>
        </div>
    )
}

export default Search;
