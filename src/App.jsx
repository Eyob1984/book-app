import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import FetchData from './FetchData'
function App() {

  return (
    <Router>

    <div>
      <Nav />
    <Routes>
        <Route path='/api' element={<FetchData /> } />
    </Routes>
      
    </div>
    </Router>
  )
}

export default App
