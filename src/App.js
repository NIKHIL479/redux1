import {buyLaptop,sellLaptop,buyMobile,sellMobile} from './Action'
import { connect } from 'react-redux'
export const App = (props) => {
  console.log(props,"props");
  
  return (
    <div>
    <div style={{backgroundColor:'pink',width:'150px',textAlign:'center'}}>
      <h1> Laptops: {props.numOfLaptops}</h1>
      <button onClick={props.sell_Laptop}>Increase</button>
      <button onClick={props.buy_Laptop}>Decrease</button>
    </div>
    <div style={{backgroundColor:'pink',width:'150px',textAlign:'center'}}>
      <h1> Mobiles: {props.numOfMobiles}</h1>
      <button onClick={props.sell_Mobile}>Increase</button>
      <button onClick={props.buy_Mobile}>Decrease</button>
    </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
console.log(state);
return {
  numOfLaptops:state.laptop.numOfLaptops,
  numOfMobiles:state.mobile.numOfMobiles
}
}
const mapDispatchToProps=(dispatch)=>{
  console.log(dispatch);
  return {
    buy_Laptop:()=>dispatch(buyLaptop()),
    sell_Laptop:()=>dispatch(sellLaptop()),
    buy_Mobile:()=>dispatch(buyMobile()),
    sell_Mobile:()=>dispatch(sellMobile()),

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)