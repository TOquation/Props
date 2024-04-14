import React from 'react'
import './index.css'
import User from './components/User'
import List from './components/List'

const App = () => {
  return (
    <div>
      <User isLogged name="Bello"/>
      <User name="Bellerin"/>
      <User />
      <List />
     
    </div>

  )
}

export default App