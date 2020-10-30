import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetData = (apiUrl) => {
    const [data, setData] = useState([]);
    console.log(apiUrl);
    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, []);

    return data || [];
};