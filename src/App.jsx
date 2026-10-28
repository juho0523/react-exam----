import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LikeButton from './components/LikeButton'
import LiveInput from './components/LiveInput'
import Page from './components/Page'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Notice from './pages/Notice'
import Header from './layouts/Header'
import ProductList from './pages/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <LikeButton />
      <LiveInput />
      <Page /> */}
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/notice' element={<Notice />}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
