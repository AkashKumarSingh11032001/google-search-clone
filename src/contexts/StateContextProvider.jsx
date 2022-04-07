import React from 'react';
import { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Earth');

    // sompli fetching result from base url same has movies api we did!
    const getResults = async (url) => {
        setIsLoading(true);

        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '290570cc43mshfad36250880468fp1bccc1jsnc5ad4c45c941'
            },
        });

        const data = await res.json();

        if(url.includes('/news')){
            setResults(data.entries);
        } else if(url.includes('/image')){
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }

        
        setIsLoading(false);
    }

    return (
        <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);