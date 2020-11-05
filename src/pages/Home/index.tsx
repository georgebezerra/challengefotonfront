import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import Logo from '../../assets/logo.jpg'

export default function Home() {
  return (
    <S.Wrapper>
      <S.Logo src={Logo} alt="Imagem do logo de um livro." />
      <Link to="/search">Lista de livros</Link>
    </S.Wrapper>
  )
}
