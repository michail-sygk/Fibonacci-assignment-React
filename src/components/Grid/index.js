import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Cell from "../Cell";

const Grid = ({ matrix  }) => {
  const [cells, setCells] = useState([]);

  // Render for first time the whole array..
  useEffect(() => {
    let rows;
    const tmpArray = [];
    matrix.forEach((row, index_row) => {
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
  } , []);

 


  return <div className="grid">{cells}</div>;
};

const mapStateToProps = ({ fibonacci }) => {
  const matrix  = [...fibonacci.matrix];

  return {
    matrix
  };
};
 

export default connect(mapStateToProps, null)(Grid);
