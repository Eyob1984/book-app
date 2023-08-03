import { BrowserRouter as Router,} from 'react-router-dom'
import './App.css'
import Nav from './Nav'

import FetchData from './FetchData'

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <FetchData />
      
    </div>
    </Router>
  )
}

export default App
