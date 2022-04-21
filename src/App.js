import React, { useEffect, useState } from 'react';

import CardContent from "./components/CardContent/CardContent";

import "./App.scss";

function App() {
  const [news, setNews] = useState([]);

  useEffect(()=> {
    const getNews = async() => {
      await fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=0779060defbd45aab3f66a7ccc30b053")
      .then(response=>response.json())
      .then(data=>{
        setNews(data.articles);
        console.log(data);
      });
    };
    getNews();
  }, []);

  return( 
    <>
      <header className="header">
        <h1>Portal de Notícias</h1>
      </header>
      <div className="wrapper">
        {news.map((news) => (
          <CardContent 
            key={news.publishedAt}
            title={news.title}
            subtitle={news.source.name}
            paragraph={news.description}
            link={news.url}
          />
        ))}
      </div>
    </>
  );
}

export default App;
