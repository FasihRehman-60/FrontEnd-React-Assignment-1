import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from './NewsItem.jsx'

function capitalize(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : '';
}

const News = ({ country = 'us', pageSize = 8, category = 'general', apiKey, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const fetchPage = async (p) => {
    try {
      setProgress?.(20)
      setLoading(true)
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${p}&pageSize=${pageSize}`
      const res = await fetch(url)
      setProgress?.(50)
      const data = await res.json()
      setProgress?.(80)
      if (p === 1) {
        setArticles(data.articles || [])
      } else {
        setArticles(prev => [...prev, ...(data.articles || [])])
      }
      setTotalResults(data.totalResults || 0)
    } finally {
      setLoading(false)
      setProgress?.(100)
    }
  }

  useEffect(() => {
    document.title = `${capitalize(category)} - NewsWave`
    setPage(1)
    fetchPage(1)
  }, [category])

  const fetchMoreData = async () => {
    const next = page + 1
    setPage(next)
    await fetchPage(next)
  }

  return (
    <section>
      <h1 className="mb-6 text-2xl font-bold tracking-tight">{capitalize(category)} Headlines</h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<div className="py-6 text-center text-sm">Loading…</div>}
        endMessage={<p className="py-6 text-center text-sm text-gray-500">Yay! You have seen it all.</p>}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, idx) => (
            <NewsItem
              key={(a.url || '') + idx}
              title={a.title}
              description={a.description}
              imageUrl={a.urlToImage}
              newsUrl={a.url}
              author={a.author}
              date={a.publishedAt}
              source={a.source?.name}
            />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  )
}

export default News
