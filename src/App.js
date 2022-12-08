import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Auction } from './components/Auction/Auction'

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/auction/:id'} element={<Auction />} />
        <Route path={'*'} element={<NavLink to={'/auction/1'}>auc</NavLink>} />
      </Routes>
    </div>
  )
}

export default App