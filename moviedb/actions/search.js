import { useState, useEffect, useCallback } from "react";
import BaseApi from "../libs/api/BaseApi";

export const useFetch = (query, page) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const results = useCallback(async () => {
        try {
            if(query!==""){
                setLoading(true);
                setError(false);
    
                const res = await new BaseApi().getMovies(query,page);
    
                res.data.Response == "False" ? res.data.Search = []:res.data.Search
                
                setList((prev) => [
                    ...new Set([...prev, ...res.data.Search.map((d) => d)])
                ]);
            }
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [query, page]);

    useEffect(() => {
        results(query);
    }, [query, results, page]);

    useEffect(() => {
        setList([]);
    }, [query]);

    return { loading, error, list };
}