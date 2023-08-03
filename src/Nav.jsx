import {useState} from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { useSelector } from 'react-redux'

function Nav() {
  const [showForm, setShowForm] = useState(false)
  const [foodList, setFoodList] = useState('')
  const [listData, setListData] = useState()
  const data = useSelector((state) => state.data)

  const handleTitleButtonClick = () => {
    setShowForm(true)
  }


  const changeHandler = (e) => {
    setFoodList(e.target.value)
  }

  const search = async() => {
    const searchMenu = await data.filter(name => {
    return name.strCategory.toLowerCase().includes(foodList.toLowerCase())
  })
 setListData(searchMenu)
  }
  search()

  return (
    <div>
      <p>Food APP</p>
      <div>
        <button onClick={handleTitleButtonClick}>Search by name</button>
          <form>
          <label htmlFor='search'>Search</label>
           <input
             type='text'
             id='search'
             placeholder='search menu'
             onChange={changeHandler}
             />       
       </form>
       {listData ? (
        <div>
          {listData.map((item, index) => (
            <div key={index}>
              <p>{item.strCategory}</p>
              <img src={item.strCategoryThumb} alt={item.strCategory} />
              <p>{item.strCategoryDescription}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available. Please fetch data first.</p>
      )}
       
         
      </div>
    </div>
  )
      
}

export default Nav
