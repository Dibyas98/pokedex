import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LazyLainding, LazyListing } from './components/Lazy/LazyLoading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LazyLainding></LazyLainding>
      <LazyListing></LazyListing>
    </>
  )
}

export default App
