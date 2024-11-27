import Counter from "./Counter"
const CounterGroup = (props) => {
    return(
        <div>
            <span>{typeof(props.countList)}</span>
            {}
            {
                props.countList.map((_,index)=>{
                    return <Counter index={index} 
                    countList={props.countList} 
                    setCountList={props.setCountList} 
                    key={Math.random} 
                    sum={props.sum} 
                    setSum={props.setSum} />
                })
                // Array.from(Array(parseInt(props.sizeWhenReset))).map((_, index)=>{
                //     return <Counter key={Math.random}/>
                // })
            }
        </div>
        
    )
}
export default CounterGroup;