export const initalState = {
    basket: [],
    user: null,
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding items to the basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //remove items from basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default:
            return state;
    }
}

export default reducer;