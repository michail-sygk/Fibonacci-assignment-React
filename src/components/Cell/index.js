import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { add_number } from "../../redux/actions/Fibonacci";

const Cell = ({ i, j, add_number }) => {
  const [css_value, setCSS] = useState("cell noselect");
  const ref = React.createRef();
  const [hasRenderedAlreadyOnce, sethasRenderedAlreadyOnce] = useState(false);

  const value = useSelector(({ fibonacci }) => fibonacci.matrix[i][j]);

  useEffect(() => {
    if (value == undefined && hasRenderedAlreadyOnce) {
      handlingCSS("fibonacci-cell");
    }
  }, [value]);

  useEffect(() => {
    sethasRenderedAlreadyOnce(true);
  }, []);

  function handlingCSS(new_css) {
    const prevCss = css_value;
    setCSS(`${prevCss} ${new_css}`);
    setTimeout(() => {
      setCSS("cell noselect");
    }, 1000);
  }

  function onCellClick() {
    handlingCSS("clicked-cell");
    const cell_information = {
      i: i,
      j: j,
    };
    add_number(cell_information);
  }

  return (
    <div ref={ref} onClick={onCellClick} className={css_value}>
      {!value ? null : value}
    </div>
  );
};

Cell.propTypes = {
  value: PropTypes.number,
  i: PropTypes.number,
  j: PropTypes.number,
};

const mapDispatchToProps = (dispatch) => ({
  add_number: (cell_information) => dispatch(add_number(cell_information)),
});

export default connect(null, mapDispatchToProps)(Cell);
