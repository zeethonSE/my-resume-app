import React from 'react'
import Resume from './Resume'
import Header from './Header'
import Footer from './Footer'
import DarkModeToggle from './DarkModeToggle'

function App() {

  return (
    <div>
      <Header />
      <Resume />
      <Footer />
      <div className="fixed top-3 right-5 z-50">
          <DarkModeToggle />
      </div>
    </div>
  )
}

export default App
