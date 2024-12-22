import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState({ items: [] });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(false);

                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error("Failed fetch");
                }

                const data = await res.json();
                setData(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        }

        if (url) {
            getData();
        }
    }, [url])

    return { data, error, isLoading }
}

export default useFetch