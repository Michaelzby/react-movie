import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

// 这里储存api key 就是我们获取信息的链接
// urlparams就是后来搜索的信息 比如query里面写的东西
// apikey是相当于一个密码 这样我们才能获取内容
// 比如我们在浏览器输入这个链接也能返回json信息
// 如何开启 首先npm install 然后npm start
const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)
  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.Response === 'True') {
        setData(data.Search || data)
        // 前面的是很多个data情况 后面是single movie page的情况

        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])
  return { isLoading, error, data }
}

export default useFetch
