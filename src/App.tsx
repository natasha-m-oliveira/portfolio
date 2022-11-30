import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'

import './styles/main.css'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
