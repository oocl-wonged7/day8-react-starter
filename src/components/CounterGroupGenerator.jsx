const CounterGroupGenerator = (props) => {
  const { size } = props;
  const { setSize } = props;
  const { handleReset } = props;

  const hanldeSizeChange = (event) => {
    if (parseInt(event.target.value) > 20) {
      setSize(20);
    } else if (parseInt(event.target.value) < 0) {
      setSize(0);
    } else {
      setSize(parseInt(event.target.value));
    }
  };

  return (
    <div>
      <span>Size: </span>
      <input
        min={0}
        max={20}
        value={size}
        type="number"
        onChange={hanldeSizeChange}
      ></input>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default CounterGroupGenerator;
