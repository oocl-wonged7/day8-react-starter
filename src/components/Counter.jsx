import React from "react";
import { useState } from "react";
const Counter = (props) => {
  const { index, countList, setCountList, sum, setSum } = props;

  const handleAddClick = () => {
    let countListCopy = countList.slice();
    countListCopy[index] = countList[index] + 1;
    setCountList(countListCopy);
    setSum(sum + 1);
  };

  const handleMinusClick = () => {
    let countListCopy = countList.slice();
    countListCopy[index] = countList[index] - 1;
    setCountList(countListCopy);
    setSum(sum - 1);
  };
  return (
    <div>
      <button onClick={handleAddClick}> + </button>
      <span>{countList[index]}</span>
      <button onClick={handleMinusClick}> - </button>
    </div>
  );
};

export default Counter;
