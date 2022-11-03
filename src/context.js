import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
import useFetch from './useFetch'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)
// use fetch之后 要返回这些元素 这就是context 不改变其他的渲染
// usefetch相当于是一个函数 还要返回给appcontext
  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
