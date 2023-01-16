import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function useAuth(code){
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [expiresIn, setExpiresIn] = useState(0);

    useEffect(() => {
        axios.post("http://localhost:3001/v1/login",{
            code,
        })
        .then(res => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[code])
};

