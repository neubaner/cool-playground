import React from 'react'
import {
  Container,
  NavigationList,
  NavigationLink,
  NavigationItem,
  Title
} from './styles'

const routes = [
  {
    to: '/palindromes',
    text: 'Palíndromos'
  },
  {
    to: '/cash-register',
    text: 'Caixa Registradora'
  },
  {
    to: '/garage',
    text: 'Garagem'
  },
  {
    to: '/ceps',
    text: 'Ceps'
  }
]

function SideBar() {
  return (
    <Container>
      <Title>Cool Playground</Title>
      <NavigationList>
        {routes.map(({ to, text }) => (
          <NavigationItem key={to}>
            <NavigationLink to={to}>{text}</NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </Container>
  )
}

export default SideBar
