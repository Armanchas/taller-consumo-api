import axios from 'axios';

export const fetchAnimeRec = async () => {
    try {
        const response = await axios.get('https://api.jikan.moe/v4/recommendations/anime');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}