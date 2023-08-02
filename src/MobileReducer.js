
const initialState={
    numOfMobiles:100
}

export const MobileReducer = (state=initialState,action) => {
    console.log(action.type+"mobile reducer");
    switch(action.type)
    {
        case 'BUY_Mobile':
            return {...state,numOfMobiles:state.numOfMobiles-1}
            case 'SELL_Mobile':
            return {...state,numOfMobiles:state.numOfMobiles+1}
        default:
            return state   
    }

}
export default MobileReducer;
