import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Card from './component/Card'
import ColorChange from './component/ColorChange'
import DayShower from './component/DayShower'

const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <ColorChange/>
      <DayShower/>
      <Card />
      
    </div>
  )
}

export default App