import React, { useState } from 'react'
import axios from 'axios'

import * as S from './styles'

export default function Search() {
  const [book, setBook] = useState('')
  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState(
    'AIzaSyAOS63RE08B4HGarHw5vo25Hye10zZajFo'
  )

  function handleChange(event) {
    const book = event.target.value

    setBook(book)
  }

  function handleSubmit(event) {
    event.preventDefault()

    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          book +
          '&key=' +
          apiKey +
          '&maxResults=40'
      )
      .then(data => {
        console.log(data.data.items)
        setResult(data.data.items)
      })
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Design Books"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {result.map(book => (
          <span key={book.id}>
            <a href={book.volumeInfo.previewLink}>
              <img
                alt={book.title}
                src={book.volumeInfo.imageLinks.thumbnail}
              />
            </a>
          </span>
        ))}
      </div>
    </S.Wrapper>
  )
}
