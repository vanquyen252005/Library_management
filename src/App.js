import { Routes, Route,Link } from 'react-router-dom'
import HomePage from './pages/Dashboard/Home.js'
import BookPage from './pages/Dashboard/Book.js'
import UserPage from './pages/Dashboard/User.js'
function App () {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to="/Book">Book</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
        </ul>
      </nav>
       <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path='/Book' element = {<BookPage />} />
        <Route path='/User' element = {<UserPage />} />
       </Routes>
    </div>
  )
}
export default App