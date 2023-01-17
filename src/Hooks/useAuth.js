import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function useAuth(code){
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios
        .post("http://localhost:3001/v1/login",{
            code,
        })
        .then(res => {
            console.log(res.data)
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn)
        
        }).then(res => {
            console.log(accessToken)
        })
        .catch((err) => {
            console.log(err)
        })
    },[code])

      return [accessToken, refreshToken, expiresIn]

};


