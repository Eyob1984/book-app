
import { useSelector } from "react-redux";

function DisplayDataComponent() {
  const data = useSelector((state) => state.data);
  
  return (
    <div>
      {data ? (
        <div>
          {data.map((item, index) => (
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
  );
}

export default DisplayDataComponent

