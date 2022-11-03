import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  // 这些都要是跟global context对应的
  // 这样不会一个组件渲染 其他集体渲染
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type='text '
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
