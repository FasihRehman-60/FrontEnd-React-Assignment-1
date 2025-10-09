import React from 'react'

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
        {imageUrl ? (
          <img src={imageUrl} alt={title || 'news image'} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-sm text-gray-400">No Image</div>
        )}
      </div>
      <div className="p-4">
        {source && <span className="mb-2 inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">{source}</span>}
        <h2 className="mt-1 line-clamp-2 text-base font-semibold">{title}</h2>
        {description && <p className="mt-2 line-clamp-3 text-sm text-gray-600">{description}</p>}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{author ? author : 'Unknown author'}</span>
          {date && <time dateTime={date}>{new Date(date).toLocaleString()}</time>}
        </div>
        <div className="mt-4">
          <a href={newsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
            Read more
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default NewsItem
