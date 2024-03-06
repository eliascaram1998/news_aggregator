import axios from 'axios';
import { newsApiUrl, theguardianApiUrl } from 'utils/utils.js';

const apiKey = process.env.REACT_APP_API_KEY;
const apiTheGuardian = 'a2f7e334-10cb-412a-b742-e02e3bf1990f';

export const fetchNewsFromNewsAPI = async (country, category, searchTerm, source) => {
    try {
        const response = await axios.get(newsApiUrl, {
            params: {
                apiKey,
                q: searchTerm,
                pageSize: 100,
                ...(source ? { sources: source } : (country && { country })),
                ...(category && { category }),
            },
        });
        const guardianApiResponse = await axios.get(
            "https://content.guardianapis.com/search",
            {
                params: {
                    'api-key': apiTheGuardian,
                },
            })
        const newsData = response;
        const guardianData = guardianApiResponse;

        const combinedData = {
            news: newsData,
            guardian: guardianData,
        };

        return combinedData;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};
export const fetchSourcesFromNewsAPI = async (country) => {
    try {
        const response = await axios.get(newsApiUrl + '/sources', {
            params: {
                apiKey,
                ...(country && { country }),
            },
        });
        return response;
    } catch (error) {
        console.error('Error fetching sources:', error);
        throw error;
    }
};

