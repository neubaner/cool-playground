import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.nav`
  background-color: #333;
  color: white;
`
export const Title = styled.h1`
  padding: 10px;
`

export const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
`

export const NavigationItem = styled.li``

export const activeClassName = 'nav-active-class'

export const NavigationLink = styled(NavLink).attrs({
  activeClassName
})`
  display: block;
  padding: 10px;
  &:active,
  &:link,
  &:visited,
  &:hover {
    color: white;
  }
  text-decoration: none;

  &.${activeClassName} {
    background-color: #222;
  }
`
