import {useEffect} from 'react'
import axios from 'axios'

function FetchData() {

  const url = `https://openlibrary.org/people/mekBot/books/currently-reading.json`

  useEffect(() => {
   const getData = async () => {
    try {
      const response = await axios.get(url)
      console.log(response.data.reading_log_entries)
    } catch(e){
      console.error('Error fetching data:', e)
    }
   } 
   getData()
  })
  return (
    <div>
      
    </div>
  )
}

export default FetchData
