import { useState, useEffect } from 'react';
import { fetchAPI } from '../api/FetchApi';
import type { BlogResponse } from '../types/Blog';

export const useFetchBlog = (query: string) => {
    const [data, setData] = useState<BlogResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchAPI(query);
                setData(result);
            } catch (err) {
                console.error("Error in useFetchBlog:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error };
}