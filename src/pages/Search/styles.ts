import styled from 'styled-components'

export const Wrapper = styled.main`
  color: #000;
  height: 100vh;
  display: flex;
  padding: 3rem;
  background: #fc0;
  //align-items: center;
  place-content: center;
  //flex-direction: column;

  h1 {
    font-size: 4rem;
  }

  form {
    display: block;
  }

  div {
    max-width: 1200px;
    margin: 40px 0 0 0;
    //border: 1px solid #f00;
  }

  a {
    color: #000;
    text-decoration: none;
    font-size: 16px;
    transition: opacity 0.2s;

    & + a {
      margin-left: 32px;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`
