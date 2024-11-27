import Counter from "./Counter";
const CounterGroup = (props) => {
  const { countList, setCountList, sum, setSum } = props;
  return (
    <div>
      {props.countList.map((_, index) => {
        return (
          <Counter
            index={index}
            countList={countList}
            setCountList={setCountList}
            key={Math.random}
            sum={sum}
            setSum={setSum}
          />
        );
      })}
    </div>
  );
};
export default CounterGroup;
