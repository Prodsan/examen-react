import /*React,*/ { useEffect, useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return data || [];
};