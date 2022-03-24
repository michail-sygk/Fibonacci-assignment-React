import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Cell from "../Cell";
import Loading from "../Loading";

const Grid = ({ matrix  }) => {
  const [cells, setCells] = useState([]);
  const matrixRef = useRef(matrix);

  // Render for first time the whole array..

  
  useEffect(() => {
    function initializeArray(){
      let rows;
      const tmpArray = [];
      matrixRef.current.forEach((row, index_row) => {
        rows = row.map((value, index_column) => {
          return (
            <Cell
              key={`${index_row}-${index_column}`}
              i={index_row}
              j={index_column}
            />
          );
        });
        tmpArray.push(rows);
      });
      setCells(tmpArray);
    }
      setTimeout(()=>{initializeArray()},1500)
    
  } , []);

 return (
  cells.length ===0 ?<Loading/> :<div className="grid">{cells}</div>
  )
};

const mapStateToProps = ({ fibonacci }) => {
  const matrix  = [...fibonacci.matrix];

  return {
    matrix
  };
};
 

export default connect(mapStateToProps, null)(Grid);
