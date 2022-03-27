const reducer = (state,action) =>{
    const limitRGB =(num) => (num<0 ? 0 : num>256 ? 256 : num);
    const step = 50;

    switch(action.type){
        case "Increment_R":
            return{
                ...state,
                r:limitRGB(state.r+step)
            };
        case "Decrement_R": 
            return{
                ...state,
                r:limitRGB(state.r-step),
            };
        case "Increment_G":
            return{
                ...state,
                g:limitRGB(state.g+step)
            };
        case "Decrement_G": 
            return{
                ...state,
                g:limitRGB(state.g-step),
            };
        case "Increment_B":
                return{
                    ...state,
                    b:limitRGB(state.b+step)
                };
        case "Decrement_B": 
                return{
                    ...state,
                    b:limitRGB(state.b-step),
                };
        default:
                return state;
    }
}

export default reducer;