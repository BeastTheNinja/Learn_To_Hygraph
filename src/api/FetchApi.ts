export const fetchAPI = async (url: string) => {

    const BASE_URL = import.meta.env.VITE_HYGRAPH_ENDPOINT;
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: url })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error fetching API:", error);
        throw error;
    }
}