import axios from 'axios';

export const fetchRandomManga = async () => {
    try {
        const response = await axios.get('https://api.jikan.moe/v4/random/manga');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}