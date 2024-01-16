import React from 'react'

const SearchForm = ({search, setSearch}) => {
  return (
    <form id='searchForm' onSubmit={e => e.preventDefault()}>
        <label htmlFor="search">Seach</label>
        <input 
            type="text"
            placeholder='Search Item'
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchForm