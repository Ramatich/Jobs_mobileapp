import { useState, useEffect } from "react";
import axios from "axios";


const useFetch =async (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError] = useState(null);
    const axios = require('axios');
    const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search/${endpoint}',
    headers: {
        'X-RapidAPI-Key':'008cc76139mshef7ffac93a0c1cap1a8be4jsn5cfdcdd7a6a5' ,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query},

    };

    const fetchData = async () =>{
        setIsLoading(true);
    

    try {
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
        console.log(response.data);
    } catch (error) {
        
        setError(error);
        alert('There is an error')
    }
    finally{
        setIsLoading(false);

    }
    }
    useEffect(()=>{
        fetchData();
        },[]);
        const refetch =() =>{
            setIsLoading(true);
            fetchData();
        }


    return{data, isLoading, error, refetch } ;


    

}
export default useFetch;