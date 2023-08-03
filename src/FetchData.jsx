import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './fetchData.css'
import { setData } from './dataSlice';

function FetchData() {

const dispatch = useDispatch()


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        dispatch(setData(response.data.categories))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, [dispatch]);

  

  return <div className='card-container'>See the below menu and add to cart</div>;
}

export default FetchData;

