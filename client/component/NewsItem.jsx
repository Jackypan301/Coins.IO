import React from 'react';

const NewsItem = ({news}) => (
  <li>
    {news.source.name}
    {news.title}
    {news.content}
    {news.publishedAt}
    {/* <img src={news.urlToImage} alt='new' /> */}

  </li>
)

export default NewsItem