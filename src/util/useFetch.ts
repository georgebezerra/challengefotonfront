import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    function getFetchUrl() {
      return 'https://www.googleapis.com/books/v1/volumes?q=${query}'
    }

    async function fetchData() {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios(getFetchUrl())
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [data])
  return { data, isLoading, isError }
}
