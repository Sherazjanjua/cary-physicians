
import React from 'react'
import Header from './Header'
import Contact from './Components/Contact'

function App() {
  return (
    <>
    <div className="relative">
      <Header />
      <div className="absolute top-80 md:top-[370px] left-0 w-full ">
        <Contact />
      </div>
    </div>
  </>
  
  )
}

export default App