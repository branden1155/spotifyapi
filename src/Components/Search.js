import { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import Songs from "./songResults";
import Albums from "./albumResults";
import Artists from "./artistsResults";
const SpotifyLogo = require('../images/spotify.png');

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

        spotifyApi.searchTracks(search, {limit: 5}).then((res) => {
            setSearchResults(res.body.tracks.items.map((i) => {
                return {
                  artist: i.artists[0].name,
                  artistUrl: i.artists[0].external_urls.spotify,
                  title: i.name,
                  titleUrl: i.external_urls.spotify,
                  uri: i.uri,
                  album: i.album.name,
                  albumUrl: i.album.external_urls.spotify,
                  albumImage: i.album.images[0].url
                };
              })
            );
          });
        }, [search, accessToken])

        const SearchSpotify = () => {
          if(search === ""){
            return (
              <div className="flex h-screen w-full justify-center items-center">
                <h1 className="text-[#1db954] font-bold text-xl drop-shadow-sm underline underline-offset-8 hover:text-black hover:decoration-black duration-300 ease-in-out">Please Search for Results!</h1>
              </div>
            )
          } else return (
            <div className="">
              <span className="flex text-2xl font-bold ml-40 mt-10 uppercase">Songs</span>
              <hr className="h-px my-8 mx-20 bg-gray-200 border-0 "></hr>
              <div className="flex justify-center items-center">
                {searchResults.map((search) => {
                  return <Songs search={search} key={search.uri} />;
                })}
              </div>
              <span className="flex text-2xl font-bold ml-40 mt-10 uppercase">Albums</span>
              <hr className="h-px my-8 mx-20 bg-gray-200 border-0 "></hr>
              <div className="flex justify-center items-center">
                {searchResults.map((search) => {
                  return <Albums search={search} key={search.uri} />;
                })}
              </div>
              <span className="flex text-2xl font-bold ml-40 mt-10 uppercase">Artists</span>
              <hr className="h-px my-8 mx-20 bg-gray-200 border-0 "></hr>
              <div className="flex justify-center items-center">
                {searchResults.map((search) => {
                  return <Artists search={search} key={search.uri} />;
                })}
              </div>
            </div>
          )
  
          }

    return (
        <div className="">
          <div className="flex h-screen bg-[#191414] w-full h-20 items-center shadow-lg">
            <div className="flex flex-row justify-between w-full items-center ">
              <div className="flex pl-6 ">
                <a className="cursor-pointer" href="http://localhost:3000">
                  <img src={SpotifyLogo} className="h-12 w-12" alt="spotify icon"></img>
                </a>
              </div>
              <form className="flex w-96">   
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white drop-shadow-sm shadow-md">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} className="inline-block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search for Songs, Artists, Albums" required></input>
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#1db954] hover:bg-black focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-2 duration-300 ease-in-out">Search</button>
                  </div>
              </form>
              <a href="http://localhost:3000">
                <button className="text-white mt-2 w-20 h-10 bg-[#1db954] uppercase font-medium text-sm shadow-md drop-shadow-sm mr-10 rounded">Sign-Out</button>
              </a>
            </div>
          </div>
        <div>
          <div>
            {<SearchSpotify />}
          </div>
        </div>
      </div>
    )
}

export default Search;
