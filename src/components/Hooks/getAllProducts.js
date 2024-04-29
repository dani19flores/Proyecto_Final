import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiData = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get(url);
            setResponse(res.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { loading, error, response };
};

export default useApiData;
