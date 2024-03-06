const favoritesService = {
    getFavorites: (key) => JSON.parse(localStorage.getItem(key)) || {},

    toggleFavorite: (key, item) => {
        const storedPreferences = favoritesService.getFavorites(key);
        storedPreferences[item] = {
            liked: !storedPreferences[item]?.liked,
        };
        localStorage.setItem(key, JSON.stringify(storedPreferences));
        return storedPreferences;
    },

    getFavoriteAuthors: () => favoritesService.getFavorites('favoriteAuthors'),
    getFavoriteSources: () => favoritesService.getFavorites('favoriteSources'),

    toggleFavoriteAuthor: (author) => favoritesService.toggleFavorite('favoriteAuthors', author),
    toggleFavoriteSource: (source) => favoritesService.toggleFavorite('favoriteSources', source),
};

export default favoritesService;

