import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import DisplayDataComponent from './DisplayDataComponent'
import FetchData from './FetchData'
function App() {

  return (
    <Router>

    <div>
      <Nav />
    {/* <Routes>
        <Route path='/api' element={<FetchData />} />
        <Route path='/api' element={< DisplayDataComponent/> } />
    </Routes> */}
      <FetchData />
      <DisplayDataComponent />
    </div>
    </Router>
  )
}

export default App
