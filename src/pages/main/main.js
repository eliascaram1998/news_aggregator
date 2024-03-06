import React, { useState } from 'react';
import Cards from 'components/Cards/Cards.js';
import useFetchNews from 'hooks/useFetchNews.js';
import FormSearch from 'components/Forms/FormSearch.js';

const Main = () => {

  const { articles, articlesGuardian, filteredArticles, sources, isLoading, error, fetchData } = useFetchNews('us');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSource, setFilterSource] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterDate = (e) => {
    setFilterDate(e.target.value);
  };

  const handleFilterCategory = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleFilterSource = (e) => {
    setFilterSource(e.target.value);
  };

  const submit = async () => {
    await fetchData('us', filterCategory, searchTerm, filterSource);
  }

  const dateOptions = [...new Set(articles.map((article) => new Date(article.publishedAt).toISOString().split('T')[0]))];
  const sourceOptions = [...new Set(sources.map((source) => source.name))]
  const categoryOptions = [...new Set(sources.map((source) => source.category))]
  return (
    <div className="App">
      <header>
        <h1>Newspaper Aggregator</h1>
      </header>
      <FormSearch
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
        dateOptions={dateOptions}
        filterDate={filterDate}
        handleFilterDate={handleFilterDate}
        sourceOptions={sourceOptions}
        handleFilterSource={handleFilterSource}
        categoryOptions={categoryOptions}
        handleFilterCategory={handleFilterCategory}
        submit={submit}
      />
      {filteredArticles.length > 0 && (
        <>
          <h1>Preferences</h1>
          <main>
            {filteredArticles.map((article) => (
              <Cards key={article.id} article={article} />
            ))}
          </main>
          <br />
        </>
      )}
      <h1>All</h1>
      <main>
        {error && <p>Error: {error.message}</p>}
        {articles.map((article) => (
          <Cards key={article.id} article={article} />
        ))}
      </main>
    </div>
  );
};

export default Main;