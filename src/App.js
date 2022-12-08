import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Auction } from './components/Auction/Auction'

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/auctions/:id'} element={<Auction />} />
        <Route path={'*'} element={<NavLink className={'link'} to={'/auctions/63926d66711605d2bec2123e'}>Show auction</NavLink>} />
      </Routes>
    </div>
  )
}

export default App