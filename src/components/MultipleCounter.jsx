import React from "react";
import { useState } from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";
import Sum from "./Sum";

const MultipleCounter = () => {
  const [sum, setSum] = useState(0);
  const [size, setSize] = useState(5);
  const [sizeWhenReset, setSizeWhenReset] = useState(5);
  const [countList, setCountList] = useState(Array(5).fill(0));

  const handleReset = () => {
    if (size !== sizeWhenReset) {
      setSizeWhenReset(size);
      setCountList(Array(size).fill(0));
      setSum(0);
    }
  };

  return (
    <div>
      <CounterGroupGenerator
        size={size}
        setSize={setSize}
        handleReset={handleReset}
      />
      <Sum sum={sum} />
      <CounterGroup
        sizeWhenReset={sizeWhenReset}
        countList={countList}
        setCountList={setCountList}
        sum={sum}
        setSum={setSum}
      />
    </div>
  );
};

export default MultipleCounter;
