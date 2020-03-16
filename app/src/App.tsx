import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import PageContainer from './components/PageContainer'
import SideBar from './components/SideBar'
import GlobalStyle from './styles/global'

function App() {
  return (
    <Router>
      <PageContainer>
        <SideBar />
        <Routes />
      </PageContainer>
      <GlobalStyle />
    </Router>
  )
}

export default App
