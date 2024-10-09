import axios from 'axios';

export const fetchRandomAnime = async () => {
    try {
        const response = await axios.get('https://api.jikan.moe/v4/random/anime');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}