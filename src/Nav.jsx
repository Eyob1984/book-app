import {useState} from 'react'
import './nav.css'
function Nav() {
  const [showForm, setShowForm] = useState(false)

  const handleTitleButtonClick = () => {
    setShowForm(true)
  }

  const handleAllButtonClick = () => {
    setShowForm(false)
  }
  return (
    <div>
      <p>Book App</p>
      <div>
        <button onClick={handleAllButtonClick}>See all Books</button>
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
