import { useState, useEffect } from 'react';
import { fetchNewsFromNewsAPI, fetchSourcesFromNewsAPI } from 'services/newsServices.js';
import favoritesService from 'services/favoritesServices';

const useFetchNews = (country, category) => {
  const [articles, setArticles] = useState([]);
  const [articlesGuardian, setArticlesGuardian] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (country, category, search, source) => {
    setIsLoading(true);
    try {
      const response = await fetchNewsFromNewsAPI(country, category, search, source);
      const sources = await fetchSourcesFromNewsAPI(country);
      const filteredArticles = filterNewsByPreferences(response.news.data.articles);
      setArticles(response.news.data.articles);
      setSources(sources.data.sources);
      setFilteredArticles(filteredArticles);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterNewsByPreferences = (articles) => {
    const authorPreferences = favoritesService.getFavoriteAuthors();
    const sourcePreferences = favoritesService.getFavoriteSources();
  
    return articles.filter((article) => {
      const author = authorPreferences[article.author] && authorPreferences[article.author].liked;
      const source = sourcePreferences[article.source.name] && sourcePreferences[article.source.name].liked;
      return author || source;
    });
  };

  useEffect(() => {
    fetchData(country, category); 
  }, [country, category]);

  return { articles, articlesGuardian ,filteredArticles, sources, isLoading, error, fetchData };
};

export default useFetchNews;