
const initialState={
    numOfLaptops:100
}

export const LaptopReducer = (state=initialState,action) => {
    console.log(action.type,"laptop reducer");
    switch(action.type)
    {
        case 'BUY_LAPTOP':
            return {...state,numOfLaptops:state.numOfLaptops-1}
        case 'SELL_LAPTOP':
            return {...state,numOfLaptops:state.numOfLaptops+1}
        default:
            return state   
    }

}
export default LaptopReducer