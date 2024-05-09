import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LazyLainding, LazyListing } from './components/Lazy/LazyLoading'
import Router from './components/Router/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        
      </Router>
      <div className='imga'>

        </div>
    </>
  )
}

export default App
