import { useEffect, useState } from 'react';
import axios from 'axios';

function FetchData() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState(null);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      console.log('object')
      try {
        const response = await axios.get('https://openlibrary.org/people/mekBot/books/currently-reading.json');
        setData1(response.data.reading_log_entries);
        console.log('data1', response)
        setUpdateId(response.data.reading_log_entries[0].work.cover_id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://covers.openlibrary.org/b/id/${updateId}-M.jpg`
        );
        setData2(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (updateId) {
      getData();
    }
  }, [updateId]);

  const handleData1 = () => {
    return data1.map((ele, index) => {
      return (
        <div key={index}>
          <p>{ele.work.title}</p>
          <p>{ele.work.author_names[0]}</p>
        </div>
      );
    });
  };

  return <div>{handleData1()}</div>;
}

export default FetchData;

