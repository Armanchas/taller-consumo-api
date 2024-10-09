import axios from 'axios';

export const fetchPopulationData = async () => {
    try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};