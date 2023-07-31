import React from "react";
import { useSelector } from "react-redux";

function DisplayDataComponent() {
  const data = useSelector((state) => state.data);
  
  return (
    <div>
      {data ? (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <p>{item.work.title}</p>
              {item.work.author_names.map((ele) => {
               return  (ele === ele)? ele : ele 
              })}
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

