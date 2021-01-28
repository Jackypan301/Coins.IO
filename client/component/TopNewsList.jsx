import React from 'react'
import NewsItem from './NewsItem.jsx'

const TopNewsList = function(props) {
  return(
    <div>
    <h1>Top News of Today</h1>
    <ul>
    {props.news.map( (news, index) => <NewsItem  news={news} key={index} />)}
    </ul>
    </div>
  )
}

export default TopNewsList;