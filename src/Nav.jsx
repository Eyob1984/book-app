import {useState} from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
  const [showForm, setShowForm] = useState(false)

  const handleTitleButtonClick = () => {
    setShowForm(true)
  }

  const handleBooks = () => {
    setShowForm(false)
  }

  return (
    <div>
      <p>Book App</p>
      <div>
        <Link to='/api' onClick={handleBooks}>See all Books</Link>
        <button onClick={handleTitleButtonClick}>Search by Title</button>
        {showForm && (
          <form>
          <label htmlFor='search'>Search</label>
           <input
             type='text'
             id='search'
             />  
             <button type='submit'>Submit</button>     
       </form>
        )}
        
      </div>
    </div>
  )
}

export default Nav
